'use client';

import React, { useState, useMemo } from 'react';
import { ContentItem, ContentType } from '@/lib/types';
import { useLanguage } from '@/lib/i18n';
import { CategoryHeader } from './CategoryHeader';
import { ContentCard } from './ContentCard';
import { SearchBar } from './SearchBar';
import { EmptyState } from './EmptyState';

interface CategoryListingViewProps {
  type: ContentType;
  items: ContentItem[];
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
}

export const CategoryListingView: React.FC<CategoryListingViewProps> = ({
  type,
  items,
  titleEn,
  titleHi,
  descEn,
  descHi,
}) => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = item.title.toLowerCase().includes(q);
        const inEngTitle = item.englishTitle?.toLowerCase().includes(q) || false;
        const inDesc = item.description.toLowerCase().includes(q);
        const inLyrics = item.lyrics.toLowerCase().includes(q);
        const inLyricsEn = item.lyricsEn ? item.lyricsEn.toLowerCase().includes(q) : false;
        const inKeywords = item.keywords.some(k => k.toLowerCase().includes(q));

        if (!inTitle && !inEngTitle && !inDesc && !inLyrics && !inLyricsEn && !inKeywords) {
          return false;
        }
      }

      return true;
    });
  }, [items, searchQuery]);

  const breadcrumbs = [
    { label: language === 'hi' ? titleHi : titleEn }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <CategoryHeader
        breadcrumbs={breadcrumbs}
        title={language === 'hi' ? titleHi : titleEn}
        subtitle={language === 'hi' ? descHi : descEn}
        count={filteredItems.length}
        countLabel={t('resultsCount')}
        badge={type.toUpperCase()}
      />

      {/* Category Search Bar */}
      <div className="bg-cream-50 rounded-2xl border border-cream-200/90 p-4 sm:p-5 mb-8 shadow-xs">
        <div className="max-w-2xl">
          <SearchBar
            initialQuery={searchQuery}
            onSearch={(q) => setSearchQuery(q)}
            placeholder={`${language === 'hi' ? titleHi : titleEn} में खोजें...`}
          />
        </div>
      </div>

      {/* Content List or Empty State */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-w-5xl">
          {filteredItems.map(item => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <EmptyState
          onReset={() => {
            setSearchQuery('');
          }}
        />
      )}
    </div>
  );
};
