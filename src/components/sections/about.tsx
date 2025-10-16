"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Target, Shield, Users, Cpu } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const highlights = [
    { icon: Shield, text: "Blockchain Security" },
    { icon: Cpu, text: "AI-Powered Solutions" },
    { icon: Users, text: "Citizen Empowerment" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-background to-primary/5 transition-colors duration-700"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,hsla(var(--primary)/0.15)_0%,transparent_70%)] opacity-50 dark:opacity-25" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary/15 text-foreground/90 px-4 py-2 rounded-full 
                     text-sm font-medium border border-primary/30 shadow-sm w-fit mb-12"
        >
          <Target className="w-4 h-4 text-primary" />
          <span>About MLG</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight space-y-2"
          >
            <span className="block">Revolutionizing Land Governance</span>
            <span className="block text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]">
              Through Digital Innovation
            </span>
          </motion.h2>

          {/* Right Column: Description + Highlights + Button */}
          <div className="flex flex-col gap-8">
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-foreground/90 leading-relaxed"
            >
              Medici Land Governance (MLG) is a global technology company transforming how governments
              manage land, property, and public records. We combine AI, machine learning, and blockchain
              to create secure, transparent, and efficient systems for land administration, property
              transactions, and digital governance.
            </motion.p>

            {/* Highlight Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-center justify-center rounded-xl p-7 text-center border border-foreground/10 
                             bg-white/80 dark:bg-white/[0.05] backdrop-blur-xl 
                             hover:border-primary/50 hover:shadow-[0_10px_30px_-10px_hsla(var(--primary)/0.4)] 
                             transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/25 flex items-center justify-center mb-4 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-base font-semibold text-foreground">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Button */}
            <motion.div
              className="relative flex flex-col items-center lg:items-end mt-10"
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            >
              <motion.a
                href="/about"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                className="relative z-10 flex items-center justify-center gap-3 px-8 py-3 rounded-full font-semibold 
                           bg-white text-[#020C28] border border-[#020C28]/20
                           hover:bg-transparent hover:text-black hover:border-black
                           transition-all duration-300 min-h-[48px] group shadow-md"
              >
                <span>Learn about our mission</span>
                <Mail
                  className="w-5 h-5 text-[#020C28] group-hover:text-black group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
