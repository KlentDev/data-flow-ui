"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Cpu, Shield, Search, MapPin, FileText, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const solutions = [
    { icon: FileText, title: "Document Intelligence (DocAI)", description: "Process 40,000 pages/hour with AI-powered classification and fraud detection.", features: ["Automated indexing", "Fraud prevention", "Instant verification"], type: "green" },
    { icon: Shield, title: "Property Wallet", description: "Secure mobile access to verified land records with blockchain credentials.", features: ["Digital ownership", "Mobile access", "Secure transfers"], type: "clear" },
    { icon: Search, title: "Smart Search Portals", description: "AI-powered search with instant retrieval of land records and documents.", features: ["Full-text search", "Advanced filters", "Public access"], type: "green" },
    { icon: MapPin, title: "Drone & Aerial Mapping", description: "VTOL drone-based survey and mapping with AI boundary detection.", features: ["High-resolution mapping", "Boundary detection", "Cadastral data"], type: "clear" },
    { icon: Cpu, title: "Systematic Land Titling", description: "End-to-end digital titling programs with gender-inclusive approaches.", features: ["Mass titling", "Gender parity", "Digital certificates"], type: "green" },
    { icon: Shield, title: "Blockchain Security", description: "Immutable land records and tamper-proof transaction systems.", features: ["Cryptographic proofs", "Audit trails", "Data integrity"], type: "clear" },
  ];

  return (
    <section
      id="solutions"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-background to-primary/5 transition-colors duration-700 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,hsla(var(--primary)/0.15)_0%,transparent_70%)] opacity-50 dark:opacity-25" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column */}
          <div className="flex flex-col lg:max-w-md xl:max-w-lg">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border shadow-sm w-fit mb-4",
                isDark ? "bg-white/10 text-white border-white/20" : "bg-primary/15 text-foreground/90 border-primary/30"
              )}
            >
              <Cpu className={cn("w-4 h-4", isDark ? "text-white" : "text-primary")} />
              <span>Our Solutions</span>
            </motion.div>

            {/* Title + Description */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-tight">
                  Comprehensive Land
                  <span className="block">Governance</span>
                  <span className="block text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]">Solutions</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={cn("text-base md:text-lg leading-relaxed", isDark ? "text-white/80" : "text-foreground/90")}
              >
                End-to-end digital platforms that transform land administration with AI, blockchain, and next-generation technology — empowering transparent, efficient, and inclusive governance.
              </motion.p>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 mt-8 lg:mt-0">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={cn(
                  "group relative rounded-2xl p-6 border-2 backdrop-blur-xl transition-all duration-300 flex flex-col h-full min-h-[280px]",
                  solution.type === "green"
                    ? "bg-primary border-primary/30 text-background hover:shadow-lg hover:scale-105"
                    : isDark
                    ? "bg-white/[0.05] border-white/20 text-white hover:shadow-lg hover:scale-105"
                    : "bg-white border-gray-200 text-gray-900 hover:shadow-lg hover:scale-105"
                )}
              >
                <div className="flex flex-col flex-grow h-full">
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-transform duration-300 group-hover:scale-110",
                      solution.type === "green"
                        ? "bg-background/20 border-background/30"
                        : "bg-primary/20 border-primary/30"
                    )}
                  >
                    <solution.icon
                      className={cn(
                        "w-6 h-6",
                        solution.type === "green" ? "text-background" : isDark ? "text-white" : "text-primary"
                      )}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={cn(
                      "text-lg font-semibold mb-3 line-clamp-2 leading-tight",
                      solution.type === "green" ? "text-background" : isDark ? "text-white" : "text-gray-900"
                    )}
                  >
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={cn(
                      "text-sm mb-4 leading-relaxed flex-grow",
                      solution.type === "green" ? "text-background/90" : isDark ? "text-white/80" : "text-gray-600"
                    )}
                  >
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mt-auto">
                    {solution.features.map((feature, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex items-center text-sm gap-3",
                          solution.type === "green" ? "text-background/90" : isDark ? "text-white/80" : "text-gray-700"
                        )}
                      >
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-primary text-white">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-end mt-16 lg:mt-20"
        >
          <InteractiveButton href="/contact">
            Get started with our solutions
          </InteractiveButton>
        </motion.div>
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
