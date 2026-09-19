'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { Home, Search, Compass } from 'lucide-react';

export default function NotFound() {
  const { language, t } = useLanguage();

  return (
    <div className="max-w-xl mx-auto px-4 py-16 sm:py-24 text-center">
      <div className="w-20 h-20 rounded-3xl bg-cream-200/80 border border-cream-300 text-saffron-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
        <Compass className="w-10 h-10" />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-maroon-700 bg-maroon-100 px-3 py-1 rounded-full border border-maroon-200">
        404 • पृष्ठ उपलब्ध नहीं है
      </span>

      <h1 className="text-2xl sm:text-3xl font-bold font-devanagari text-sacred-900 mt-4 mb-3">
        {language === 'hi' ? 'यह पृष्ठ उपलब्ध नहीं है' : 'Page Not Found'}
      </h1>

      <p className="text-sm text-sacred-600 leading-relaxed font-devanagari mb-8 max-w-md mx-auto">
        {language === 'hi'
          ? 'आप जिस भक्ति पृष्ठ को खोज रहे हैं, वह स्थानांतरित हो चुका है या उसका पता बदल गया है।'
          : 'The devotional page you are looking for might have been moved or is currently unavailable.'}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-maroon-700 hover:bg-maroon-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>{t('home')}</span>
        </Link>
        
        <Link
          href="/search"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cream-200 hover:bg-cream-300 text-sacred-900 text-xs sm:text-sm font-semibold border border-cream-300 shadow-xs transition-all"
        >
          <Search className="w-4 h-4" />
          <span>{t('search')}</span>
        </Link>
      </div>
    </div>
  );
}
