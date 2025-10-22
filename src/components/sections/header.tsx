"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MobileNav } from "@/components/ui/mobile-nav";
import { Search } from "@/components/ui/search";
import { Zap } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrolled(latest > 0.1);
  });

  // Update active section based on scroll position
  useEffect(() => {
    setMounted(true);

    const sections = [
      'hero',
      'stats',
      'about',
      'features',
      'integrations',
      'team',
      'pricing',
      'case-studies',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!mounted) return null;

  const navigationItems = [
    { name: "Home", id: "hero" },
    { name: "Stats", id: "stats" },
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Integrations", id: "integrations" },
    { name: "Team", id: "team" },
    { name: "Pricing", id: "pricing" },
    { name: "Case Studies", id: "case-studies" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 
        ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-blue-500/20 shadow-lg"
            : "bg-transparent border-transparent shadow-none"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      {/* Wrapper */}
      <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-500 py-3`}>
        
        {/* Logo */}
        <motion.div
          className="relative group cursor-pointer"
          whileTap={{ scale: 0.96 }}
          onClick={() => scrollToSection('hero')}
        >
          <motion.div className="flex items-center gap-3">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.03, rotate: 2 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                DataFlow
              </h1>
              <p className="text-xs text-foreground/60">AI Data Platform</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navigationItems.map((item, index) => {
            const isActive = activeSection === item.id;
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.id}
                className="relative"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg group transition-all duration-300 ${
                    isActive
                      ? "text-blue-500 bg-blue-500/10 shadow-md"
                      : "text-foreground/70 hover:text-blue-500 hover:bg-blue-500/15"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative flex items-center gap-1 z-10">
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-500 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              </motion.div>
            );
          })}
        </nav>

        {/* Right-side Actions */}
        <div className="flex items-center space-x-3 relative z-[1000]">
          {/* Get Started CTA */}
          <motion.button
            onClick={() => scrollToSection('pricing')}
            className="hidden sm:flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Get Started</span>
            <Zap className="w-4 h-4" />
          </motion.button>

          <Search />
          <motion.div whileHover={{ scale: 1.03, rotate: 2 }}>
            <ThemeToggle />
          </motion.div>
          <motion.div className="block lg:hidden" whileHover={{ scale: 1.03 }}>
            <MobileNav 
              items={navigationItems.map(item => ({ 
                ...item, 
                href: `#${item.id}`,
                onClick: () => scrollToSection(item.id)
              }))} 
              activeSection={activeSection} 
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-left shadow-lg shadow-blue-500/30"
        style={{ scaleX: scrollYProgress }}
        transition={{ duration: 0.1 }}
      />
    </motion.header>
  );
}
