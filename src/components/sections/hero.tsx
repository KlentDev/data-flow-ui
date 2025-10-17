"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import { useTheme } from "next-themes";
import { LightGlobe } from "../ui/light-globe";
import { DarkGlobe } from "../ui/dark-globe";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);

    // Check if mobile on mount and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a[href="#about"]')) {
        e.preventDefault();
        const aboutSection = document.getElementById("about");
        if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!mounted) {
    return (
      <section
        className={`min-h-screen flex items-center justify-center ${
          theme === "light"
            ? "bg-white"
            : "bg-gradient-to-b from-dark-blue-500 via-blue-900 to-[#020C28]"
        }`}
      >
        <div className="text-center">
          <h1
            className={`text-4xl font-bold ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            Revolutionizing Land Governance
          </h1>
        </div>
      </section>
    );
  }

  const globeConfig = {
    scale: 1.1,
    dark: theme === "dark" ? 0.9 : 0,
    diffuse: 1.2,
    mapBrightness: 6,
    mapSamples: 16000,
    theta: 0.25,
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        theme === "light"
          ? "bg-white"
          : "bg-gradient-to-b from-dark-blue-500 via-blue-900 to-[#020C28]"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left w-full"
          >
            {/* Glassy Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`inline-flex items-center gap-2 backdrop-blur-md border px-4 py-2.5 rounded-2xl text-sm font-semibold shadow-md mb-6 ${
                theme === "light"
                  ? "bg-white/80 border-gray-200 text-gray-900 shadow-sm"
                  : "bg-white/10 border-primary/20 text-white"
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#AED59C]" />
              <span>Medici Land Governance</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-4 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Revolutionizing
              <motion.span
                className="block text-[#AED59C] mt-2 sm:mt-3"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Land Governance
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              className={`text-lg sm:text-xl md:text-2xl mb-6 leading-relaxed min-h-[80px] sm:min-h-[64px] flex items-center justify-center lg:justify-start ${
                theme === "light" ? "text-gray-700" : "text-white/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="text-center lg:text-left">
                Through{" "}
                <Typewriter
                  texts={[
                    "AI-Powered Intelligence",
                    "Blockchain Security",
                    "Digital Innovation",
                    "Global Scalability",
                    "Citizen Empowerment",
                  ]}
                  speed={70}
                  delay={2000}
                  className="font-semibold text-[#AED59C] inline-block"
                />
              </div>
            </motion.div>

{/* CTA Buttons */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.1 }}
  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
>
  {/* Primary Button */}
  <motion.a
    href="#about"
    className={`group relative flex items-center gap-2 cursor-pointer rounded-full border p-2 px-6 sm:px-8 text-center font-semibold min-h-[48px] sm:min-h-[56px] transition-all duration-300 ${
      theme === "light"
        ? "bg-white border-[#AED59C] text-gray-900 hover:bg-[#f7fff3] hover:text-[#AED59C]"
        : "bg-[#020C28] border-[#AED59C] text-white hover:bg-[#0b153f] hover:text-[#AED59C]"
    }`}
  >
    {/* Dot */}
    <div
      className={`h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-125 ${
        theme === "light" ? "bg-[#AED59C]" : "bg-[#AED59C]"
      }`}
    ></div>

    {/* Text */}
    <span className="text-sm sm:text-base transition-all duration-300">
      Explore Solutions
    </span>

    {/* Arrow */}
    <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-2" />
  </motion.a>

  {/* Secondary Button */}
  <motion.button
    className={`group relative flex items-center gap-2 cursor-pointer rounded-full border-2 p-2 px-6 sm:px-8 text-center font-semibold min-h-[48px] sm:min-h-[56px] transition-all duration-300 ${
      theme === "light"
        ? "border-gray-300 text-gray-700 hover:border-[#AED59C] hover:text-[#AED59C] hover:bg-gray-100"
        : "border-white/20 text-white/80 hover:border-[#AED59C] hover:text-[#AED59C] hover:bg-white/10"
    }`}
  >
    {/* Dot */}
    <div
      className={`h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-125 ${
        theme === "light" ? "bg-gray-400 group-hover:bg-[#AED59C]" : "bg-white/40 group-hover:bg-[#AED59C]"
      }`}
    ></div>

    {/* Text */}
    <span className="text-sm sm:text-base transition-all duration-300">
      View Case Studies
    </span>

    {/* Arrow */}
    <Play className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-2" />
  </motion.button>
</motion.div>

            {/* Trusted Flags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className={`mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs sm:text-sm ${
                theme === "light" ? "text-gray-600" : "text-white/60"
              }`}
            >
              <span className="font-medium whitespace-nowrap">Trusted by governments worldwide</span>
              <div className="flex items-center gap-2 sm:gap-3">
                {["🇺🇸", "🇿🇲", "🇷🇼", "🇱🇷", "🇬🇾"].map((flag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -2 
                    }}
                    className="text-base sm:text-lg transition-transform duration-300 cursor-help"
                  >
                    {flag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT - GLOBE (Hidden on mobile) */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex-1 flex items-center justify-center lg:justify-end w-full"
            >
              {theme === "dark" ? (
                <DarkGlobe className="w-full max-w-md lg:max-w-md" config={globeConfig} />
              ) : (
                <LightGlobe className="w-full max-w-md lg:max-w-md" config={globeConfig} />
              )}
            </motion.div>
          )}
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <motion.div
            className={`flex flex-col items-center space-y-2 transition-colors duration-300 cursor-pointer group ${
              theme === "light" 
                ? "text-gray-600 hover:text-[#AED59C]" 
                : "text-white/60 hover:text-[#AED59C]"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {/* Animated dots */}
            <div className="flex items-center space-x-1">
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  className={`w-1 h-1 rounded-full ${
                    theme === "light" 
                      ? "bg-gray-400 group-hover:bg-[#AED59C]" 
                      : "bg-white/40 group-hover:bg-[#AED59C]"
                  }`}
                  animate={{
                    y: [0, -4, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: dot * 0.2
                  }}
                />
              ))}
            </div>
            
            <span className="text-xs font-medium tracking-wider uppercase group-hover:font-semibold transition-all duration-300">
              Discover More
            </span>
            
            {/* Enhanced Arrow */}
            <motion.div
              className={`p-2 rounded-full border ${
                theme === "light"
                  ? "border-gray-300 bg-white/80 group-hover:border-[#AED59C] group-hover:bg-[#AED59C]/10"
                  : "border-white/20 bg-white/5 group-hover:border-[#AED59C] group-hover:bg-[#AED59C]/10"
              }`}
              animate={{ 
                y: [0, 6, 0] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}