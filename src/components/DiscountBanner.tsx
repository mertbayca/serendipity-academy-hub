import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/solid';

type DiscountBannerProps = {
  title: string;
  description: string;
  code: string;
  validity: string;
  className?: string;
};

const DiscountBanner: React.FC<DiscountBannerProps> = ({ title, description, code, validity, className }) => {
  const baseClasses = 'w-full rounded-2xl border border-amber-300/70 bg-gradient-to-r from-amber-100 via-white to-amber-50 p-5 shadow-[0_12px_30px_rgba(251,191,36,0.18)]';
  return (
    <div className={`${baseClasses}${className ? ` ${className}` : ''}`}>
      <div className="flex flex-col gap-3 text-amber-900">
        <div className="flex items-center gap-3">
          <SparklesIcon className="h-8 w-8 text-amber-500" />
          <p className="text-lg font-semibold">{title}</p>
        </div>
        <p className="text-base leading-relaxed">{description}</p>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-200/80 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-amber-900">
            <span>Code</span>
            <span>{code}</span>
          </span>
          <span className="text-sm font-medium text-amber-800">{validity}</span>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
