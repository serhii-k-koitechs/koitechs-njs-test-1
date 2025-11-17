"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

const features = [
  'Prestigious Business Address',
  'Professional Live Call Answering',
  'Personalized Call Transferring',
  'Business Phone/Fax Number',
  'Professional Mail Receipt',
  'Voicemail/Fax Converted to Email',
  'Digital Mail Notifications by Mail X',
];

const FeaturesList = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedFeatures = isMobile && !isExpanded ? features.slice(0, 3) : features;

  return (
    <div className="flex flex-col gap-3">
      {/* Title */}
      <h3
        className="font-normal"
        style={{
          color: 'var(--gray-600)',
          fontSize: '16px',
          lineHeight: '1.5em'
        }}
      >
        When We Say <span className="font-semibold">All-Inclusive</span>, <br />We Mean <span className="font-semibold">ALL-INCLUSIVE</span>:
      </h3>
      
      {/* Features Items */}
      <div className="flex flex-col gap-3">
        {displayedFeatures.map((feature, index) => (
          <div key={index} className="flex gap-3 items-start">
            {/* Check Icon */}
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: isMobile ? '24px' : '32px',
                height: isMobile ? '24px' : '32px',
                backgroundColor: 'var(--blue-light-100)',
                borderRadius: isMobile ? '12px' : '16px',
              }}
            >
              <Image src="/check-icon.svg" alt="check icon" width={isMobile ? 12 : 16} height={isMobile ? 10.5 : 14} />
            </div>
            
            {/* Text */}
            <div
              className="pt-0.5"
              style={{ width: isMobile ? 'auto' : '356px' }}
            >
              <p
                className="font-normal"
                style={{
                  color: 'var(--gray-600)',
                  fontSize: isMobile ? '16px' : '18px',
                  lineHeight: isMobile ? '1.5em' : '1.5555555555555556em',
                }}
              >
                {feature}
              </p>
            </div>
          </div>
        ))}
        {isMobile && !isExpanded && (
          <div className="flex gap-3 items-center cursor-pointer" onClick={() => setIsExpanded(true)}>
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: '24px',
                height: '24px',
              }}
            >
              <Image src="/chevron-down-double.svg" alt="see all features" width={10} height={12} />
            </div>
            <p
              className="font-normal"
              style={{
                color: 'var(--gray-600)',
                fontSize: '16px',
                lineHeight: '1.5em',
              }}
            >
              See All Features
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturesList;