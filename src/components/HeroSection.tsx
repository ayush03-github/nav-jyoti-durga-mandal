'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { SearchBar } from './SearchBar';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-sacred-950 text-white h-[calc(100svh-4rem)] sm:h-[calc(100vh-4rem)] min-h-[400px] flex flex-col justify-end items-center border-b border-cream-200">

      {/* Background Image: Full clean view on all devices */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      />

      {/* Subtle bottom shadow gradient on mobile for search bar contrast */}
      <div className="sm:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Mobile-only Search Bar at the bottom */}
      <div className="sm:hidden w-full max-w-2xl mx-auto px-4 pb-6 relative z-10">
        <SearchBar 
          size="large"
          placeholder={language === 'hi' ? 'भजन, आरती, चालीसा खोजें...' : 'Search bhajans, aartis, chalisas...'}
        />
      </div>
    </section>
  );
};
