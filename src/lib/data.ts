import { ContentItem, ContentType, Deity, Festival, SiteConfig } from './types';
import siteData from '@/data/site.json';
import deitiesData from '@/data/deities.json';
import festivalsData from '@/data/festivals.json';
import bhajansData from '@/data/bhajans.json';
import aartisData from '@/data/aartis.json';
import chalisasData from '@/data/chalisas.json';

const allContentList: ContentItem[] = [
  ...(bhajansData as ContentItem[]),
  ...(aartisData as ContentItem[]),
  ...(chalisasData as ContentItem[]),
];

export function getSiteConfig(): SiteConfig {
  return siteData as SiteConfig;
}

export function getAllDeities(): Deity[] {
  return deitiesData as Deity[];
}

export function getDeityBySlug(slug: string): Deity | undefined {
  return (deitiesData as Deity[]).find(d => d.slug.toLowerCase() === slug.toLowerCase() || d.id.toLowerCase() === slug.toLowerCase());
}

export function getAllFestivals(): Festival[] {
  return festivalsData as Festival[];
}

export function getFestivalBySlug(slug: string): Festival | undefined {
  return (festivalsData as Festival[]).find(f => f.slug.toLowerCase() === slug.toLowerCase() || f.id.toLowerCase() === slug.toLowerCase());
}

export function getAllContent(): ContentItem[] {
  return allContentList.filter(item => item.published !== false);
}

export function getContentByType(type: ContentType): ContentItem[] {
  return getAllContent().filter(item => item.type === type);
}

export function getContentBySlug(type: ContentType, slug: string): ContentItem | undefined {
  return getAllContent().find(
    item => item.type === type && item.slug.toLowerCase() === slug.toLowerCase()
  );
}

export function getContentByDeity(deitySlug: string): ContentItem[] {
  const normDeity = deitySlug.toLowerCase();
  return getAllContent().filter(
    item => item.deity.toLowerCase() === normDeity
  );
}

export function getContentByFestival(festivalSlug: string): ContentItem[] {
  const normFest = festivalSlug.toLowerCase();
  return getAllContent().filter(
    item => item.festival && item.festival.some(f => f.toLowerCase() === normFest)
  );
}

export function getFeaturedContent(): ContentItem[] {
  return getAllContent().filter(item => item.featured);
}

export function getRelatedContent(currentItem: ContentItem, limit: number = 4): ContentItem[] {
  const all = getAllContent().filter(item => item.id !== currentItem.id);
  
  // Scoring algorithm:
  // 1. Same deity = +4
  // 2. Same type = +2
  // 3. Shared festival = +3
  // 4. Keyword overlap = +1 each
  const scored = all.map(item => {
    let score = 0;
    if (item.deity.toLowerCase() === currentItem.deity.toLowerCase()) score += 4;
    if (item.type === currentItem.type) score += 2;
    if (currentItem.festival && item.festival) {
      const commonFest = currentItem.festival.some(f => item.festival?.includes(f));
      if (commonFest) score += 3;
    }
    if (currentItem.keywords && item.keywords) {
      const commonKeywords = currentItem.keywords.filter(k => 
        item.keywords.some(ik => ik.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(ik.toLowerCase()))
      );
      score += commonKeywords.length;
    }
    return { item, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(s => s.item);
}

export function searchContent(query: string, filterType?: string, filterDeity?: string): ContentItem[] {
  const cleanQuery = query.trim().toLowerCase();
  let results = getAllContent();

  if (filterType && filterType !== 'all') {
    results = results.filter(item => item.type === filterType);
  }

  if (filterDeity && filterDeity !== 'all') {
    results = results.filter(item => item.deity.toLowerCase() === filterDeity.toLowerCase());
  }

  if (!cleanQuery) {
    return results;
  }

  return results.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(cleanQuery);
    const engTitleMatch = item.englishTitle ? item.englishTitle.toLowerCase().includes(cleanQuery) : false;
    const deityMatch = item.deity.toLowerCase().includes(cleanQuery);
    const categoryMatch = item.category.toLowerCase().includes(cleanQuery);
    const descMatch = item.description.toLowerCase().includes(cleanQuery);
    const lyricsSnippetMatch = item.lyrics.toLowerCase().includes(cleanQuery);
    const lyricsEnMatch = item.lyricsEn ? item.lyricsEn.toLowerCase().includes(cleanQuery) : false;
    const keywordsMatch = item.keywords.some(k => k.toLowerCase().includes(cleanQuery));

    return titleMatch || engTitleMatch || deityMatch || categoryMatch || descMatch || keywordsMatch || lyricsSnippetMatch || lyricsEnMatch;
  });
}
