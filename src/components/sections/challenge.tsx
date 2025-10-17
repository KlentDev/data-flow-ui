"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, AlertTriangle, FileText, Clock, Users, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export function ChallengesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const challenges = [
    { icon: FileText, title: "Paper-Based Systems", description: "70% of land records remain in fragile paper format, vulnerable to damage and loss.", impact: "Data vulnerability", type: "red" },
    { icon: Clock, title: "Slow Processes", description: "Manual verification takes 8+ weeks for simple property transfers and approvals.", impact: "Inefficient workflows", type: "clear" },
    { icon: Lock, title: "Fraud & Corruption", description: "Lack of transparency enables document forgery and illegal property transfers.", impact: "Security risks", type: "red" },
    { icon: Users, title: "Limited Access", description: "Citizens face barriers to accessing and verifying their own property information.", impact: "Exclusionary systems", type: "clear" },
    { icon: AlertTriangle, title: "Data Silos", description: "Incompatible systems prevent integration and create information gaps across agencies.", impact: "Fragmented data", type: "red" },
    { icon: Users, title: "Gender Inequality", description: "Women own less than 20% of land globally due to systemic barriers.", impact: "Social inequality", type: "clear" }
  ];

  return (
    <section
      id="challenges"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-background to-red-500/5 transition-colors duration-700 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,hsla(0,100%,75%,0.15)_0%,transparent_70%)] opacity-50 dark:opacity-25" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 order-2 lg:order-1">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={cn(
                  "group relative rounded-2xl p-6 border-2 backdrop-blur-xl transition-all duration-500 flex flex-col h-full cursor-pointer min-h-[280px]",
                  challenge.type === "red"
                    ? "bg-red-500 border-red-500/30 text-white hover:bg-red-500/90 hover:border-red-500/40 hover:shadow-red-500/20"
                    : isDark
                    ? "bg-white/[0.05] border-white/20 text-white hover:bg-white/10 hover:border-red-500/20 hover:shadow-white/20"
                    : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-red-500/20 hover:shadow-gray-300/20"
                )}
              >
                <div className="flex flex-col flex-grow h-full">
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-transform duration-300 group-hover:scale-110",
                      challenge.type === "red"
                        ? "bg-white/20 border-white/30"
                        : "bg-red-500/20 border-red-500/30"
                    )}
                  >
                    <challenge.icon
                      className={cn(
                        "w-6 h-6",
                        challenge.type === "red" ? "text-white" : "text-red-500"
                      )}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={cn(
                      "text-lg font-semibold mb-3 line-clamp-2 leading-tight",
                      challenge.type === "red" ? "text-white" : isDark ? "text-white" : "text-gray-900"
                    )}
                  >
                    {challenge.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={cn(
                      "text-sm mb-4 leading-relaxed flex-grow",
                      challenge.type === "red" ? "text-white/90" : isDark ? "text-white/80" : "text-gray-600"
                    )}
                  >
                    {challenge.description}
                  </p>

                  {/* Impact Badge */}
                  <div
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium border mt-auto w-fit transition-all duration-300 group-hover:scale-105",
                      challenge.type === "red"
                        ? "bg-white/20 border-white/30 text-white"
                        : "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400"
                    )}
                  >
                    {challenge.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-8 lg:max-w-md xl:max-w-lg lg:pt-8 order-1 lg:order-2 text-right">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-red-500/15 text-foreground/90 px-4 py-2 rounded-full text-sm font-medium border border-red-500/30 shadow-sm ml-auto"
            >
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span>The Challenges</span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-tight">
                The Land Governance
                <span className="block">Crisis</span>
                <span className="block text-red-500 drop-shadow-[0_0_10px_rgba(255,131,131,0.5)]">Today</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={cn("text-base md:text-lg leading-relaxed", isDark ? "text-white/80" : "text-foreground/90")}
            >
              Traditional land management systems are failing citizens and governments alike,
              creating barriers to prosperity, security, and sustainable development.
            </motion.p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-start mt-16 lg:mt-20 order-3"
        >
          <InteractiveButton href="/solutions">Discover our solutions</InteractiveButton>
        </motion.div>
      </div>
    </section>
  );
}

// Reusable Interactive Button
interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
}

function InteractiveButton({ children, className, href, ...props }: InteractiveButtonProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const buttonClasses = cn(
    "group relative overflow-hidden rounded-full border px-8 py-3 font-semibold flex items-center justify-center transition-all duration-300 min-h-[52px]",
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
