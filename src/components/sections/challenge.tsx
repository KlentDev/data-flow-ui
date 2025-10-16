"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, AlertTriangle, FileText, Clock, Users, Lock } from "lucide-react";

export function ChallengesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const challenges = [
    {
      icon: FileText,
      title: "Paper-Based Systems",
      description: "70% of land records remain in fragile paper format, vulnerable to damage and loss.",
      impact: "Data vulnerability",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "hover:border-blue-400/50",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Clock,
      title: "Slow Processes",
      description: "Manual verification takes 8+ weeks for simple property transfers and approvals.",
      impact: "Inefficient workflows",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "hover:border-amber-400/50",
      iconColor: "text-amber-600 dark:text-amber-400"
    },
    {
      icon: Lock,
      title: "Fraud & Corruption",
      description: "Lack of transparency enables document forgery and illegal property transfers.",
      impact: "Security risks",
      color: "from-red-500/20 to-rose-500/20",
      borderColor: "hover:border-red-400/50",
      iconColor: "text-red-600 dark:text-red-400"
    },
    {
      icon: Users,
      title: "Limited Access",
      description: "Citizens face barriers to accessing and verifying their own property information.",
      impact: "Exclusionary systems",
      color: "from-purple-500/20 to-indigo-500/20",
      borderColor: "hover:border-purple-400/50",
      iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: AlertTriangle,
      title: "Data Silos",
      description: "Incompatible systems prevent integration and create information gaps across agencies.",
      impact: "Fragmented data",
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "hover:border-yellow-400/50",
      iconColor: "text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: Users,
      title: "Gender Inequality",
      description: "Women own less than 20% of land globally due to systemic barriers.",
      impact: "Social inequality",
      color: "from-pink-500/20 to-rose-500/20",
      borderColor: "hover:border-pink-400/50",
      iconColor: "text-pink-600 dark:text-pink-400"
    }
  ];

  return (
    <section
      id="challenges"
      ref={ref}
      className="relative py-20 md:py-40 bg-background dark:bg-background overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col 2xl:flex-row gap-10 2xl:gap-20">
          {/* Left Column: Header */}
          <div className="flex flex-col gap-6 2xl:max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/10 text-foreground px-4 py-2 rounded-full text-sm font-medium border border-primary/30 shadow-sm"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>The Challenges</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
            >
              The Land Governance
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 mt-2">
                Crisis Today
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-foreground/70 leading-relaxed"
            >
              Traditional land management systems are failing citizens and governments alike, 
              creating barriers to prosperity, security, and sustainable development.
            </motion.p>
          </div>

          {/* Right Column: Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-8 flex-1">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-background dark:bg-background rounded-2xl p-6 border border-foreground/10 hover:shadow-xl transition-all duration-500 flex flex-col h-full backdrop-blur-sm"
              >
                {/* Animated gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                
                {/* Main content */}
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${challenge.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <challenge.icon className={`w-6 h-6 ${challenge.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-foreground/90 transition-colors">
                    {challenge.title}
                  </h3>

                  <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-grow group-hover:text-foreground/80 transition-colors">
                    {challenge.description}
                  </p>

                  <div className={`px-3 py-1 bg-gradient-to-r ${challenge.color} text-foreground text-xs font-medium rounded-full border border-foreground/10 group-hover:border-foreground/20 transition-all duration-300 self-start`}>
                    {challenge.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Discover Solutions Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/solutions"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-3 rounded-full font-semibold text-base group shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Discover our solutions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}