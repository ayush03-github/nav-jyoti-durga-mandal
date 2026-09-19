'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface SearchBarProps {
  initialQuery?: string;
  onSearch?: (query: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  size?: 'normal' | 'large';
}

export const SearchBar: React.FC<SearchBarProps> = ({
  initialQuery = '',
  onSearch,
  placeholder,
  autoFocus = false,
  size = 'normal'
}) => {
  const { t } = useLanguage();
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) onSearch('');
  };

  const isLarge = size === 'large';

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-saffron-600 flex items-center justify-center">
          <Search className={isLarge ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-4 h-4'} />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (onSearch) onSearch(e.target.value);
          }}
          placeholder={placeholder || t('searchPlaceholder')}
          autoFocus={autoFocus}
          className={`w-full bg-cream-50 text-sacred-900 placeholder:text-sacred-600 rounded-2xl border border-cream-300 focus:border-saffron-500 focus:ring-4 focus:ring-saffron-500/15 focus:outline-none transition-all shadow-sm font-devanagari ${
            isLarge ? 'pl-12 pr-28 py-3.5 sm:py-4 text-base sm:text-lg' : 'pl-10 pr-24 py-2.5 text-sm sm:text-base'
          }`}
        />

        <div className="absolute right-2.5 flex items-center gap-1.5">
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 rounded-full text-sacred-400 hover:text-sacred-700 hover:bg-cream-200 transition-colors"
              aria-label="Clear search text"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            type="submit"
            className={`font-semibold bg-maroon-700 hover:bg-maroon-800 text-white rounded-xl transition-all shadow-sm active:scale-95 flex items-center justify-center ${
              isLarge ? 'px-4 py-2 text-sm sm:text-base' : 'px-3 py-1.5 text-xs sm:text-sm'
            }`}
          >
            {t('searchButton')}
          </button>
        </div>
      </div>
    </form>
  );
};
