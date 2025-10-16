"use client";

import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxScrollProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxScroll({ children, offset = 50, className = "" }: ParallaxScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}