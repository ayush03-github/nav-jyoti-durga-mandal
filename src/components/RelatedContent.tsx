'use client';

import React from 'react';
import { ContentItem } from '@/lib/types';
import { ContentCard } from './ContentCard';
import { useLanguage } from '@/lib/i18n';
import { Sparkles } from 'lucide-react';

interface RelatedContentProps {
  items: ContentItem[];
}

export const RelatedContent: React.FC<RelatedContentProps> = ({ items }) => {
  const { t } = useLanguage();

  if (!items || items.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-cream-200">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-saffron-600" />
        <h2 className="text-xl sm:text-2xl font-bold font-devanagari text-sacred-900">
          {t('relatedDevotional')}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {items.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
