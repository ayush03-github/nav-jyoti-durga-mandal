'use client';

import React from 'react';
import Link from 'next/link';
import { Festival, ContentItem } from '@/lib/types';
import { useLanguage } from '@/lib/i18n';
import { Breadcrumbs } from './Breadcrumbs';
import { ContentCard } from './ContentCard';
import { EmptyState } from './EmptyState';
import { Sparkles, Calendar, ArrowLeft, Flame, Music, BookOpen, Sun } from 'lucide-react';

interface FestivalDetailViewProps {
  festival: Festival;
  items: ContentItem[];
}

export const FestivalDetailView: React.FC<FestivalDetailViewProps> = ({ festival, items }) => {
  const { language, t } = useLanguage();

  const bhajans = items.filter(i => i.type === 'bhajan');
  const aartis = items.filter(i => i.type === 'aarti');
  const chalisas = items.filter(i => i.type === 'chalisa');
  const mantras = items.filter(i => i.type === 'mantra');
  const otherItems = items.filter(i => i.type === 'stotram' || i.type === 'shlok');

  const breadcrumbs = [
    { label: language === 'hi' ? 'पर्व एवं उत्सव' : 'Festivals', href: '/festivals' },
    { label: language === 'hi' ? festival.name : festival.englishName }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-cream-50 via-cream-100 to-saffron-50/50 rounded-3xl border border-saffron-200/80 p-6 sm:p-10 shadow-devotional mb-12 relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <Link
            href="/festivals"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sacred-600 hover:text-maroon-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'सभी पर्व संग्रह' : 'All Festival Collections'}</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-saffron-200 text-saffron-900 border border-saffron-300 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-saffron-700" />
              <span>{festival.englishName}</span>
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cream-200 text-sacred-700">
              {items.length} {language === 'hi' ? 'विशेष पाठ' : 'special chants'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-devanagari text-sacred-900 leading-tight">
            {festival.name}
          </h1>

          <p className="text-sm sm:text-base text-sacred-700 leading-relaxed font-devanagari">
            {language === 'hi' ? festival.description : festival.descriptionEn}
          </p>
        </div>
      </div>

      {/* Grouped Chants */}
      {items.length === 0 ? (
        <EmptyState
          title={language === 'hi' ? 'इस पर्व के लिए अभी कोई विशेष रचना उपलब्ध नहीं है' : 'No festival items found'}
          description={language === 'hi' ? 'कृपया अन्य उत्सव अथवा मुख्य श्रेणियां देखें।' : 'Please explore other festivals or categories.'}
        />
      ) : (
        <div className="space-y-12">
          
          {/* Bhajans */}
          {bhajans.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-cream-200">
                <Music className="w-5 h-5 text-saffron-600" />
                <h2 className="text-2xl font-bold font-devanagari text-sacred-900">
                  {language === 'hi' ? 'विशेष उत्सव भजन' : 'Festival Bhajans'}
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
                  {language === 'hi' ? 'विशेष पूजन आरती' : 'Festival Aartis'}
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
                  {language === 'hi' ? 'चालीसा पाठ' : 'Festival Chalisas'}
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

          {/* Mantras & Others */}
          {(mantras.length > 0 || otherItems.length > 0) && (
            <section>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-cream-200">
                <Sun className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold font-devanagari text-sacred-900">
                  {language === 'hi' ? 'मंत्र एवं स्तोत्र' : 'Mantras & Stotrams'}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...mantras, ...otherItems].map(item => (
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
