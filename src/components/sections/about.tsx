"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Shield, Users, Cpu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const highlights = [
    { icon: Shield, text: "Blockchain Security", type: "dark" },
    { icon: Cpu, text: "AI-Powered Solutions", type: "clear" },
    { icon: Users, text: "Citizen Empowerment", type: "dark" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-background to-primary/5 transition-colors duration-700"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,hsla(var(--primary)/0.15)_0%,transparent_70%)] opacity-50 dark:opacity-25" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border shadow-sm w-fit mb-12",
            isDark
              ? "bg-white/10 text-white border-white/20"
              : "bg-primary/15 text-foreground/90 border-primary/30"
          )}
        >
          <Target className={cn("w-4 h-4", isDark ? "text-white" : "text-primary")} />
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

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={cn("text-base md:text-lg leading-relaxed", isDark ? "text-white/80" : "text-foreground/90")}
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
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={cn(
                    "group relative rounded-2xl p-6 border-2 backdrop-blur-xl transition-all duration-500 flex flex-col items-center text-center cursor-pointer min-h-[180px]",
                    // Dark cards
                    item.type === "dark" && [
                      "bg-[#020C28] border-[#020C28]/30 text-white",
                      "hover:bg-[#020C28]/90 hover:border-[#020C28]/40 hover:shadow-[#020C28]/20"
                    ],
                    // Clear cards
                    item.type === "clear" && [
                      isDark
                        ? "bg-white/[0.05] border-white/20 text-white hover:bg-white/[0.1] hover:border-white/30 hover:shadow-white/10"
                        : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-primary/30 hover:shadow-primary/10"
                    ]
                  )}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center mb-4 border transition-transform duration-300 group-hover:scale-110",
                      item.type === "dark" ? "bg-white/10 border-white/20" : "bg-primary/20 border-primary/30"
                    )}
                  >
                    <item.icon className={cn("w-8 h-8", item.type === "dark" ? "text-white" : "text-primary")} />
                  </div>
                  <span className="text-base font-semibold">{item.text}</span>
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
              <InteractiveButton href="/about">
                Learn about our mission
              </InteractiveButton>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Theme-aware Interactive Button
interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
}

function InteractiveButton({ children, className, href, ...props }: InteractiveButtonProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const buttonClasses = cn(
    "group relative overflow-hidden rounded-full border px-8 py-3 font-semibold flex items-center justify-center transition-all duration-300 min-h-[52px] flex items-center gap-2",
    isDark
      ? "bg-[#020C28] border-[#AED59C] text-white hover:bg-[#021038] hover:text-[#AED59C]"
      : "bg-white border-[#AED59C] text-gray-900 hover:bg-[#f7fff3] hover:text-[#020C28]",
    className
  );

  const ButtonContent = (
    <button className={buttonClasses} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      <span
        className={cn(
          "absolute inset-0 rounded-full transition-all duration-300",
          isDark ? "bg-[#020C28]/20 group-hover:bg-[#AED59C]/20" : "bg-white/20 group-hover:bg-[#AED59C]/20"
        )}
      />
    </button>
  );

  if (href) {
    return (
      <motion.a href={href} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
        {ButtonContent}
      </motion.a>
    );
  }

  return <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>{ButtonContent}</motion.div>;
}
