'use client';

import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';

interface CategoryHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  subtitle?: string;
  count?: number;
  countLabel?: string;
  badge?: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  breadcrumbs,
  title,
  subtitle,
  count,
  countLabel = 'items',
  badge
}) => {
  return (
    <div className="mb-8 border-b border-cream-200 pb-6">
      <Breadcrumbs items={breadcrumbs} />
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          {badge && (
            <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-saffron-100 text-saffron-800 uppercase tracking-wider mb-2 border border-saffron-200">
              {badge}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-devanagari text-sacred-900 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-sm sm:text-base text-sacred-600 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {typeof count === 'number' && (
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium bg-cream-200/80 text-sacred-700 px-3 py-1.5 rounded-full border border-cream-300 shadow-sm">
              <span className="font-bold text-maroon-800">{count}</span>
              <span>{countLabel}</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
