"use client";

import { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ScrollProgress } from '@/components/ui/use-scroll';
import { EnhancedStats } from '@/components/sections/enhanced-stats';
import { GlobalImpactSection } from '@/components/sections/global';
import { SolutionsSection } from '@/components/sections/solutions';
import { ChallengesSection } from '@/components/sections/challenge';
import { TechnologySection } from '@/components/sections/technology';
import { ContactSection } from '@/components/sections/contact';

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
        <SolutionsSection />
        <ChallengesSection />
        <TechnologySection />
        <GlobalImpactSection />
        <ContactSection />
      </main>
    </div>
  );
}