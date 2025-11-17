import Breadcrumbs from '@/components/Breadcrumbs';
import Hero from '@/components/Hero';
import Carousel from '@/components/Carousel';
import AttributionCard from '@/components/AttributionCard';
import FeaturesList from '@/components/FeaturesList';
import CTAButton from '@/components/CTAButton';
import ReviewCompanies from '@/components/ReviewCompanies';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <main className="w-full max-w-[1280px]">
        {/* ==================== Mobile Layout ==================== */}
        <div className="lg:hidden flex flex-col px-4 py-2 gap-2">
          <Breadcrumbs />
          <Hero />

          <div className="flex flex-row rounded-2xl overflow-hidden">
            <Carousel />
            <AttributionCard />
          </div>

          <div className="mt-4"> {/* 8px gap from parent + 16px margin = 24px total */}
            <FeaturesList />
          </div>
        </div>

        {/* ==================== Desktop Layout ==================== */}
        <div className="hidden lg:block px-8">
          {/* Header Section */}
          <div className="flex flex-row justify-between py-4">
            <div className="flex flex-col gap-2 py-3">
              <Breadcrumbs />
              <Hero />
            </div>
            <div className="flex flex-col gap-2 py-3 justify-center">
              <ReviewCompanies />
            </div>
          </div>

          {/* Main Content Section */}
          <div className="flex flex-row justify-start mt-8 gap-8">
            {/* Left Side */}
            <div className="w-[696px] flex flex-col gap-4">
              <Carousel />
              <AttributionCard />
            </div>
            {/* Right Side */}
            <div className="flex flex-col justify-between flex-1">
              <FeaturesList />
              <p
                className="font-normal"
                style={{
                  color: 'var(--gray-600)',
                  fontSize: '20px',
                  lineHeight: '1.5em',
                }}
              >
                All for only <span className="font-bold" style={{ color: 'var(--active-pagination)' }}>$99</span>/month
              </p>
              <CTAButton />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
