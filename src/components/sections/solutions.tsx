"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Cpu, Shield, Search, MapPin, FileText } from "lucide-react";

export function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const solutions = [
    {
      icon: FileText,
      title: "Document Intelligence (DocAI)",
      description:
        "Process 40,000 pages/hour with AI-powered classification and fraud detection.",
      features: ["Automated indexing", "Fraud prevention", "Instant verification"],
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Shield,
      title: "Property Wallet",
      description:
        "Secure mobile access to verified land records with blockchain credentials.",
      features: ["Digital ownership", "Mobile access", "Secure transfers"],
      color: "from-emerald-500/20 to-green-500/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Search,
      title: "Smart Search Portals",
      description:
        "AI-powered search with instant retrieval of land records and documents.",
      features: ["Full-text search", "Advanced filters", "Public access"],
      color: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: MapPin,
      title: "Drone & Aerial Mapping",
      description:
        "VTOL drone-based survey and mapping with AI boundary detection.",
      features: ["High-resolution mapping", "Boundary detection", "Cadastral data"],
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
    {
      icon: Cpu,
      title: "Systematic Land Titling",
      description:
        "End-to-end digital titling programs with gender-inclusive approaches.",
      features: ["Mass titling", "Gender parity", "Digital certificates"],
      color: "from-red-500/20 to-rose-500/20",
      iconColor: "text-red-600 dark:text-red-400",
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description:
        "Immutable land records and tamper-proof transaction systems.",
      features: ["Cryptographic proofs", "Audit trails", "Data integrity"],
      color: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-600 dark:text-violet-400",
    },
  ];

  return (
    <section
      id="solutions"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-background to-primary/5 transition-colors duration-700 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,hsla(var(--primary)/0.15)_0%,transparent_70%)] opacity-50 dark:opacity-25" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col 2xl:flex-row gap-14 2xl:gap-24">
          {/* Left Column: Header */}
          <div className="flex flex-col gap-8 2xl:max-w-lg">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/15 text-foreground/90 px-4 py-2 rounded-full 
                         text-sm font-medium border border-primary/30 shadow-sm w-fit"
            >
              <Cpu className="w-4 h-4 text-primary" />
              <span>Our Solutions</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight"
            >
              Comprehensive Land Governance
              <span className="block text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)] mt-2">
                Solutions
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-foreground/90 leading-relaxed"
            >
              End-to-end digital platforms that transform land administration with
              AI, blockchain, and next-generation technology — empowering transparent,
              efficient, and inclusive governance.
            </motion.p>
          </div>

          {/* Right Column: Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 flex-1">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                className={`group relative rounded-2xl p-6 border border-foreground/10 
                            bg-white/80 dark:bg-white/[0.05] backdrop-blur-xl
                            hover:shadow-[0_10px_30px_-10px_hsla(var(--primary)/0.4)]
                            transition-all duration-500 flex flex-col h-full`}
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col flex-grow">
                  <div
                    className={`w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <solution.icon className={`w-7 h-7 ${solution.iconColor}`} />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-foreground/90 transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed flex-grow">
                    {solution.description}
                  </p>

                  <div className="space-y-1.5">
                    {solution.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-foreground/70 group-hover:text-foreground/85 transition-colors"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full mr-3 ${solution.iconColor.replace(
                            "text-",
                            "bg-"
                          )}`}
                        />
                        {feature}
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
          className="flex justify-center mt-20"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10 inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold 
                       bg-white text-[#020C28] border border-[#020C28]/20
                       hover:bg-transparent hover:text-black hover:border-black
                       transition-all duration-300 min-h-[48px] group shadow-md"
          >
            <span>Get started with our solutions</span>
            <ArrowRight className="w-5 h-5 text-[#020C28] group-hover:text-black group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
