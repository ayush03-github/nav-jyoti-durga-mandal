import { ContentItem, ContentType, SiteConfig } from './types';
import siteData from '@/data/site.json';
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

export function getFeaturedContent(): ContentItem[] {
  return getAllContent().filter(item => item.featured);
}

export function getRelatedContent(currentItem: ContentItem, limit: number = 4): ContentItem[] {
  const all = getAllContent().filter(item => item.id !== currentItem.id);
  
  // Scoring algorithm:
  // 1. Same type = +3
  // 2. Keyword overlap = +1 each
  const scored = all.map(item => {
    let score = 0;
    if (item.type === currentItem.type) score += 3;
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

export function searchContent(query: string, filterType?: string): ContentItem[] {
  const cleanQuery = query.trim().toLowerCase();
  let results = getAllContent();

  if (filterType && filterType !== 'all') {
    results = results.filter(item => item.type === filterType);
  }

  if (!cleanQuery) {
    return results;
  }

  return results.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(cleanQuery);
    const engTitleMatch = item.englishTitle ? item.englishTitle.toLowerCase().includes(cleanQuery) : false;
    const categoryMatch = item.category.toLowerCase().includes(cleanQuery);
    const descMatch = item.description.toLowerCase().includes(cleanQuery);
    const lyricsSnippetMatch = item.lyrics.toLowerCase().includes(cleanQuery);
    const lyricsEnMatch = item.lyricsEn ? item.lyricsEn.toLowerCase().includes(cleanQuery) : false;
    const keywordsMatch = item.keywords.some(k => k.toLowerCase().includes(cleanQuery));

    return titleMatch || engTitleMatch || categoryMatch || descMatch || keywordsMatch || lyricsSnippetMatch || lyricsEnMatch;
  });
}
