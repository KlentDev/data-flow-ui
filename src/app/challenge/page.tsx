"use client";

import { motion, Transition } from "framer-motion";
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

  const simpleAnimate = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } as Transition,
    },
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
    {
      value: 70,
      suffix: "%",
      label: "Land Records Still Paper-Based",
      icon: FileText,
      detail: "Vulnerable to loss & damage",
    },
    {
      value: 1,
      suffix: "B+",
      label: "People Lack Secure Property Rights",
      icon: Users,
      detail: "Limited economic opportunity",
    },
    {
      value: 8,
      suffix: "Weeks+",
      label: "Average Processing Time",
      icon: Clock,
      detail: "For simple transactions",
    },
    {
      value: 20,
      suffix: "%",
      label: "Women Land Ownership Rate",
      icon: AlertTriangle,
      detail: "Global gender gap",
    },
  ];

  const economicConsequences = [
    {
      icon: DollarSign,
      title: "Economic Stagnation",
      description:
        "Unclear property rights deter investment, reduce property values, and hinder economic development.",
      impact: "Trillions in untapped economic potential",
    },
    {
      icon: Scale,
      title: "Legal Conflicts & Disputes",
      description:
        "Land disputes account for 90% of court cases in developing countries, overwhelming judicial systems.",
      impact: "Years of litigation for resolution",
    },
    {
      icon: Building2,
      title: "Urban Development Barriers",
      description:
        "Poor land governance prevents efficient urban planning, infrastructure development, and housing solutions.",
      impact: "Slum growth and informal settlements",
    },
    {
      icon: Globe,
      title: "Social Instability",
      description:
        "Land conflicts drive social unrest, displacement, and undermine trust in government institutions.",
      impact: "90% of conflicts linked to land issues",
    },
    {
      icon: LandPlot,
      title: "Environmental Degradation",
      description:
        "Poor land governance leads to unsustainable resource management and environmental destruction.",
      impact: "Deforestation and resource conflicts",
    },
    {
      icon: TrendingDown,
      title: "Investment Deterrence",
      description:
        "Unclear property rights prevent both domestic and foreign investment in critical sectors.",
      impact: "Reduced GDP growth and development",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-foreground px-6 py-3 rounded-full text-base font-medium border border-white/20 mb-8"
            >
              <Target className="w-5 h-5" />
              <span>The Global Land Governance Crisis</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-red-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg"
            >
              Broken Systems, Broken Trust
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed bg-background/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
            >
              Traditional land governance systems are failing citizens and governments worldwide. 
              Outdated processes create barriers to prosperity, security, and sustainable development for billions.
            </motion.p>
          </motion.div>
        </section>

        {/* === GLOBAL IMPACT SECTION === */}
        <section className="py-24 bg-gradient-to-br from-red-500/5 via-background to-orange-500/5">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              {...simpleAnimate}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                The Scale of the Challenge
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Outdated land governance systems create multiple critical problems that affect 
                economic growth, social stability, and individual rights worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {globalImpact.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...simpleAnimate}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-muted/40 to-muted/20 rounded-3xl p-8 border border-border/50 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-500 group text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-xs text-primary font-medium">{stat.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Urgent Callout */}
            <motion.div
              {...simpleAnimate}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-3xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-400 mb-4">
                    Urgent Need for Digital Transformation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    These systemic challenges affect billions of people and trillions in economic potential. 
                    Traditional paper-based systems are no longer sustainable in the digital age. Modern, 
                    technology-driven solutions are essential to transform these broken systems and build 
                    trust in property rights worldwide.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* === CORE CHALLENGES GRID === */}
        <section ref={ref} className="py-24 bg-gradient-to-b from-background to-background/80">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              {...simpleAnimate}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                Systemic Challenges
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Traditional land management systems face multiple interconnected problems that 
                require comprehensive digital solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((c, i) => {
                const IconComponent = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    {...simpleAnimate}
                    transition={{ delay: i * 0.1 }}
                    className="h-full"
                  >
                    <div className="p-8 bg-gradient-to-br from-muted/40 to-muted/20 border border-border/50 rounded-3xl hover:shadow-2xl hover:scale-105 hover:bg-muted/40 transition-all duration-500 group flex flex-col h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${c.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 leading-tight">{c.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                        {c.description}
                      </p>
                      <div className="text-xs bg-primary/5 text-muted-foreground px-4 py-3 rounded-xl border border-primary/20 font-medium">
                        {c.impact}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === ECONOMIC & SOCIAL CONSEQUENCES === */}
        <section className="py-24 bg-gradient-to-r from-primary/5 to-red-500/10">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              {...simpleAnimate}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                Real-World Consequences
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The failure of traditional land governance systems has far-reaching impacts 
                on economies, societies, and sustainable development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {economicConsequences.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    {...simpleAnimate}
                    transition={{ delay: i * 0.1 }}
                    className="h-full"
                  >
                    <div className="p-8 bg-background border border-border/50 rounded-3xl backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 group flex flex-col h-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-center mb-4">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                        {item.description}
                      </p>
                      <div className="text-center">
                        <p className="text-primary text-sm font-semibold">{item.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === SOLUTION CTA === */}
        <section className="py-20 bg-gradient-to-r from-primary to-red-500">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <motion.div
              {...simpleAnimate}
              className="text-white"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                There Is a Better Way
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Modern technology solutions can transform these broken systems. 
                AI, blockchain, and digital innovation are already proving successful 
                in creating transparent, efficient, and accessible land governance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/solution">
                  <button className="px-8 py-4 bg-white text-primary rounded-2xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                    Discover Our Solutions <Target className="w-5 h-5" />
                  </button>
                </a>
                <a href="/contact">
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-semibold hover:bg-white/10 transition-colors">
                    Start Your Transformation
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}