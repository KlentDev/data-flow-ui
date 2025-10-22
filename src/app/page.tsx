"use client";

import { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { HeroSection } from '@/components/sections/hero';
import { ScrollProgress } from '@/components/ui/use-scroll';
import { EnhancedStats } from '@/components/sections/enhanced-stats';
import { ContactSection } from '@/components/sections/contact';
import { CaseStudiesSection } from '@/components/sections/case-studies';
import { PricingSection } from '@/components/sections/pricing';
import { TeamSection } from '@/components/sections/teams';
import { IntegrationEcosystemSection } from '@/components/sections/ecosystem';
import AboutSection from '@/components/sections/about';
import FeaturesDeepDive from '@/components/sections/features';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [, setScrolled] = useState(false);
  useScroll();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background relative">
      {/* REMOVED InteractiveBackground from here */}
      <ScrollToTop />
      <ScrollProgress />
      <main className="space-y-0"> {/* Reduced space between sections */}
        <HeroSection /> {/* Background is now inside HeroSection only */}
        <EnhancedStats />
        <AboutSection />
        <FeaturesDeepDive />
        <IntegrationEcosystemSection />
        <TeamSection />
        <PricingSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
    </div>
  );
}