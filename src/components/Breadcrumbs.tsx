"use client";
import React from 'react';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

const Breadcrumbs = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <nav className="flex items-center" style={{ fontSize: isMobile ? '12px' : '14px' }} aria-label="Breadcrumb">
      <ol className={`inline-flex items-center ${isMobile ? 'space-x-0.5' : 'space-x-1 md:space-x-2'}`}>
        <li className="inline-flex items-center">
          <a href="#" className="inline-flex items-center font-semibold" style={{ color: 'var(--breadcrumb-gray)' }}>
            Locations
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <Image src="/chevron-right.svg" alt="chevron" width={isMobile ? 12 : 16} height={isMobile ? 12 : 16} />
            <a href="#" className={`${isMobile ? 'ml-0.5' : 'ml-1'} font-semibold md:ml-2`} style={{ color: 'var(--breadcrumb-gray)' }}>&#123;state&#125;</a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <Image src="/chevron-right.svg" alt="chevron" width={isMobile ? 12 : 16} height={isMobile ? 12 : 16} />
            <span className={`${isMobile ? 'ml-0.5' : 'ml-1'} font-semibold md:ml-2`} style={{ color: 'var(--breadcrumb-blue)' }}>&#123;city&#125;</span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;