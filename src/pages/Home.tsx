import { HeroSection } from '@/components/isp/HeroSection';
import { TrustBadges } from '@/components/isp/TrustBadges';
import { ServicesShowcase } from '@/components/isp/ServicesShowcase';
import { BundleDeals } from '@/components/isp/BundleDeals';
import { CustomerExperience } from '@/components/isp/CustomerExperience';
import { WhyChooseUs } from '@/components/isp/WhyChooseUs';
import { FeaturesGrid } from '@/components/isp/FeaturesGrid';
import { HowItWorks } from '@/components/isp/HowItWorks';
import { FAQ } from '@/components/isp/FAQ';
import { CTASection } from '@/components/isp/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <ServicesShowcase />
      <BundleDeals />
      <CustomerExperience />
      <WhyChooseUs />
      <FeaturesGrid />
      <HowItWorks />
      <FAQ />
      <CTASection />
    </>
  );
}