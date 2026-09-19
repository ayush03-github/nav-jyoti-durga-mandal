'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/lib/i18n';
import { searchContent } from '@/lib/data';
import { ContentCard } from '@/components/ContentCard';
import { SearchBar } from '@/components/SearchBar';
import { EmptyState } from '@/components/EmptyState';
import { Breadcrumbs } from '@/components/Breadcrumbs';

function SearchContent() {
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();

  const initialQ = searchParams.get('q') || '';
  const initialType = searchParams.get('type') || 'all';

  const [query, setQuery] = useState(initialQ);
  const [selectedType, setSelectedType] = useState(initialType);

  useEffect(() => {
    const qParam = searchParams.get('q');
    if (qParam !== null) {
      setQuery(qParam);
    }
  }, [searchParams]);

  const results = useMemo(() => {
    return searchContent(query, selectedType);
  }, [query, selectedType]);

  const categories = [
    { value: 'all', labelEn: 'All Categories', labelHi: 'सभी श्रेणियां' },
    { value: 'bhajan', labelEn: 'Bhajan', labelHi: 'भजन' },
    { value: 'aarti', labelEn: 'Aarti', labelHi: 'आरती' },
    { value: 'chalisa', labelEn: 'Chalisa', labelHi: 'चालीसा' },
  ];

  const breadcrumbs = [
    { label: t('search') }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-devanagari text-sacred-900 mb-2">
          {language === 'hi' ? 'भक्ति सामग्री खोज' : 'Search Devotional Collection'}
        </h1>
        <p className="text-sm sm:text-base text-sacred-600 font-devanagari">
          {language === 'hi' 
            ? 'भजन, आरती, चालीसा या लिरिक्स के शब्दों से खोजें।' 
            : 'Search our collection of bhajans, aartis, and chalisas by title, lyrics, or keywords.'}
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-cream-50 rounded-2xl border border-cream-200/90 p-5 mb-8 shadow-xs space-y-4">
        <SearchBar
          initialQuery={query}
          onSearch={(q) => setQuery(q)}
          placeholder={t('searchPlaceholder')}
          size="large"
          autoFocus={!initialQ}
        />

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-cream-200/70">
          
          {/* Category Dropdown */}
          <div className="flex items-center gap-2 min-w-[200px]">
            <label className="text-xs font-bold uppercase tracking-wider text-sacred-600">
              {t('categories')}:
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-cream-100 text-sacred-800 text-xs sm:text-sm font-medium rounded-xl border border-cream-300 px-3 py-2 focus:border-saffron-500 focus:outline-none"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {language === 'hi' ? cat.labelHi : cat.labelEn}
                </option>
              ))}
            </select>
          </div>

          {/* Result Count & Reset */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-sacred-600 bg-cream-200/70 px-3 py-1.5 rounded-full border border-cream-300">
              <span className="font-bold text-maroon-800">{results.length}</span> {t('resultsCount')}
            </span>

            {(query || selectedType !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setSelectedType('all');
                }}
                className="text-xs font-semibold text-maroon-700 hover:text-maroon-900 underline transition-colors"
              >
                {t('clearFilters')}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Grid or Empty State */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-w-5xl">
          {results.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <EmptyState
          onReset={() => {
            setQuery('');
            setSelectedType('all');
          }}
        />
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-sacred-600">
        <div className="w-8 h-8 border-2 border-saffron-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p>लोड हो रहा है...</p>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
