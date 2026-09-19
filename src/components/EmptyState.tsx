'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { SearchX, RotateCcw } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  onReset?: () => void;
  showHomeButton?: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  onReset,
  showHomeButton = true
}) => {
  const { t } = useLanguage();

  return (
    <div className="bg-cream-50 rounded-3xl border border-cream-200 p-8 sm:p-12 text-center max-w-lg mx-auto my-8 shadow-devotional-card">
      <div className="w-16 h-16 rounded-2xl bg-cream-200/70 border border-cream-300 text-saffron-600 flex items-center justify-center mx-auto mb-4">
        <SearchX className="w-8 h-8" />
      </div>

      <h3 className="text-xl font-bold font-devanagari text-sacred-900 mb-2">
        {title || t('noResultsTitle')}
      </h3>

      <p className="text-sm text-sacred-600 mb-6 leading-relaxed">
        {description || t('noResultsDesc')}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white shadow-sm transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t('clearFilters')}</span>
          </button>
        )}

        {showHomeButton && (
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl bg-cream-200 hover:bg-cream-300 text-sacred-800 border border-cream-300 shadow-xs transition-all"
          >
            {t('home')}
          </Link>
        )}
      </div>
    </div>
  );
};
