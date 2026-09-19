export type ContentType = 'bhajan' | 'aarti' | 'chalisa';

export interface ContentItem {
  id: string;
  title: string;
  englishTitle?: string;
  slug: string;
  type: ContentType;
  deity: string;
  category: string;
  lyrics: string;
  lyricsEn?: string;
  description: string;
  excerpt: string;
  keywords: string[];
  festival?: string[];
  image?: string;
  youtubeUrl?: string;
  audioUrl?: string;
  featured?: boolean;
  published?: boolean;
}

export interface Deity {
  id: string;
  name: string;
  englishName: string;
  slug: string;
  description: string;
  descriptionEn: string;
  color?: string;
  featured?: boolean;
  image?: string;
}

export interface Festival {
  id: string;
  name: string;
  englishName: string;
  slug: string;
  description: string;
  descriptionEn: string;
  featured?: boolean;
  image?: string;
  deity?: string;
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
