"use client";
import React from 'react';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';
import CTAButton from './CTAButton';

const AttributionCard = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  if (isMobile) {
    return (
      <div
        className="p-3 text-white flex-grow flex flex-col justify-between"
        style={{
          backgroundColor: 'var(--blue-light-400)',
        }}
      >
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-sm font-semibold">&#123;city&#125;, &#123;STATE&#125;</h2>
          </div>
          <p className="text-xs mt-3" style={{ letterSpacing: '0%' }}>
            200 E Robinson Street, Suite 1120<br />
            &#123;city&#125; &#123;state&#125; 32801<br />
            (407) 559 - 2000
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center mt-3">
             <div className="flex items-center" style={{ gap: '1.62px' }}>
              {[...Array(5)].map((_, i) => (
                <Image key={i} src="/star.svg" alt="star" width={8} height={8} />
              ))}
            </div>
            <p className="text-xl font-bold">$99/mo</p>
          </div>
          <div className="mt-2">
             <button className="w-full bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md">
              Select this location
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-3 text-white rounded-b-2xl" style={{ backgroundColor: 'var(--blue-light-400)', backdropFilter: 'blur(24px)' }}>
      <div className="flex items-center justify-between px-8" style={{ gap: '16px' }}>
        <h2 className="text-4xl font-semibold" style={{ letterSpacing: '-2%' }}>&#123;city&#125;, &#123;STATE&#125;</h2>
        <div className="flex items-center" style={{ gap: '4px' }}>
          {[...Array(5)].map((_, i) => (
            <Image key={i} src="/star.svg" alt="star" width={20} height={20} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-2 px-8">
        <div className="text-lg font-semibold">
          <p>200 E Robinson Street, Suite 1120</p>
          <p>&#123;city&#125; &#123;state&#125; 32801</p>
          <p>(407) 559 - 2000</p>
        </div>
        <div className="text-5xl font-bold" style={{ letterSpacing: '-2%' }}>
          $99/mo
        </div>
      </div>
    </div>
  );
};

export default AttributionCard;