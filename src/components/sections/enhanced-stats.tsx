"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Zap, Shield, Play } from "lucide-react";
import { Counter } from "@/components/ui/counter";

export function EnhancedStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: 4, suffix: "M+", label: "Titles in Progress", icon: MapPin },
    { value: 40, suffix: "K", label: "Pages Processed/Hour", icon: Zap },
    { value: 70, suffix: "%", label: "Faster Processing", icon: Shield },
    { value: 13, suffix: "K+", label: "Properties Digitized", icon: Play },
  ];

  return (
    <section
      ref={ref}
      id="stats"
      className="relative flex items-center justify-center overflow-hidden py-24 
                 bg-gradient-to-b from-background via-background to-primary/10
                 transition-colors duration-700"
    >
      {/* Subtle radial glow behind */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,hsla(var(--primary)/0.15)_0%,transparent_70%)]" />

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-6"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground"
          >
            Empowering{" "}
            <span className="text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]">
              Governments
            </span>{" "}
            Worldwide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-foreground/70 text-lg max-w-2xl mx-auto mt-4 leading-relaxed"
          >
            Driving transparency, efficiency, and progress through secure digital land systems.
          </motion.p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="relative group p-8 rounded-2xl border border-foreground/10 
                         bg-white/70 dark:bg-white/5 backdrop-blur-xl 
                         hover:bg-white/90 dark:hover:bg-white/[0.07] 
                         hover:border-primary/40 hover:shadow-[0_10px_40px_-10px_hsla(var(--primary)/0.3)]
                         transition-all duration-500 text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />
              </div>

              <div className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>

              <p className="text-sm mt-2 uppercase tracking-wide text-foreground/60 font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
