"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxScrollProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
  intensity?: number; // new: control speed curve intensity
  fade?: boolean;     // new: enable fade effect for depth
}

export function ParallaxScroll({
  children,
  offset = 60,
  intensity = 0.8,
  fade = true,
  className = "",
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Motion transforms
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset * intensity]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.7, 1, 1, 0.7]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity: fade ? opacity : 1,
        willChange: "transform, opacity",
        perspective: 1000,
      }}
      className={`relative transition-transform duration-700 ease-out ${className}`}
    >
      {/* Optional subtle glow overlay to match the SaaS theme */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-primary/5 opacity-20" />
      
      {children}
    </motion.div>
  );
}
