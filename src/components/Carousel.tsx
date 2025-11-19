"use client";
import React from 'react';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

const Carousel = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div className={`relative h-auto ${isMobile ? 'w-[150px]' : 'w-full aspect-[696/400]'}`}>
      <Image
        src="/hero-image.png"
        alt="Hero Image"
        fill
        style={{ objectFit: 'cover' }}
        className={isMobile ? '' : 'rounded-t-2xl'}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 bg-white/90 backdrop-blur-sm p-2 rounded-full">
        <button className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--active-pagination)' }}></button>
        <button className="w-2 h-2 bg-gray-300 rounded-full"></button>
        <button className="w-2 h-2 bg-gray-300 rounded-full"></button>
      </div>
      {!isMobile && (
        <>
          <button className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full">
            <Image src="/chevron-left.svg" alt="chevron left" width={20} height={20} />
          </button>
          <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full">
            <Image src="/chevron-right.svg" alt="chevron right" width={20} height={20} />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;