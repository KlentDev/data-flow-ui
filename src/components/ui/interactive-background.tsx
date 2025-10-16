"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(163, 190, 140, 0.1) 0%, transparent 50%)`,
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(163, 190, 140, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(163, 190, 140, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          backgroundPosition: 'center center',
        }}
      />
    </div>
  );
}