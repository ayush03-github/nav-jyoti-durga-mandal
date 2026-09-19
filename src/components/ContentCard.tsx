'use client';

import React from 'react';
import Link from 'next/link';
import { ContentItem } from '@/lib/types';
import { useLanguage } from '@/lib/i18n';

interface ContentCardProps {
  item: ContentItem;
}

export const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  const { language } = useLanguage();

  const getRoutePrefix = (type: string) => {
    switch (type) {
      case 'bhajan': return '/bhajans';
      case 'aarti': return '/aartis';
      case 'chalisa': return '/chalisa';
      default: return '/bhajans';
    }
  };

  const link = `${getRoutePrefix(item.type)}/${item.slug}`;
  const displayTitle = language === 'en' && item.englishTitle ? item.englishTitle : item.title;

  // Second line: lyrics snippet in a slightly smaller font
  const rawLyrics = item.excerpt || item.lyrics || '';
  const lyricsSnippet = rawLyrics
    .replace(/\r?\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return (
    <Link
      href={link}
      className="group block w-full bg-[#faefe7] hover:bg-[#f5e1d4] active:bg-[#edd0bf] rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 transition-colors duration-150 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
    >
      <div className="flex flex-col gap-0.5 min-w-0">
        {/* Line 1: Title */}
        <div className="text-sm sm:text-base font-medium text-[#2e2623] group-hover:text-black transition-colors font-devanagari leading-snug truncate">
          {displayTitle}
        </div>
        {/* Line 2: Lyrics snippet in slightly smaller font */}
        {lyricsSnippet && (
          <div className="text-xs sm:text-[13px] text-[#786a63] group-hover:text-[#524640] transition-colors font-devanagari leading-tight truncate">
            {lyricsSnippet}
          </div>
        )}
      </div>
    </Link>
  );
};
