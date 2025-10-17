"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Globe, Users, TrendingUp, Target } from "lucide-react";
import { cn } from "@/lib/utils";

export function GlobalImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const projects = [
    {
      country: "Zambia",
      flag: "🇿🇲",
      title: "Systematic Land Titling",
      description: "4 million titles over 7 years with 50% women ownership target.",
      status: "Active",
      progress: "35%"
    },
    {
      country: "Rwanda",
      flag: "🇷🇼",
      title: "Blockchain System",
      description: "Reduced approval time from 8 weeks to 3 days with full transparency.",
      status: "Completed",
      progress: "100%"
    },
    {
      country: "Liberia",
      flag: "🇱🇷",
      title: "Digital Records",
      description: "Digitizing land records to expand ownership rights and inclusivity.",
      status: "Active",
      progress: "60%"
    },
    {
      country: "United States",
      flag: "🇺🇸",
      title: "Document Intelligence",
      description: "Deploying AI-powered document processing across multiple states.",
      status: "Expanding",
      progress: "45%"
    },
    {
      country: "St. Kitts",
      flag: "🇰🇳",
      title: "Drone Mapping",
      description: "Island-wide aerial mapping with 89,000+ images captured.",
      status: "Completed",
      progress: "100%"
    },
    {
      country: "Sierra Leone",
      flag: "🇸🇱",
      title: "World Bank Partnership",
      description: "1 million digital titles with blockchain verification.",
      status: "Planning",
      progress: "15%"
    }
  ];

  const stats = [
    { number: "4M+", label: "Titles in Progress", icon: Target, type: "blue" },
    { number: "6+", label: "Countries", icon: Globe, type: "clear" },
    { number: "70%", label: "Time Reduction", icon: TrendingUp, type: "blue" },
    { number: "50%", label: "Women Target", icon: Users, type: "clear" }
  ];

  // Duplicate projects for seamless scrolling
  const scrollingProjects = [...projects, ...projects];

  return (
    <section
      id="global-impact"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-background to-primary/5 transition-colors duration-700 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,hsla(var(--primary)/0.15)_0%,transparent_70%)] opacity-50 dark:opacity-25" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* LEFT: Stats Grid */}
          <div className="grid grid-cols-2 gap-6 flex-1 order-2 lg:order-1">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={cn(
                  "group relative rounded-2xl p-6 border-2 backdrop-blur-xl transition-all duration-500 flex flex-col items-center text-center cursor-pointer min-h-[180px]",
                  // Blue vs Clear
                  stat.type === "blue"
                    ? [
                        "bg-primary border-primary/30 text-white",
                        "hover:bg-primary/90 hover:border-primary/40 hover:shadow-primary/20"
                      ]
                    : [
                        "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700",
                        "text-gray-900 dark:text-white",
                        "hover:bg-gray-50 dark:hover:bg-gray-800",
                        "hover:border-primary/30"
                      ]
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-transform duration-300 group-hover:scale-110",
                    stat.type === "blue"
                      ? "bg-white/20 border-white/30"
                      : "bg-primary/20 border-primary/30"
                  )}
                >
                  <stat.icon className={cn("w-6 h-6", stat.type === "blue" ? "text-white" : "text-primary")} />
                </div>

                {/* Number */}
                <div className={cn("text-2xl font-bold mb-2", stat.type === "blue" ? "text-white" : "text-gray-900 dark:text-white")}>
                  {stat.number}
                </div>

                {/* Label */}
                <div className={cn("text-sm font-medium", stat.type === "blue" ? "text-white/90" : "text-gray-600 dark:text-gray-300")}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Heading + Description */}
          <div className="flex flex-col gap-8 lg:max-w-md xl:max-w-lg lg:pt-8 order-1 lg:order-2 text-right lg:text-right">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/15 text-foreground/90 px-4 py-2 rounded-full text-sm font-medium border border-primary/30 shadow-sm w-fit ml-auto"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span>Global Impact</span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-tight">
                Transforming Land
                <span className="block">Governance</span>
                <span className="block text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]">
                  Worldwide
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-foreground/90 leading-relaxed"
            >
              From Africa to the Americas, we deliver proven solutions that create 
              secure, transparent, and efficient land administration systems.
            </motion.p>
          </div>
        </div>

        {/* Scrolling Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 lg:mt-20"
        >
          <div className="relative w-full py-8 overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="overflow-hidden">
              <div className="flex gap-12 animate-scroll-left">
                {scrollingProjects.map((project, i) => (
                  <motion.div
                    key={`flag-${i}`}
                    className="flex items-center gap-3 flex-shrink-0 group"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <span className="text-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {project.flag}
                    </span>
                    <span className="text-xl font-semibold text-foreground/80 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                      {project.country}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <style jsx>{`
              @keyframes scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-scroll-left { animation: scroll-left 30s linear infinite; }
            `}</style>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-end mt-12"
        >
          <InteractiveButton href="/contact" className="bg-background text-foreground border-foreground/20">
            Partner with us
          </InteractiveButton>
        </motion.div>
      </div>
    </section>
  );
}

// Interactive Button Component
interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
}

function InteractiveButton({ children, className, href, ...props }: InteractiveButtonProps) {
  const ButtonContent = (
    <button
      className={cn(
        "group bg-background relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-8 text-center font-semibold transition-all duration-300",
        "min-h-[52px] flex items-center justify-center",
        "hover:bg-primary hover:border-primary hover:text-background",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div className="bg-primary h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100] group-hover:bg-background"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-base">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100">
        <span className="text-base">{children}</span>
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </button>
  );

  if (href) {
    return (
      <motion.a href={href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
        {ButtonContent}
      </motion.a>
    );
  }

  return <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{ButtonContent}</motion.div>;
}
