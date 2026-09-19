'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n';
import { LanguageToggle } from './LanguageToggle';
import { Search, Menu, X, Flame } from 'lucide-react';

export const Header: React.FC = () => {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', labelKey: 'home' },
    { href: '/bhajans', labelKey: 'bhajans' },
    { href: '/aartis', labelKey: 'aartis' },
    { href: '/chalisa', labelKey: 'chalisa' },
    { href: '/mantras', labelKey: 'mantras' },
    { href: '/stotram', labelKey: 'stotram' },
    { href: '/shloks', labelKey: 'shloks' },
    { href: '/deities', labelKey: 'deities' },
    { href: '/festivals', labelKey: 'festivals' },
    { href: '/about', labelKey: 'about' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur-md border-b border-cream-200 shadow-sm">
      {/* Top sacred banner */}
      <div className="bg-gradient-to-r from-maroon-800 via-saffron-700 to-maroon-800 text-cream-100 text-[11px] sm:text-xs py-1 px-4 text-center tracking-wider flex items-center justify-center gap-2 font-medium">
        <span className="text-gold-400">॥</span>
        <span>{language === 'hi' ? 'नव ज्योति दुर्गा मंडल' : 'Nav Jyoti Durga Mandal'}</span>
        <span className="text-gold-400">॥</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo & Identity */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 rounded-lg p-1 min-w-0"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-saffron-500 via-saffron-600 to-maroon-700 flex items-center justify-center text-white shadow-md shadow-saffron-500/20 group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
              <span className="text-lg sm:text-2xl font-bold font-heading">ॐ</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-heading font-bold text-sm sm:text-xl text-sacred-900 group-hover:text-maroon-800 transition-colors leading-tight whitespace-nowrap">
                {t('siteTitle')}
              </span>
              <span className="hidden sm:block text-[11px] sm:text-xs font-semibold tracking-wider text-saffron-700 uppercase">
                {language === 'hi' ? 'भक्ति • साधना • संकीर्तन' : 'Devotion • Chants • Lyrics'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${isActive(item.href)
                  ? 'bg-cream-200 text-maroon-800 font-semibold border-b-2 border-maroon-700'
                  : 'text-sacred-700 hover:text-maroon-800 hover:bg-cream-100'
                  }`}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>

          {/* Right utility buttons: Search + Language Toggle + Mobile Menu Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            <Link
              href="/search"
              className="p-2 sm:px-3 sm:py-1.5 text-sacred-700 hover:text-maroon-800 hover:bg-cream-200/60 rounded-full sm:rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors border border-transparent hover:border-cream-300"
              aria-label={t('search')}
            >
              <Search className="w-4 h-4 text-saffron-600" />
              <span className="hidden sm:inline">{t('search')}</span>
            </Link>

            {/* Language Toggle: hidden on mobile view */}
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>

            {/* Hamburger: hidden on mobile (< sm), visible on tablet (sm to xl) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hidden sm:flex xl:hidden p-2 rounded-lg text-sacred-700 hover:text-maroon-800 hover:bg-cream-200 transition-colors focus:outline-none focus:ring-2 focus:ring-saffron-500 items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown Drawer: hidden on mobile (< sm), only for tablet (sm to xl) */}
      {mobileMenuOpen && (
        <div className="hidden sm:block xl:hidden bg-cream-50 border-b border-cream-200 px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pt-1 pb-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${isActive(item.href)
                  ? 'bg-maroon-700 text-white font-semibold'
                  : 'bg-cream-100 text-sacred-800 hover:bg-cream-200'
                  }`}
              >
                <span>{t(item.labelKey)}</span>
                {isActive(item.href) && <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
