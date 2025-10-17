"use client";

import { motion, Transition } from "framer-motion";
import { useRef } from "react";
import {
  Cpu,
  Shield,
  Zap,
  Database,
  FileText,
  Cloud,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Award,
  Globe,
  Building,
} from "lucide-react";

export default function TechnologyPage() {
  const ref = useRef(null);

  const simpleAnimate = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } as Transition, // <-- fix here
    },
  };

  const coreTechnologies = [
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description:
        "Advanced document intelligence and automation that processes land records with enterprise-grade accuracy and speed.",
      impact: "40,000 pages/hour processing capacity",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description:
        "Immutable distributed ledger ensuring data integrity, preventing fraud, and creating transparent audit trails.",
      impact: "Zero title fraud incidents",
      color: "from-emerald-500 to-green-400",
    },
    {
      icon: Database,
      title: "Cloud Infrastructure",
      description:
        "Scalable, secure cloud platform supporting global operations with high availability and regulatory compliance.",
      impact: "99.9% uptime SLA guarantee",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description:
        "AI-powered processing of land records, contracts, and legal documents with human-level accuracy.",
      impact: "70% faster processing times",
      color: "from-amber-500 to-orange-400",
    },
    {
      icon: Globe,
      title: "Digital Mapping",
      description:
        "Drone and aerial imagery with AI-powered boundary detection for accurate cadastral mapping.",
      impact: "90% faster survey processes",
      color: "from-red-500 to-rose-400",
    },
    {
      icon: Smartphone,
      title: "Mobile Accessibility",
      description:
        "Cross-platform mobile applications for field agents and citizen access in remote areas.",
      impact: "24/7 citizen access worldwide",
      color: "from-indigo-500 to-purple-400",
    },
  ];

  const performanceStats = [
    {
      value: 40,
      suffix: "K",
      label: "Pages Processed Per Hour",
      icon: Zap,
      detail: "DocAI maximum capacity",
    },
    {
      value: 99.9,
      suffix: "%",
      label: "System Uptime",
      icon: Cloud,
      detail: "Enterprise SLA guarantee",
    },
    {
      value: 70,
      suffix: "%",
      label: "Faster Processing",
      icon: TrendingUp,
      detail: "Average efficiency gain",
    },
    {
      value: 4,
      suffix: "M+",
      label: "Titles in Progress",
      icon: Target,
      detail: "Global deployment scale",
    },
  ];

  const technologyBenefits = [
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description:
        "AI-powered automation reduces processing times from weeks to minutes with 40,000 pages/hour capacity.",
      impact: "8 weeks → 3 days turnaround",
    },
    {
      icon: Shield,
      title: "Military-Grade Security",
      description:
        "Blockchain technology ensures data integrity and prevents fraud with cryptographic verification.",
      impact: "Zero successful fraud attempts",
    },
    {
      icon: Users,
      title: "Citizen Empowerment",
      description:
        "Mobile access and transparent systems give citizens control over their property rights.",
      impact: "24/7 access to land records",
    },
    {
      icon: Building,
      title: "Government Efficiency",
      description:
        "Streamlined processes reduce operational costs and improve service delivery for governments.",
      impact: "50-70% cost reduction",
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description:
        "Cloud infrastructure supports deployment across continents with local compliance.",
      impact: "6+ countries deployed",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "Tested and validated across multiple government implementations worldwide.",
      impact: "4M+ titles in progress",
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
              poster="https://via.placeholder.com/1920x1080.png?text=Technology+Hero+Video"
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
              <Cpu className="w-5 h-5" />
              <span>Enterprise Technology Stack</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
            >
              Powering Digital Land Governance
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed bg-background/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
            >
              MLG combines cutting-edge AI, blockchain, and cloud technologies to create 
              secure, transparent, and efficient land governance systems that transform how governments manage property rights worldwide.
            </motion.p>
          </motion.div>
        </section>

        {/* === PERFORMANCE STATS SECTION === */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-emerald-500/5">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              {...simpleAnimate}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Proven Performance
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Enterprise-grade technology delivering measurable results across global deployments
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {performanceStats.map((stat, i) => (
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

            {/* Technology Mission Highlight */}
            <motion.div
              {...simpleAnimate}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-primary/10 to-emerald-500/10 border border-primary/20 rounded-3xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Trust Through Advanced Technology
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Our integrated technology stack ensures every land transaction is secure, 
                    transparent, and verifiable while maintaining the highest standards of 
                    data privacy and regulatory compliance across all global jurisdictions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* === CORE TECHNOLOGIES GRID === */}
        <section ref={ref} className="py-24 bg-gradient-to-b from-background to-background/80">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              {...simpleAnimate}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Core Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced technologies working in harmony to revolutionize land governance worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTechnologies.map((tech, i) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={tech.title}
                    {...simpleAnimate}
                    transition={{ delay: i * 0.1 }}
                    className="h-full"
                  >
                    <div className="p-8 bg-gradient-to-br from-muted/40 to-muted/20 border border-border/50 rounded-3xl hover:shadow-2xl hover:scale-105 hover:bg-muted/40 transition-all duration-500 group flex flex-col h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 leading-tight">{tech.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                        {tech.description}
                      </p>
                      <div className="text-xs bg-primary/5 text-muted-foreground px-4 py-3 rounded-xl border border-primary/20 font-medium">
                        {tech.impact}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === TECHNOLOGY BENEFITS === */}
        <section className="py-24 bg-gradient-to-r from-primary/5 to-emerald-500/10">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              {...simpleAnimate}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Transformative Benefits
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                How our technology creates real impact for governments, citizens, and economies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologyBenefits.map((benefit, i) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    {...simpleAnimate}
                    transition={{ delay: i * 0.1 }}
                    className="h-full"
                  >
                    <div className="p-8 bg-background border border-border/50 rounded-3xl backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 group flex flex-col h-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-center mb-4">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                        {benefit.description}
                      </p>
                      <div className="text-center">
                        <p className="text-primary text-sm font-semibold">{benefit.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="py-20 bg-gradient-to-r from-primary to-emerald-500">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <motion.div
              {...simpleAnimate}
              className="text-white"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Land Governance?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join governments worldwide who are leveraging our technology to build trust, 
                unlock economic value, and empower citizens through digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/solution">
                  <button className="px-8 py-4 bg-white text-primary rounded-2xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                    Explore Solutions <Target className="w-5 h-5" />
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