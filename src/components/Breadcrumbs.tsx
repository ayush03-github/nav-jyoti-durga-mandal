'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { t } = useLanguage();

  return (
    <nav className="flex items-center text-xs sm:text-sm text-sacred-600 mb-6 py-2 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
      <Link 
        href="/" 
        className="inline-flex items-center gap-1 hover:text-maroon-700 transition-colors py-1 focus:outline-none focus:underline"
      >
        <Home className="w-3.5 h-3.5 text-saffron-600" />
        <span>{t('home')}</span>
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-sacred-400 flex-shrink-0" />
            {item.href && !isLast ? (
              <Link 
                href={item.href} 
                className="hover:text-maroon-700 transition-colors py-1 focus:outline-none focus:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-maroon-900 truncate max-w-[200px] sm:max-w-md" aria-current="page">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
