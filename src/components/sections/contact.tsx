"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="contact"
      ref={ref}
      className={cn(
        "relative flex items-center overflow-hidden py-24 transition-colors duration-700",
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


      {/* Main container */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(
            "relative rounded-2xl overflow-hidden p-10 md:p-12 lg:p-14 transition-all duration-500",
            isDark
              ? "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_50px_-10px_rgba(0,0,0,0.35)] bg-[#1a1f4a]"
              : "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_50px_-10px_rgba(0,0,0,0.15)] bg-white"
          )}
          style={{
            backgroundImage: `url('/bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay on image */}
          {isDark && (
            <div className="absolute inset-0 bg-black/60 pointer-events-none rounded-2xl" />
          )}

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
            {/* LEFT TEXT */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-md">
                Ready to Work With Us?
              </h2>
              <p className="text-base md:text-lg leading-relaxed max-w-md">
                Join MLG today and partner with us to build secure, transparent,
                and innovative digital land systems for the future.
              </p>
            </motion.div>

            {/* RIGHT SIDE: Button */}
            <motion.div
              className="relative flex flex-col items-center lg:items-end space-y-6"
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="relative z-10 flex items-center justify-center gap-3 px-8 py-3 rounded-full font-semibold 
                           bg-white/20 text-white border border-white/30
                           hover:bg-white hover:text-black hover:border-white
                           transition-all duration-300 min-h-[48px] group"
              >
                <span>Contact Us</span>
                <Mail className="w-5 h-5 text-white group-hover:text-black group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
