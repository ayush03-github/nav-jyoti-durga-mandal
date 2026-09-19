'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { SearchBar } from './SearchBar';
import { Sparkles, Music, Flame, BookOpen, Sun, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { language, t } = useLanguage();

  const quickPills = [
    { label: 'श्री हनुमान चालीसा', href: '/chalisa/hanuman-chalisa' },
    { label: 'जय अम्बे गौरी आरती', href: '/aartis/jai-ambe-gauri' },
    { label: 'शिव ताण्डव स्तोत्रम्', href: '/stotram/shiv-tandav-stotram' },
    { label: 'गायत्री महामंत्र', href: '/mantras/gayatri-mantra' },
    { label: 'माँ दुर्गा भजन', href: '/deities/durga' },
    { label: 'अच्युतम केशवम', href: '/bhajans/achyutam-keshavam' },
  ];

  const highlights = [
    { icon: Music, labelHi: 'पावन भजन', labelEn: 'Devotional Bhajans', href: '/bhajans' },
    { icon: Flame, labelHi: 'आरती संग्रह', labelEn: 'Sacred Aartis', href: '/aartis' },
    { icon: BookOpen, labelHi: 'चालीसा पाठ', labelEn: 'Divine Chalisa', href: '/chalisa' },
    { icon: Sun, labelHi: 'वेदिक मंत्र', labelEn: 'Vedic Mantras', href: '/mantras' },
  ];

  return (
    <section className="relative overflow-hidden bg-sacred-950 text-white h-[calc(100svh-4rem)] sm:h-auto min-h-[500px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-end sm:justify-center items-center border-b border-cream-200">

      {/* Background Image: Full opacity on mobile, 20% on desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 sm:opacity-20 sm:scale-105 sm:transform sm:transition-transform sm:duration-1000"
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      />

      {/* Multi-layered Sacred Gradient Overlay (Desktop only) */}
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-b from-maroon-950/90 via-sacred-950/80 to-[#1A1410] backdrop-blur-[1px]" />

      {/* Subtle bottom shadow gradient on mobile for search bar contrast */}
      <div className="sm:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Ambient spiritual glow effects (Desktop only) */}
      <div className="hidden sm:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-saffron-600/20 via-maroon-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute -bottom-10 right-10 w-[300px] h-[300px] bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 pt-0 sm:py-24 text-center relative z-10 flex flex-col items-center">

        {/* Sacred ॐ Badge & Organization Emblem (Desktop only) */}
        <div className="hidden sm:inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-maroon-900/80 text-gold-300 border border-gold-500/40 text-xs sm:text-sm font-semibold mb-6 shadow-xl backdrop-blur-md">
          <span className="text-gold-400 font-heading text-base sm:text-lg">ॐ</span>
          <span className="tracking-wide">
            {language === 'hi' ? 'नव ज्योति दुर्गा मंडल (NJDM)' : 'Nav Jyoti Durga Mandal (NJDM)'}
          </span>
          <span className="text-gold-400 font-heading text-base sm:text-lg">ॐ</span>
        </div>

        {/* Organization Main Title (Desktop only) */}
        <h1 className="hidden sm:block text-3xl sm:text-5xl lg:text-6xl font-extrabold font-devanagari text-white tracking-tight leading-[1.15] mb-3 sm:mb-4 drop-shadow-lg">
          {language === 'hi' ? 'नव ज्योति दुर्गा मंडल' : 'Nav Jyoti Durga Mandal'}
        </h1>

        {/* Spiritual Subheading (Desktop only) */}
        <p className="hidden sm:block text-lg sm:text-2xl lg:text-3xl font-bold font-devanagari text-gold-400 mb-4 sm:mb-6 tracking-wide drop-shadow">
          {language === 'hi' ? 'पावन भक्ति भजन, आरती, चालीसा एवं स्तोत्र संग्रह' : 'Sacred Devotional Chants, Lyrics & Spiritual Sangrah'}
        </p>

        {/* Supporting statement (Desktop only) */}
        <p className="hidden sm:block text-sm sm:text-base md:text-lg text-cream-100/90 max-w-3xl mx-auto font-devanagari leading-relaxed mb-8 sm:mb-10 drop-shadow">
          {t('heroSubtitle')}
        </p>

        {/* Prominent Global Search Bar (Positioned at bottom on mobile) */}
        <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-2xl mb-0 sm:mb-8">
          <SearchBar 
            size="large"
            placeholder={language === 'hi' ? 'भजन, आरती, चालीसा खोजें...' : 'Search bhajans, aartis, chalisas...'}
          />
        </div>

        {/* Quick Filter Pill Chips (Desktop only) */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-2 text-xs mb-10">
          <span className="text-cream-200/80 font-medium mr-1">{t('quickFilters')}:</span>
          {quickPills.map((chip, idx) => (
            <Link
              key={idx}
              href={chip.href}
              className="bg-white/10 hover:bg-white/20 text-cream-100 font-medium px-3.5 py-1.5 rounded-full border border-white/15 transition-all backdrop-blur-md shadow-xs active:scale-95"
            >
              {chip.label}
            </Link>
          ))}
        </div>

        {/* Quick Category Feature Cards Bar (Desktop only) */}
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-t border-white/10">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-cream-200 hover:text-white transition-all backdrop-blur-sm shadow-xs"
              >
                <Icon className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold font-devanagari">
                  {language === 'hi' ? item.labelHi : item.labelEn}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
