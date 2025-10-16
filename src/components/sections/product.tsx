"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Package } from "lucide-react";

export function ProductSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="products"
      ref={ref}
      className="relative flex items-center overflow-hidden bg-background py-16 md:py-20"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2%, transparent 0%)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3"
            >
              <Package className="w-3 h-3" />
              <span>Our Solutions</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              The MLG{" "}
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70"
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Product Suite
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* RIGHT: Description + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col justify-center gap-6 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-base md:text-lg text-foreground/70 leading-relaxed"
            >
              Our technology ecosystem—built on AI, blockchain, and secure cloud
              infrastructure—powers the modernization of land governance systems
              across the world, ensuring trust, transparency, and accessibility for all.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.a
                href="#"
                className="inline-flex items-center space-x-2 text-primary font-semibold text-base hover:space-x-3 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="border-b border-transparent hover:border-primary transition-all duration-300">
                  Explore our products
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}