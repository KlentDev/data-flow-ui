"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Mail } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative flex items-center overflow-hidden bg-gradient-to-b from-background via-background to-primary/5 py-20"
    >
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2%, transparent 0%)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 blur-[160px] rounded-full opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full opacity-40 animate-pulse" />

      {/* Main container */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] overflow-hidden
                     p-10 md:p-12 lg:p-14 transition-all duration-500
                     hover:shadow-[0_10px_50px_-10px_rgba(0,0,0,0.35)]"
          style={{
            backgroundImage: `url('/bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay on image */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none rounded-2xl" />

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

            {/* RIGHT SIDE: Dotted Map + Button */}
            <motion.div
              className="relative flex flex-col items-center lg:items-end space-y-6"
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              {/* Button */}
              <motion.a
                href="/contact"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                className="relative z-10 flex items-center justify-center gap-3 px-8 py-3 rounded-full font-semibold 
                           bg-white/20 text-white border border-white/30
                           hover:bg-white hover:text-black hover:border-white
                           transition-all duration-300 min-h-[48px] group"
              >
                <span>Contact Us</span>
                <Mail
                  className="w-5 h-5 text-white group-hover:text-black group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
