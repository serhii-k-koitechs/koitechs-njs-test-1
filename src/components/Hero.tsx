"use client";
import React from 'react';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="flex flex-col gap-2">
      <h1
        className="font-medium tracking-tighter"
        style={{
          color: 'var(--gray-900)',
          fontSize: isMobile ? '20px' : '36px',
          lineHeight: isMobile ? '1.5em' : '1.2222222222222223em',
          letterSpacing: '0%',
        }}
      >
        Virtual office in <span style={{ color: 'var(--blue-light-400)' }}>&#123;city&#125;</span>
      </h1>
      <p
        className=""
        style={{
          color: 'var(--gray-600)',
          fontSize: isMobile ? '12px' : '18px',
          lineHeight: '1.5em',
        }}
      >
        &#123;city&#125; Virtual Business Address & Live Receptionist Answering Service
      </p>
      {isMobile && (
        <div className="flex justify-end items-center gap-3">
          <Image src="/review-companies.svg" alt="recommended by" width={218} height={24} />
        </div>
      )}
    </div>
  );
};

export default Hero;