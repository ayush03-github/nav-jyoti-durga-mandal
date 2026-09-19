'use client';

import React, { useState, useMemo } from 'react';
import { ContentItem, ContentType } from '@/lib/types';
import { useLanguage } from '@/lib/i18n';
import { CategoryHeader } from './CategoryHeader';
import { ContentCard } from './ContentCard';
import { SearchBar } from './SearchBar';
import { EmptyState } from './EmptyState';
import { getAllDeities } from '@/lib/data';
import { Filter, Sparkles, Flame } from 'lucide-react';

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
  const deities = getAllDeities();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeity, setSelectedDeity] = useState<string>('all');

  // Deities present in this specific category
  const availableDeitySlugs = useMemo(() => {
    const set = new Set<string>();
    items.forEach(item => {
      if (item.deity) set.add(item.deity.toLowerCase());
    });
    return Array.from(set);
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // Deity filter
      if (selectedDeity !== 'all' && item.deity.toLowerCase() !== selectedDeity.toLowerCase()) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = item.title.toLowerCase().includes(q);
        const inEngTitle = item.englishTitle?.toLowerCase().includes(q) || false;
        const inDeity = item.deity.toLowerCase().includes(q);
        const inDesc = item.description.toLowerCase().includes(q);
        const inLyrics = item.lyrics.toLowerCase().includes(q);
        const inKeywords = item.keywords.some(k => k.toLowerCase().includes(q));

        if (!inTitle && !inEngTitle && !inDeity && !inDesc && !inLyrics && !inKeywords) {
          return false;
        }
      }

      return true;
    });
  }, [items, selectedDeity, searchQuery]);

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

      {/* Filter & Search Bar Controls */}
      <div className="bg-cream-50 rounded-2xl border border-cream-200/90 p-4 sm:p-5 mb-8 shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

          {/* Search inside this category */}
          <div className="md:col-span-2">
            <SearchBar
              initialQuery={searchQuery}
              onSearch={(q) => setSearchQuery(q)}
              placeholder={`${language === 'hi' ? titleHi : titleEn} में खोजें...`}
            />
          </div>

          {/* Deity Selector Dropdown */}
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-saffron-600 flex-shrink-0" />
            <select
              value={selectedDeity}
              onChange={(e) => setSelectedDeity(e.target.value)}
              className="w-full bg-cream-100 text-sacred-800 text-xs sm:text-sm font-medium rounded-xl border border-cream-300 px-3 py-2.5 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-500/20 focus:outline-none transition-all"
              aria-label={t('filterByDeity')}
            >
              <option value="all">{t('filterByDeity')}: {t('filterAll')}</option>
              {availableDeitySlugs.map(slug => {
                const d = deities.find(de => de.slug === slug || de.id === slug);
                return (
                  <option key={slug} value={slug}>
                    {d ? (language === 'hi' ? d.name : d.englishName) : slug}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* Quick Deity Chips */}
        {availableDeitySlugs.length > 1 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-cream-200/70 text-xs">
            <button
              type="button"
              onClick={() => setSelectedDeity('all')}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${selectedDeity === 'all'
                  ? 'bg-maroon-700 text-white shadow-xs'
                  : 'bg-cream-100 hover:bg-cream-200 text-sacred-700 border border-cream-300'
                }`}
            >
              {t('filterAll')}
            </button>
            {availableDeitySlugs.map(slug => {
              const d = deities.find(de => de.slug === slug || de.id === slug);
              const label = d ? (language === 'hi' ? d.name : d.englishName) : slug;
              const isSelected = selectedDeity.toLowerCase() === slug.toLowerCase();
              return (
                <button
                  key={slug}
                  type="button"
                  onClick={() => setSelectedDeity(slug)}
                  className={`px-3 py-1 rounded-full font-medium transition-all ${isSelected
                      ? 'bg-maroon-700 text-white shadow-xs font-semibold'
                      : 'bg-cream-100 hover:bg-cream-200 text-sacred-700 border border-cream-300'
                    }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}
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
            setSelectedDeity('all');
          }}
        />
      )}
    </div>
  );
};
