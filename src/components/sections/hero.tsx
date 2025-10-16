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
  const { theme } = useTheme(); // "light" or "dark"

  useEffect(() => {
    setMounted(true);

    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a[href="#about"]')) {
        e.preventDefault();
        const aboutSection = document.getElementById("about");
        if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  if (!mounted) {
    return (
      <section
        className={`min-h-screen flex items-center justify-center ${
          theme === "light"
            ? "bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200"
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
          ? "bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200"
          : "bg-gradient-to-b from-dark-blue-500 via-blue-900 to-[#020C28]"
      }`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Glassy Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`inline-flex items-center gap-2 backdrop-blur-md border px-4 py-2.5 rounded-2xl text-sm font-semibold shadow-md mb-6 ${
                theme === "light"
                  ? "bg-white/20 border-gray-300 text-gray-900"
                  : "bg-white/10 border-primary/20 text-white"
              }`}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Medici Land Governance</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className={`text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-4 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Revolutionizing
              <motion.span
                className="block text-primary mt-3"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Land Governance
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              className={`text-xl md:text-2xl mb-6 leading-relaxed h-16 ${
                theme === "light" ? "text-gray-700" : "text-white/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
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
                className="font-semibold text-primary"
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.03, y: -2, boxShadow: "0 10px 30px -10px rgba(2,12,40,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 min-h-[56px] group relative overflow-hidden ${
                  theme === "light"
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-[#020C28] text-primary-foreground hover:bg-[#020C28]/90"
                }`}
              >
                <span className="relative z-10">Explore Solutions</span>
                <motion.div
                  className="w-4 h-4 relative z-10"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 min-h-[56px] group ${
                  theme === "light"
                    ? "border-gray-300 text-gray-900 hover:border-primary hover:text-primary hover:bg-primary/10"
                    : "border-white/20 text-white hover:border-primary hover:text-primary hover:bg-primary/10"
                }`}
              >
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>View Case Studies</span>
              </motion.button>
            </motion.div>

            {/* Trusted Flags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className={`mt-8 flex flex-col sm:flex-row items-center gap-4 text-sm ${
                theme === "light" ? "text-gray-600" : "text-white/60"
              }`}
            >
              <span className="font-medium">Trusted by governments worldwide</span>
              <div className="flex items-center gap-3">
                {["🇺🇸", "🇿🇲", "🇷🇼", "🇱🇷", "🇬🇾"].map((flag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}
                    className="text-lg hover:scale-110 transition-transform duration-300 cursor-help"
                  >
                    {flag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT - GLOBE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 flex items-center justify-center lg:justify-end"
          >
            {theme === "dark" ? (
              <DarkGlobe className="w-full max-w-md lg:max-w-md" config={globeConfig} />
            ) : (
              <LightGlobe className="w-full max-w-md lg:max-w-md" config={globeConfig} />
            )}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <motion.div
            className={`flex flex-col items-center space-y-1 transition-colors duration-300 cursor-pointer ${
              theme === "light" ? "text-gray-700/50 hover:text-gray-700/70" : "text-white/50 hover:text-white/70"
            }`}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-xs font-medium tracking-wide">Scroll to explore</span>
            <motion.div animate={{ y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
