'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n';
import { Home, Music, Search, Flame, BookOpen } from 'lucide-react';

export const SnapchatMobileNav: React.FC = () => {
  const pathname = usePathname();
  const { language } = useLanguage();

  const isHomePage = pathname === '/';
  const [isVisible, setIsVisible] = React.useState(!isHomePage);

  React.useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    const checkScroll = () => {
      // Threshold: after scrolling past roughly 65% of viewport height
      const threshold = Math.max(window.innerHeight * 0.65, 300);
      setIsVisible(window.scrollY > threshold);
    };

    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, [isHomePage]);

  const navItems = [
    {
      href: '/',
      label: language === 'hi' ? 'होम' : 'Home',
      icon: Home,
      isActive: pathname === '/',
    },
    {
      href: '/bhajans',
      label: language === 'hi' ? 'भजन' : 'Bhajans',
      icon: Music,
      isActive: pathname.startsWith('/bhajans'),
    },
    {
      href: '/search',
      label: language === 'hi' ? 'खोज' : 'Search',
      icon: Search,
      isCenter: true,
      isActive: pathname.startsWith('/search'),
    },
    {
      href: '/aartis',
      label: language === 'hi' ? 'आरती' : 'Aartis',
      icon: Flame,
      isActive: pathname.startsWith('/aartis'),
    },
    {
      href: '/chalisa',
      label: language === 'hi' ? 'चालीसा' : 'Chalisa',
      icon: BookOpen,
      isActive: pathname.startsWith('/chalisa'),
    },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className={`sm:hidden fixed bottom-0 inset-x-0 z-50 bg-gradient-to-r from-maroon-800 via-saffron-700 to-maroon-800 text-cream-100 border-t border-gold-400/30 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] px-3 pt-0.5 pb-[max(0.25rem,env(safe-area-inset-bottom))] transition-all duration-300 ease-in-out ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;

          if (item.isCenter) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative -top-1.5 flex flex-col items-center justify-center focus:outline-none"
                aria-label={item.label}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 ${
                    item.isActive
                      ? 'bg-gradient-to-tr from-gold-400 via-saffron-500 to-maroon-800 text-white ring-2 ring-maroon-800 shadow-gold-500/30'
                      : 'bg-gradient-to-tr from-maroon-900 via-maroon-800 to-saffron-600 text-gold-300 ring-2 ring-maroon-800 group-hover:scale-105 shadow-black/40'
                  }`}
                >
                  <Search className="w-5 h-5 text-gold-300 stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-semibold text-cream-100 mt-0.5 font-devanagari leading-none">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-0.5 px-2 transition-colors focus:outline-none ${
                item.isActive
                  ? 'text-gold-300 font-semibold'
                  : 'text-cream-100/75 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 ${item.isActive ? 'stroke-[2.4] text-gold-300' : 'stroke-[1.8]'}`} />
              <span className="text-[10px] tracking-tight font-devanagari mt-0.5 leading-none">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
