'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { HeroSection } from '@/components/HeroSection';
import { ContentCard } from '@/components/ContentCard';
import { DeityCard } from '@/components/DeityCard';
import { 
  getContentByType, 
  getAllDeities 
} from '@/lib/data';
import { 
  Flame, 
  BookOpen, 
  Music, 
  ChevronRight 
} from 'lucide-react';

export default function HomePage() {
  const { t, language } = useLanguage();

  const bhajans = getContentByType('bhajan');
  const aartis = getContentByType('aarti').slice(0, 4);
  const chalisas = getContentByType('chalisa').slice(0, 4);
  const deities = getAllDeities().filter(d => d.featured !== false).slice(0, 6);

  return (
    <div className="space-y-12 sm:space-y-20 pb-12">
      
      {/* 1. Dedicated Devotional Hero Section */}
      <HeroSection />

      {/* 2. Popular / Featured Bhajans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6 sm:mb-8 pb-3 border-b border-cream-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron-700 mb-1">
              <Music className="w-4 h-4 text-saffron-600" />
              <span>{language === 'hi' ? 'भजन' : 'Bhajans'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-devanagari text-sacred-900">
              {t('featuredBhajans')}
            </h2>
          </div>
          <Link
            href="/bhajans"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-maroon-700 hover:text-saffron-700 transition-colors group"
          >
            <span>{t('viewAll')}</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-w-5xl">
          {bhajans.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 3. Aarti Sangrah Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6 sm:mb-8 pb-3 border-b border-cream-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-maroon-700 mb-1">
              <Flame className="w-4 h-4 text-maroon-600" />
              <span>{language === 'hi' ? 'आरती' : 'Aartis'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-devanagari text-sacred-900">
              {t('featuredAartis')}
            </h2>
          </div>
          <Link
            href="/aartis"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-maroon-700 hover:text-saffron-700 transition-colors group"
          >
            <span>{t('viewAll')}</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-w-5xl">
          {aartis.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 4. Divine Chalisa Sangrah */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6 sm:mb-8 pb-3 border-b border-cream-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>{language === 'hi' ? 'चालीसा' : 'Chalisa'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-devanagari text-sacred-900">
              {t('featuredChalisa')}
            </h2>
          </div>
          <Link
            href="/chalisa"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-maroon-700 hover:text-saffron-700 transition-colors group"
          >
            <span>{t('viewAll')}</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-w-5xl">
          {chalisas.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 5. Browse by Deity */}
      <section className="bg-cream-100/60 py-12 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 pb-3 border-b border-cream-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-saffron-700 block mb-1">
                {language === 'hi' ? 'ईष्ट देव' : 'Divine Deities'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-devanagari text-sacred-900">
                {t('browseByDeity')}
              </h2>
            </div>
            <Link
              href="/deities"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-maroon-700 hover:text-saffron-700 transition-colors group"
            >
              <span>{t('viewAll')}</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-w-5xl">
            {deities.map((deity) => (
              <DeityCard key={deity.id} deity={deity} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. About Nav Jyoti Durga Mandal (NJDM) Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-cream-100 via-cream-50 to-saffron-50/50 rounded-3xl border border-cream-300 p-8 sm:p-12 shadow-devotional">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-maroon-700 text-gold-300 mx-auto flex items-center justify-center text-2xl font-bold font-heading shadow-md">
              ॐ
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold font-devanagari text-sacred-900">
              {language === 'hi' ? 'नव ज्योति दुर्गा मंडल (NJDM)' : 'Nav Jyoti Durga Mandal (NJDM)'}
            </h2>

            <p className="text-sm sm:text-base text-sacred-700 leading-relaxed font-devanagari">
              {language === 'hi' 
                ? 'नव ज्योति दुर्गा मंडल का उद्देश्य सनातन भक्ति परंपरा, मधुर भजनों, आरतियों, चालीसा एवं वेदोक्त मंत्रों को उनके मूल, प्रामाणिक एवं शुद्ध रूप में प्रस्तुत व संरक्षित करना है।'
                : 'Nav Jyoti Durga Mandal is committed to presenting and preserving sacred devotional hymns, aartis, chalisas, and Vedic chants in their purest and most authentic traditional form.'
              }
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/about"
                className="px-6 py-2.5 rounded-xl bg-maroon-700 hover:bg-maroon-800 text-white font-semibold text-sm shadow-sm transition-all active:scale-95"
              >
                {t('about')}
              </Link>
              <Link
                href="/search"
                className="px-6 py-2.5 rounded-xl bg-cream-200 hover:bg-cream-300 text-sacred-900 font-semibold text-sm border border-cream-300 transition-all"
              >
                {t('search')}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
