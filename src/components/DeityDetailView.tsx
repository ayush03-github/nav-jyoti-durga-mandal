'use client';

import React from 'react';
import Link from 'next/link';
import { Deity, ContentItem } from '@/lib/types';
import { useLanguage } from '@/lib/i18n';
import { Breadcrumbs } from './Breadcrumbs';
import { ContentCard } from './ContentCard';
import { EmptyState } from './EmptyState';
import { Flame, Music, BookOpen, Sun, Sparkles, ScrollText, ArrowLeft } from 'lucide-react';

interface DeityDetailViewProps {
  deity: Deity;
  items: ContentItem[];
}

export const DeityDetailView: React.FC<DeityDetailViewProps> = ({ deity, items }) => {
  const { language, t } = useLanguage();

  const bhajans = items.filter(i => i.type === 'bhajan');
  const aartis = items.filter(i => i.type === 'aarti');
  const chalisas = items.filter(i => i.type === 'chalisa');
  const mantras = items.filter(i => i.type === 'mantra');
  const stotrams = items.filter(i => i.type === 'stotram');
  const shloks = items.filter(i => i.type === 'shlok');

  const breadcrumbs = [
    { label: language === 'hi' ? 'देवी-देवता' : 'Deities', href: '/deities' },
    { label: language === 'hi' ? deity.name : deity.englishName }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Banner for Deity */}
      <div className="bg-cream-50 rounded-3xl border border-cream-200/90 p-6 sm:p-10 shadow-devotional mb-12 relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <Link
            href="/deities"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sacred-600 hover:text-maroon-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'सभी देवी-देवता' : 'All Deities'}</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 border border-saffron-200">
              {deity.englishName}
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cream-200 text-sacred-700">
              {items.length} {language === 'hi' ? 'रचनाएं उपलब्ध' : 'chants available'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-devanagari text-sacred-900 leading-tight">
            {deity.name}
          </h1>

          <p className="text-sm sm:text-base text-sacred-700 leading-relaxed font-devanagari">
            {language === 'hi' ? deity.description : deity.descriptionEn}
          </p>
        </div>
      </div>

      {/* Sections for Each Non-Empty Category */}
      {items.length === 0 ? (
        <EmptyState
          title={language === 'hi' ? 'इस ईष्ट देव के लिए अभी कोई रचना उपलब्ध नहीं है' : 'No content available for this deity'}
          description={language === 'hi' ? 'कृपया अन्य देवी-देवताओं का संग्रह देखें।' : 'Please check other deities or browse all categories.'}
        />
      ) : (
        <div className="space-y-12">
          
          {/* Bhajans */}
          {bhajans.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-cream-200">
                <Music className="w-5 h-5 text-saffron-600" />
                <h2 className="text-2xl font-bold font-devanagari text-sacred-900">
                  {language === 'hi' ? `${deity.name} के भजन` : `${deity.englishName} Bhajans`}
                </h2>
                <span className="text-xs font-semibold text-sacred-500 bg-cream-200 px-2.5 py-0.5 rounded-full ml-2">
                  {bhajans.length}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bhajans.map(item => (
                  <ContentCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}

          {/* Aartis */}
          {aartis.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-cream-200">
                <Flame className="w-5 h-5 text-maroon-600" />
                <h2 className="text-2xl font-bold font-devanagari text-sacred-900">
                  {language === 'hi' ? `${deity.name} की आरती` : `${deity.englishName} Aartis`}
                </h2>
                <span className="text-xs font-semibold text-sacred-500 bg-cream-200 px-2.5 py-0.5 rounded-full ml-2">
                  {aartis.length}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {aartis.map(item => (
                  <ContentCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}

          {/* Chalisas */}
          {chalisas.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-cream-200">
                <BookOpen className="w-5 h-5 text-amber-600" />
                <h2 className="text-2xl font-bold font-devanagari text-sacred-900">
                  {language === 'hi' ? `${deity.name} की चालीसा` : `${deity.englishName} Chalisa`}
                </h2>
                <span className="text-xs font-semibold text-sacred-500 bg-cream-200 px-2.5 py-0.5 rounded-full ml-2">
                  {chalisas.length}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {chalisas.map(item => (
                  <ContentCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}

          {/* Mantras */}
          {mantras.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-cream-200">
                <Sun className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold font-devanagari text-sacred-900">
                  {language === 'hi' ? `${deity.name} के मंत्र` : `${deity.englishName} Mantras`}
                </h2>
                <span className="text-xs font-semibold text-sacred-500 bg-cream-200 px-2.5 py-0.5 rounded-full ml-2">
                  {mantras.length}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mantras.map(item => (
                  <ContentCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}

          {/* Stotrams */}
          {stotrams.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-cream-200">
                <Sparkles className="w-5 h-5 text-rose-600" />
                <h2 className="text-2xl font-bold font-devanagari text-sacred-900">
                  {language === 'hi' ? `${deity.name} के स्तोत्र` : `${deity.englishName} Stotrams`}
                </h2>
                <span className="text-xs font-semibold text-sacred-500 bg-cream-200 px-2.5 py-0.5 rounded-full ml-2">
                  {stotrams.length}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stotrams.map(item => (
                  <ContentCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}

          {/* Shloks */}
          {shloks.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-cream-200">
                <ScrollText className="w-5 h-5 text-stone-600" />
                <h2 className="text-2xl font-bold font-devanagari text-sacred-900">
                  {language === 'hi' ? `${deity.name} के श्लोक` : `${deity.englishName} Shloks`}
                </h2>
                <span className="text-xs font-semibold text-sacred-500 bg-cream-200 px-2.5 py-0.5 rounded-full ml-2">
                  {shloks.length}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {shloks.map(item => (
                  <ContentCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}

        </div>
      )}
    </div>
  );
};
