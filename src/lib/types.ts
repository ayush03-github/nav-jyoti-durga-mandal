export type ContentType = 'bhajan' | 'aarti' | 'chalisa';

export interface ContentItem {
  id: string;
  title: string;
  englishTitle?: string;
  slug: string;
  type: ContentType;
  category: string;
  lyrics: string;
  lyricsEn?: string;
  description: string;
  excerpt: string;
  keywords: string[];
  deity?: string;
  festival?: string[];
  image?: string;
  youtubeUrl?: string;
  audioUrl?: string;
  featured?: boolean;
  published?: boolean;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  taglineEn: string;
  taglineHi: string;
  descriptionEn: string;
  descriptionHi: string;
  logo?: string;
  contact?: {
    email: string;
    note?: string;
  };
  social: {
    youtube?: string;
    instagram?: string;
    facebook?: string;
  };
  navLinks: {
    nameEn: string;
    nameHi: string;
    href: string;
  }[];
}

export type Language = 'en' | 'hi';
