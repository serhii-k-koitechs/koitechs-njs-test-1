import React from 'react';
import Image from 'next/image';

const companies = [
  { src: '/review-companies_1.svg', alt: 'Review Company 1', width: 132, height: 47 },
  { src: '/review-companies_2.svg', alt: 'Review Company 2', width: 97, height: 47 },
  { src: '/review-companies_3.svg', alt: 'Review Company 3', width: 129, height: 41 },
];

const ReviewCompanies = () => {
  return (
    <div className="flex justify-end items-center space-x-8 py-1">
      {companies.map(({ src, alt, width, height }) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      ))}
    </div>
  );
};

export default ReviewCompanies;