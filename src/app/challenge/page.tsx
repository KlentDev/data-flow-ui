"use client";

import { motion, easeOut } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Shield,
  Clock,
  Users,
  Lock,
  AlertTriangle,
  Target,
  Globe,
  Building2,
  LandPlot,
  TrendingDown,
  DollarSign,
  Scale,
} from "lucide-react";

export default function ChallengePage() {
  const ref = useRef(null);

  // Updated simpleAnimate with proper TypeScript easing
  const simpleAnimate = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const challenges = [
    {
      icon: FileText,
      title: "Paper-Based & Fragmented Systems",
      description:
        "Physical records scattered across departments, vulnerable to damage, loss, and deterioration with no centralized digital access.",
      impact: "70% of land records remain in paper format globally",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Shield,
      title: "Fraud & Data Vulnerability",
      description:
        "Lack of transparency enables document forgery, duplicate titles, illegal property transfers, and systematic data loss.",
      impact: "Vulnerable to fraud and unauthorized alterations",
      color: "from-red-500 to-orange-400",
    },
    {
      icon: Clock,
      title: "Slow & Expensive Operations",
      description:
        "Manual verification and approval processes taking weeks or months for simple transactions, increasing costs for citizens and governments.",
      impact: "8+ weeks average processing time for property transfers",
      color: "from-amber-500 to-yellow-400",
    },
    {
      icon: Users,
      title: "Inaccessible to Citizens",
      description:
        "Barriers prevent people from accessing and verifying their own property information, creating dependency on intermediaries.",
      impact: "Over 1 billion people lack secure property rights",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Lock,
      title: "Data Silos & Incompatibility",
      description:
        "Isolated, incompatible systems create information gaps and hinder inter-agency cooperation across government departments.",
      impact: "60% of governments struggle with incompatible land systems",
      color: "from-gray-500 to-gray-400",
    },
    {
      icon: AlertTriangle,
      title: "Gender & Social Inequality",
      description:
        "Systemic barriers prevent women and marginalized communities from securing and maintaining property rights.",
      impact: "Women own less than 20% of land globally",
      color: "from-rose-500 to-red-400",
    },
  ];

  const globalImpact = [
    { value: 70, suffix: "%", label: "Land Records Still Paper-Based", icon: FileText, detail: "Vulnerable to loss & damage" },
    { value: 1, suffix: "B+", label: "People Lack Secure Property Rights", icon: Users, detail: "Limited economic opportunity" },
    { value: 8, suffix: "Weeks+", label: "Average Processing Time", icon: Clock, detail: "For simple transactions" },
    { value: 20, suffix: "%", label: "Women Land Ownership Rate", icon: AlertTriangle, detail: "Global gender gap" },
  ];

  const economicConsequences = [
    {
      icon: DollarSign,
      title: "Economic Stagnation",
      description: "Unclear property rights deter investment, reduce property values, and hinder economic development.",
      impact: "Trillions in untapped economic potential"
    },
    {
      icon: Scale,
      title: "Legal Conflicts & Disputes",
      description: "Land disputes account for 90% of court cases in developing countries, overwhelming judicial systems.",
      impact: "Years of litigation for resolution"
    },
    {
      icon: Building2,
      title: "Urban Development Barriers",
      description: "Poor land governance prevents efficient urban planning, infrastructure development, and housing solutions.",
      impact: "Slum growth and informal settlements"
    },
    {
      icon: Globe,
      title: "Social Instability",
      description: "Land conflicts drive social unrest, displacement, and undermine trust in government institutions.",
      impact: "90% of conflicts linked to land issues"
    },
    {
      icon: LandPlot,
      title: "Environmental Degradation",
      description: "Poor land governance leads to unsustainable resource management and environmental destruction.",
      impact: "Deforestation and resource conflicts"
    },
    {
      icon: TrendingDown,
      title: "Investment Deterrence",
      description: "Unclear property rights prevent both domestic and foreign investment in critical sectors.",
      impact: "Reduced GDP growth and development"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOut }}
    >
      <main className="min-h-screen bg-background text-foreground">
        {/* === HERO SECTION === */}
        <section className="relative flex items-center justify-center min-h-[80vh] overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="https://via.placeholder.com/1920x1080.png?text=Challenge+Hero+Video"
            >
              <source src="/video/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-primary/20 to-background/80 backdrop-blur-[1px]" />
          </div>

          {/* Hero Content */}
          <motion.div
            {...simpleAnimate}
            className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ease: easeOut }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-foreground px-6 py-3 rounded-full text-base font-medium border border-white/20 mb-8"
            >
              <Target className="w-5 h-5" />
              <span>The Global Land Governance Crisis</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-red-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg"
            >
              Broken Systems, Broken Trust
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed bg-background/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
            >
              Traditional land governance systems are failing citizens and governments worldwide. 
              Outdated processes create barriers to prosperity, security, and sustainable development for billions.
            </motion.p>
          </motion.div>
        </section>

        {/* === Remaining sections use {...simpleAnimate} === */}
        {/* ...GLOBAL IMPACT, CORE CHALLENGES, ECONOMIC & SOCIAL CONSEQUENCES, CTA */}
      </main>
    </motion.div>
  );
}
