"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, ArrowDown, Activity, Zap, Users, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import { useTheme } from "next-themes";
import { LightGlobe } from "../ui/light-globe";
import { DarkGlobe } from "../ui/dark-globe";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  // Enhanced mock data with better scaling
  const [stats, setStats] = useState({
    activeRegions: 42,
    requestsPerSecond: 2300,
    dataPoints: 15400000,
    uptime: 99.9
  });

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Staggered stats animation for better visual appeal
    const timers = [
      setTimeout(() => setStats(prev => ({ ...prev, activeRegions: 48 })), 800),
      setTimeout(() => setStats(prev => ({ ...prev, requestsPerSecond: 2450 })), 1200),
      setTimeout(() => setStats(prev => ({ ...prev, dataPoints: 15678000 })), 1600),
    ];

    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a[href="#about"]')) {
        e.preventDefault();
        const aboutSection = document.getElementById("about");
        aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("resize", checkMobile);
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  // Enhanced loading state
  if (!mounted) {
    return (
      <section className={`min-h-screen flex items-center justify-center ${
        theme === "light" ? "bg-white" : "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      }`}>
        <div className="text-center space-y-4">
          <div className={`w-16 h-16 rounded-full border-4 border-transparent animate-spin mx-auto ${
            theme === "light" 
              ? "border-t-blue-500 border-r-blue-500/30" 
              : "border-t-blue-400 border-r-blue-400/30"
          }`} />
          <h1 className={`text-2xl font-bold ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}>
            DataFlow
          </h1>
        </div>
      </section>
    );
  }

  const globeConfig =
    theme === "dark"
      ? {
          theta: 0.25,
          dark: 0.9,
          scale: 1.1,
          diffuse: 1.2,
          mapSamples: 16000,
          mapBrightness: 6,
        }
      : {
          config: {
            theta: 0.25,
            dark: 0,
            scale: 1.1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
          },
        };
        
  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        theme === "light"
          ? "bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20"
          : "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      }`}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              theme === "light" 
                ? "bg-blue-400/20" 
                : "bg-blue-400/10"
            }`}
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          theme === "light" ? "bg-blue-300" : "bg-blue-600"
        }`} />
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          theme === "light" ? "bg-indigo-300" : "bg-indigo-600"
        }`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* LEFT CONTENT - Enhanced typography and spacing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left w-full max-w-2xl lg:max-w-none"
          >
            {/* Enhanced Glassy Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`inline-flex items-center gap-2 backdrop-blur-lg border px-4 py-2.5 rounded-full text-sm font-semibold shadow-lg mb-8 ${
                theme === "light"
                  ? "bg-white/70 border-gray-200/60 text-gray-700 shadow-gray-200/50"
                  : "bg-white/10 border-white/20 text-white/90 shadow-blue-500/10"
              }`}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-4 h-4 text-blue-500" />
              </motion.div>
              <span>AI-Powered Data Intelligence Platform</span>
            </motion.div>

            {/* Enhanced Headline with better typography */}
            <motion.div className="space-y-4 mb-6">
              <motion.h1
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${
                  theme === "light" ? "text-gray-900" : "text-white"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform Your
                <motion.span
                  className="block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mt-2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Data Operations
                </motion.span>
              </motion.h1>

              {/* Enhanced Subtitle */}
              <motion.p
                className={`text-lg sm:text-xl md:text-2xl leading-relaxed ${
                  theme === "light" ? "text-gray-600" : "text-white/80"
                } max-w-2xl mx-auto lg:mx-0`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Monitor global data flows with{" "}
                <span className="font-semibold text-blue-500">
                  <Typewriter
                    texts={[
                      "Real-time Analytics",
                      "AI-Powered Insights",
                      "Enterprise Security",
                      "Global Scalability",
                      "Live Intelligence",
                    ]}
                    speed={70}
                    delay={2000}
                    className="inline-block"
                  />
                </span>
              </motion.p>
            </motion.div>

            {/* Enhanced Stats Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 p-6 rounded-2xl backdrop-blur-md border ${
                theme === "light"
                  ? "bg-white/60 border-gray-200/60 shadow-sm"
                  : "bg-white/5 border-white/10 shadow-blue-500/5"
              }`}
            >
              {[
                { icon: Globe, value: stats.activeRegions, label: "Active Regions", color: "text-blue-500" },
                { icon: Activity, value: `${(stats.requestsPerSecond / 1000).toFixed(1)}k`, label: "Requests/sec", color: "text-emerald-500" },
                { icon: Sparkles, value: `${(stats.dataPoints / 1000000).toFixed(1)}M`, label: "Data Points", color: "text-purple-500" },
                { icon: Users, value: `${stats.uptime}%`, label: "Uptime SLA", color: "text-amber-500" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <stat.icon className={`w-4 h-4 ${stat.color} group-hover:scale-110 transition-transform`} />
                    <span className={`text-2xl font-bold ${
                      theme === "light" ? "text-gray-900" : "text-white"
                    }`}>
                      {stat.value}
                    </span>
                  </div>
                  <div className={`text-xs font-medium ${
                    theme === "light" ? "text-gray-600" : "text-white/60"
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#about"
                className={`group relative flex items-center justify-center gap-3 cursor-pointer rounded-full border-2 font-semibold min-h-[56px] px-8 transition-all duration-300 overflow-hidden ${
                  theme === "light"
                    ? "bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
                    : "bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 text-base">Explore Dashboard</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.button
                className={`group relative flex items-center justify-center gap-3 cursor-pointer rounded-full border-2 font-semibold min-h-[56px] px-8 transition-all duration-300 ${
                  theme === "light"
                    ? "border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/10 bg-white/80"
                    : "border-white/20 text-white/90 hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/10 bg-white/5"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-base">Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Enhanced Trusted Companies */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 sm:mt-12 space-y-4"
            >
              <p className={`text-sm font-medium text-center lg:text-left ${
                theme === "light" ? "text-gray-600" : "text-white/60"
              }`}>
                Trusted by innovative teams worldwide
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                {["TechCorp", "DataFlow", "GlobalNet", "CloudSys", "Analytics+"].map((company, index) => (
                  <motion.span
                    key={company}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      theme === "light"
                        ? "bg-white/80 text-gray-700 shadow-sm hover:shadow-md hover:bg-white hover:text-blue-500"
                        : "bg-white/5 text-white/80 hover:bg-white/10 hover:text-blue-400"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {company}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

         {/* RIGHT CONTENT — GLOBE (Hidden on mobile) */}
{!isMobile && (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="relative flex-1 flex items-center justify-center lg:justify-end w-full"
  >
    {/* Animated Pulse Effect Around Globe */}
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className={cn(
          "absolute w-96 h-96 rounded-full border-2",
          theme === "light" ? "border-blue-200" : "border-blue-500/20"
        )}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>

    {/* Globe Component (Light/Dark Mode) */}
    {theme === "dark" ? (
      <DarkGlobe
        key="dark-globe"
        className="relative z-10 w-full max-w-md lg:max-w-md"
        {...globeConfig}
      />
    ) : (
      <LightGlobe
        key="light-globe"
        className="relative z-10 w-full max-w-md lg:max-w-md"
        {...globeConfig}
      />
    )}
  </motion.div>
)}
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.div
            className={`flex flex-col items-center space-y-3 transition-colors duration-300 cursor-pointer group ${
              theme === "light"
                ? "text-gray-500 hover:text-blue-500"
                : "text-white/50 hover:text-blue-400"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xs font-semibold tracking-wider uppercase group-hover:font-bold transition-all duration-300">
              Discover Platform
            </span>
            
            {/* Enhanced animated dots */}
            <div className="flex items-center space-x-1">
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  className={`w-1.5 h-1.5 rounded-full ${
                    theme === "light"
                      ? "bg-gray-400 group-hover:bg-blue-500"
                      : "bg-white/40 group-hover:bg-blue-400"
                  }`}
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: dot * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Enhanced Arrow Container */}
            <motion.div
              className={`p-2 rounded-full border backdrop-blur-sm ${
                theme === "light"
                  ? "border-gray-300 bg-white/80 group-hover:border-blue-500 group-hover:bg-blue-500/10"
                  : "border-white/20 bg-white/5 group-hover:border-blue-400 group-hover:bg-blue-400/10"
              }`}
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}