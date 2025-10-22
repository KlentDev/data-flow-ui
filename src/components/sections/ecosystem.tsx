"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, Database, Cloud, Cpu, Search, X, GitBranch, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

// Core Data Interface
export interface IntegrationItem {
  id: string | number;
  name: string;
  icon: LucideIcon | string;
  details?: string;
  logo?: string;
  category: 'analytics' | 'storage' | 'security' | 'infrastructure' | 'development';
}

// Internal Animated Type
type AnimatedIntegrationItem = IntegrationItem & {
  distanceFromCenter: number;
  originalIndex: number;
};

// Component Props Interfaces
interface CarouselItemProps {
  integration: AnimatedIntegrationItem;
  side: 'left' | 'right';
}

interface IntegrationCarouselProps {
  items: IntegrationItem[];
  scrollSpeedMs?: number;
  visibleItemCount?: number;
  className?: string;
  onIntegrationSelect?: (integrationId: IntegrationItem['id'], integrationName: string) => void;
}

// Enhanced Carousel Item Card
const CarouselItemCard: React.FC<CarouselItemProps> = ({ integration, side }) => {
  const { distanceFromCenter, id, name, details, logo, icon: FallbackIcon } = integration;
  const distance = Math.abs(distanceFromCenter);
  const opacity = 1 - distance / 4;
  const scale = 1 - distance * 0.1;
  const yOffset = distanceFromCenter * 90;
  const xOffset = side === 'left' ? -distance * 50 : distance * 50;

  const IconOrLogo = (
    <div className="rounded-xl border border-blue-500/40 p-3 bg-blue-500/15 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/25">
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={`${name} logo`} className="size-8 rounded-lg object-cover" />
      ) : typeof FallbackIcon === 'string' ? (
        <span className="size-8 text-blue-500 text-xl flex items-center justify-center">{FallbackIcon}</span>
      ) : (
        <FallbackIcon className="size-8 text-blue-500" />
      )}
    </div>
  );

  return (
    <motion.div
      key={id}
      className={`absolute flex items-center gap-4 px-6 py-3 group/card
        ${side === 'left' ? 'flex-row-reverse' : 'flex-row'}`}
      animate={{
        opacity,
        scale,
        y: yOffset,
        x: xOffset,
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {IconOrLogo}

      <div className={`flex flex-col mx-4 transition-all duration-300 ${side === 'left' ? 'text-right' : 'text-left'}`}>
        <span className="text-md lg:text-lg font-semibold text-foreground whitespace-nowrap group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400">
          {name}
        </span>
        <span className="text-xs lg:text-sm text-muted-foreground">{details}</span>
      </div>
    </motion.div>
  );
};

// Enhanced Main Carousel Component
const IntegrationCarousel: React.FC<IntegrationCarouselProps> = ({
  items,
  scrollSpeedMs = 1500,
  visibleItemCount = 9,
  className = '',
  onIntegrationSelect,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const searchInputRef = useRef<HTMLInputElement>(null);

  const rightSectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rightSectionRef, { margin: '-100px 0px -100px 0px' });
  const totalItems = items.length;

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused || totalItems === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, scrollSpeedMs);

    return () => clearInterval(interval);
  }, [isPaused, totalItems, scrollSpeedMs]);

  // Memoized function for carousel items
  const getVisibleItems = useCallback(
    (): AnimatedIntegrationItem[] => {
      const visibleItems: AnimatedIntegrationItem[] = [];
      if (totalItems === 0) return [];

      const itemsToShow = visibleItemCount % 2 === 0 ? visibleItemCount + 1 : visibleItemCount;
      const half = Math.floor(itemsToShow / 2);

      for (let i = -half; i <= half; i++) {
        let index = currentIndex + i;
        if (index < 0) index += totalItems;
        if (index >= totalItems) index -= totalItems;

        visibleItems.push({
          ...items[index],
          originalIndex: index,
          distanceFromCenter: i,
        });
      }
      return visibleItems;
    },
    [currentIndex, items, totalItems, visibleItemCount]
  );

  // Filtered list for search dropdown
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  // Handler for selecting an item from the dropdown
  const handleSelectIntegration = (id: IntegrationItem['id'], name: string) => {
    const index = items.findIndex((c) => c.id === id);
    if (index !== -1) {
      setCurrentIndex(index);
      setIsPaused(true);
      if (onIntegrationSelect) {
        onIntegrationSelect(id, name);
      }
    }
    setSearchTerm(name);
    setShowDropdown(false);
    searchInputRef.current?.blur();
  };

  const currentItem = items[currentIndex];

  return (
    <div className={`space-y-12 ${className}`}>
      <div className='flex flex-col xl:flex-row max-w-7xl mx-auto px-4 md:px-8 gap-8 xl:gap-12 justify-center items-center'>
        {/* Left Section - Integration Carousel */}
        <motion.div
          className="relative w-full max-w-md xl:max-w-xl 2xl:max-w-2xl h-[400px] flex items-center justify-center hidden xl:flex"
          onMouseEnter={() => !searchTerm && setIsPaused(true)}
          onMouseLeave={() => !searchTerm && setIsPaused(false)}
          initial={{ x: '-100%', opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 0.8 }}
        >
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute top-0 h-1/4 w-full bg-gradient-to-b from-background to-transparent"></div>
            <div className="absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-background to-transparent"></div>
          </div>

          {getVisibleItems().map((integration) => (
            <CarouselItemCard
              key={integration.id}
              integration={integration}
              side="left"
            />
          ))}
        </motion.div>

        {/* Center Section - Enhanced Search and Current Integration */}
        <div className="flex flex-col items-center text-center gap-8 w-full max-w-2xl">
          {/* Currently Selected Integration Display */}
          {currentItem && (
            <motion.div 
              className="flex flex-col items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={cn(
                "p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300",
                "bg-white/50 dark:bg-white/5 border-border/50",
                "hover:scale-105 hover:border-blue-500/30"
              )}>
                {currentItem.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={currentItem.logo} alt={`${currentItem.name} logo`} className="size-16 rounded-xl object-cover" />
                ) : typeof currentItem.icon === 'string' ? (
                  <span className="size-12 text-blue-500 text-2xl flex items-center justify-center">{currentItem.icon}</span>
                ) : (
                  <currentItem.icon className="size-12 text-blue-500" />
                )}
              </div>
              <div>
                <h3 className="text-2xl xl:text-3xl font-bold text-foreground mb-2">
                  {currentItem.name}
                </h3>
                <p className="text-lg text-muted-foreground max-w-md">
                  {currentItem.details || 'Seamless integration with your workflow'}
                </p>
              </div>
            </motion.div>
          )}

          {/* Enhanced Search Bar - Prioritized with better width control */}
          <motion.div 
            className="w-full max-w-2xl relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative group">
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                placeholder="Search 50+ integrations..."
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchTerm(val);
                  setShowDropdown(val.length > 0);
                  if (val === '') setIsPaused(false);
                }}
                onFocus={() => {
                  if (searchTerm.length > 0) setShowDropdown(true);
                  setIsPaused(true);
                }}
                onBlur={() => {
                  setTimeout(() => setShowDropdown(false), 200);
                }}
                className={cn(
                  "w-full outline-none text-foreground bg-background",
                  "placeholder-muted-foreground text-lg rounded-2xl border-2",
                  "px-6 py-4 pr-12 pl-12 cursor-pointer transition-all duration-300",
                  "backdrop-blur-sm",
                  isDark 
                    ? "border-white/20 bg-white/5 focus:border-blue-500 focus:bg-white/10 focus:shadow-2xl focus:shadow-blue-500/20" 
                    : "border-gray-200 bg-white/80 focus:border-blue-500 focus:bg-white focus:shadow-2xl focus:shadow-blue-500/10"
                )}
              />
              <Search className={cn(
                "absolute w-5 h-5 left-6 top-1/2 transform -translate-y-1/2 pointer-events-none transition-colors duration-300",
                isDark ? "text-white/60 group-focus-within:text-blue-400" : "text-gray-400 group-focus-within:text-blue-500"
              )} />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setShowDropdown(false);
                    setIsPaused(false);
                  }}
                  className={cn(
                    "absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-all duration-200",
                    "hover:scale-110 hover:bg-white/10",
                    isDark ? "text-white/60 hover:text-white" : "text-gray-400 hover:text-gray-600"
                  )}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Enhanced Dropdown for search results */}
            {showDropdown && filteredItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "absolute left-0 right-0 mt-3 rounded-2xl border z-20 max-h-80 overflow-y-auto shadow-2xl backdrop-blur-xl",
                  isDark 
                    ? "bg-gray-900/95 border-white/20" 
                    : "bg-white/95 border-gray-200"
                )}
              >
                <div className="p-2">
                  {filteredItems.slice(0, 8).map((integration) => (
                    <motion.div
                      key={integration.id}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelectIntegration(integration.id, integration.name);
                      }}
                      className={cn(
                        "flex items-center gap-4 px-4 py-3 cursor-pointer transition-all duration-200 rounded-xl m-1",
                        "hover:scale-105 hover:shadow-lg",
                        isDark 
                          ? "hover:bg-white/10" 
                          : "hover:bg-blue-50 hover:border-blue-200"
                      )}
                      whileHover={{ scale: 1.02 }}
                    >
                      {integration.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={integration.logo} alt={`${integration.name} logo`} className="size-8 rounded-lg object-cover" />
                      ) : typeof integration.icon === 'string' ? (
                        <span className="size-6 text-blue-500 text-lg flex items-center justify-center">{integration.icon}</span>
                      ) : (
                        <integration.icon size={24} className="text-blue-500" />
                      )}
                      <div className="flex-1 min-w-0">
                        <span className={cn(
                          "font-semibold text-base block truncate",
                          isDark ? "text-white" : "text-gray-900"
                        )}>
                          {integration.name}
                        </span>
                        <span className={cn(
                          "text-sm block truncate",
                          isDark ? "text-white/60" : "text-gray-500"
                        )}>
                          {integration.details}
                        </span>
                      </div>
                      <div className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        isDark ? "bg-white/10 text-white/80" : "bg-gray-100 text-gray-600"
                      )}>
                        {integration.category}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {['50+ Integrations', '15 Categories', 'Real-time Sync', 'API Access'].map((stat) => (
              <div key={stat} className={cn(
                "px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm border",
                isDark ? "bg-white/5 border-white/10 text-white/80" : "bg-white/80 border-gray-200 text-gray-700"
              )}>
                {stat}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Section - Integration Carousel */}
        <motion.div
          ref={rightSectionRef}
          className="relative w-full max-w-md xl:max-w-xl 2xl:max-w-2xl h-[400px] flex items-center justify-center hidden xl:flex"
          onMouseEnter={() => !searchTerm && setIsPaused(true)}
          onMouseLeave={() => !searchTerm && setIsPaused(false)}
          initial={{ x: '100%', opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 0.8 }}
        >
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute top-0 h-1/4 w-full bg-gradient-to-b from-background to-transparent"></div>
            <div className="absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-background to-transparent"></div>
          </div>

          {getVisibleItems().map((integration) => (
            <CarouselItemCard
              key={integration.id}
              integration={integration}
              side="right"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Enhanced Main Integration Ecosystem Section
export function IntegrationEcosystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const integrations: IntegrationItem[] = [
    {
      id: 1,
      name: "AWS Cloud",
      icon: Cloud,
      details: "Real-time data streaming",
      category: 'infrastructure'
    },
    {
      id: 2,
      name: "Google Analytics",
      icon: Cpu,
      details: "User behavior insights",
      category: 'analytics'
    },
    {
      id: 3,
      name: "Snowflake",
      icon: Database,
      details: "Data warehousing",
      category: 'storage'
    },
    {
      id: 4,
      name: "Okta",
      icon: Shield,
      details: "Enterprise security",
      category: 'security'
    },
    {
      id: 5,
      name: "Apache Kafka",
      icon: Zap,
      details: "Event streaming",
      category: 'infrastructure'
    },
    {
      id: 6,
      name: "Tableau",
      icon: Cpu,
      details: "Business intelligence",
      category: 'analytics'
    },
    {
      id: 7,
      name: "MongoDB",
      icon: Database,
      details: "NoSQL database",
      category: 'storage'
    },
    {
      id: 8,
      name: "Azure",
      icon: Cloud,
      details: "Cloud computing",
      category: 'infrastructure'
    },
    {
      id: 9,
      name: "Datadog",
      icon: Cpu,
      details: "Performance monitoring",
      category: 'analytics'
    },
    {
      id: 10,
      name: "Auth0",
      icon: Shield,
      details: "Identity management",
      category: 'security'
    }
  ];

  return (
   <section
  id="integrations"
  ref={ref}
  className={cn(
    "relative py-20 lg:py-28 overflow-hidden transition-colors duration-700",
    isDark ? "bg-[#293289]" : "bg-white"
  )}
>
{/* Ambient Background */}
<div className="absolute inset-0 overflow-hidden">
  {/* Radial Gradient Overlay */}
  <div
    className={cn(
      "absolute inset-0 opacity-40",
      isDark
        ? "bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)]"
        : "bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]"
    )}
  />

  {/* Floating Particles */}
  {[...Array(12)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 rounded-full bg-blue-400/40"
      style={{ left: `${8 + i * 7}%`, top: `${10 + (i % 6) * 13}%` }}
      animate={{ y: [0, -25, 0], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
    />
  ))}

  {/* Large Blurred Circles - All Four Corners (Matching Radial Gradient Color) */}
  <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl" />
  <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl" />
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl" />
  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl" />
</div>


      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.015] bg-[linear-gradient(rgba(59,130,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${15 + i * 20}%`,
              top: `${30 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border shadow-sm mb-6 backdrop-blur-sm",
              isDark
                ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                : "bg-blue-500/10 text-blue-600 border-blue-500/20"
            )}
          >
            <GitBranch className="w-4 h-4" />
            <span>Integration Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            Connect Your
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Entire Stack
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Seamlessly integrate DataFlow with your existing tools and services. 
            Our platform connects with 50+ popular services with real-time synchronization and enterprise-grade security.
          </motion.p>
        </motion.div>

        {/* Enhanced Integration Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20 lg:mb-24"
        >
          <IntegrationCarousel
            items={integrations}
            scrollSpeedMs={2000}
            visibleItemCount={7}
            onIntegrationSelect={(id, name) => {
              console.log('Selected integration:', id, name);
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}