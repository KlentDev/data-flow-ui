"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Wallet,
  Search,
  Map,
  Target,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Users,
  Globe,
  Cpu,
  Building,
  Clock,
  Landmark,
  Eye,
} from "lucide-react";
import Link from "next/link";

export default function SolutionPage() {
  const ref = useRef(null);

  const simpleAnimate = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // === DATA ===
  const solutions = [
    {
      icon: FileText,
      title: "Document Intelligence Platform (DocAI)",
      description:
        "AI platform automating classification, indexing, and verification for land and court records with enterprise-grade security.",
      features: [
        "40,000+ pages/hour processing speed",
        "AI-based recordability checks & fraud detection",
        "Smart indexing, redaction & data linking",
        "Blockchain-backed preservation",
        "Full audit trail & analytics dashboard",
      ],
      href: "/solutions/docai",
      stats: ["40K", "pages/hour"],
      deployments: ["Tooele County, UT", "Maryland", "Missouri", "Ohio", "Florida", "California"],
      roi: "6–12 months",
      metrics: [
        { value: "50-70%", label: "Faster Recording" },
        { value: "99.9%", label: "Accuracy Rate" },
        { value: "Zero", label: "Title Fraud" },
      ],
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Wallet,
      title: "Property Wallet™",
      description:
        "Secure mobile access to verified land records with blockchain-based ownership credentials for citizens.",
      features: [
        "Blockchain-based ownership credentials",
        "Digital verification for transfers & taxes",
        "Mobile offline access capability",
        "Multi-language & citizen-friendly UI",
      ],
      href: "/solutions/property-wallet",
      stats: ["1M+", "Digital Titles"],
      deployments: ["Zambia National", "Rwanda Pilot", "Liberia Program"],
      roi: "8–18 months",
      metrics: [
        { value: "80%", label: "Time Saved" },
        { value: "24/7", label: "Access" },
        { value: "Secure", label: "Verification" },
      ],
      color: "from-emerald-500 to-green-400",
    },
    {
      icon: Search,
      title: "Smart Search Portals",
      description:
        "AI-powered search with full-text retrieval, advanced filters, and analytics for public and enterprise records.",
      features: [
        "Full-text AI retrieval across all records",
        "Advanced filters & smart search",
        "Integrated paywall monetization",
        "County-branded interface",
        "Usage analytics & revenue reporting",
      ],
      href: "/solutions/search-portals",
      stats: ["<1s", "Search Speed"],
      deployments: ["US Counties", "Zambia National", "Rwanda Ubutaka"],
      roi: "3–6 months",
      metrics: [
        { value: "95%", label: "User Satisfaction" },
        { value: "+$50K", label: "Annual Revenue" },
        { value: "Instant", label: "Access" },
      ],
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Map,
      title: "Drone & Aerial Mapping",
      description:
        "VTOL drone-based survey and mapping with AI-powered image processing and boundary detection.",
      features: [
        "VTOL drone survey & mapping",
        "AI-based image processing",
        "Automated boundary detection",
        "Fast cadastral mapping",
        "Infrastructure planning support",
      ],
      href: "/solutions/drone-mapping",
      stats: ["89K+", "Images Captured"],
      deployments: ["St. Kitts", "Guyana", "Zambia"],
      roi: "12–24 months",
      metrics: [
        { value: "90%", label: "Faster Survey" },
        { value: "CM-level", label: "Accuracy" },
        { value: "Complete", label: "Coverage" },
      ],
      color: "from-amber-500 to-orange-400",
    },
  ];

  const results = [
    { metric: "70%", desc: "Reduction in processing time", icon: Zap, detail: "Rwanda: 8 weeks → 3 days" },
    { metric: "50-70%", desc: "Faster recording times", icon: Clock, detail: "DocAI implementation" },
    { metric: "50%", desc: "Women ownership target", icon: Users, detail: "Zambia program goal" },
    { metric: "Zero", desc: "Title fraud incidents", icon: Shield, detail: "Blockchain secured" },
    { metric: "4M+", desc: "Titles in progress", icon: Target, detail: "Zambia systematic titling" },
    { metric: "13K+", desc: "Properties digitized", icon: Building, detail: "Baltimore blockchain" },
  ];

  const technologyPillars = [
    { 
      icon: Cpu, 
      title: "AI-Powered Intelligence", 
      desc: "Machine learning for document processing, classification, and verification at scale." 
    },
    { 
      icon: Shield,
      title: "Blockchain Security", 
      desc: "Immutable cryptographic proofs and tamper-evident audit trails for all transactions." 
    },
    { 
      icon: Eye, 
      title: "Transparent Systems", 
      desc: "Public access portals with full audit trails and real-time verification capabilities." 
    },
  ];

  const globalImpact = [
    { 
      icon: Landmark, 
      country: "Zambia", 
      desc: "Africa's largest systematic land titling - 4M titles over 7 years", 
      progress: "35% complete",
      highlight: "50% women ownership target"
    },
    { 
      icon: Zap, 
      country: "Rwanda", 
      desc: "Ubutaka system reduced approval time from 8 weeks to 3 days", 
      progress: "100% deployed",
      highlight: "National blockchain implementation"
    },
    { 
      icon: Building, 
      country: "Baltimore, USA", 
      desc: "13,000 vacant properties on blockchain to attract investment", 
      progress: "Investment Ready",
      highlight: "Title cleanup initiative"
    },
    { 
      icon: Globe, 
      country: "Guyana", 
      desc: "National cadastral datasets for 16,000+ km² developed", 
      progress: "Completed",
      highlight: "Drone mapping deployed"
    },
  ];

  // === COMPONENT ===
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
              poster="https://via.placeholder.com/1920x1080.png?text=Solutions+Hero+Video"
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
              <span>End-to-End Digital Land Solutions</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
            >
              Transforming Land Governance
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed bg-background/90 p-8 rounded-3xl border border-white/20 shadow-lg"
            >
              Revolutionizing property rights through AI, blockchain, and digital innovation — building trust, unlocking value, and empowering citizens worldwide.
            </motion.p>
          </motion.div>
        </section>

        {/* === TECHNOLOGY PILLARS === */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              {...simpleAnimate}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Powered by Innovation
              </h2>
              <p className="text-xl text-foreground max-w-3xl mx-auto">
                Combining cutting-edge technologies to create secure, transparent, and efficient land governance systems for the modern world.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologyPillars.map((item, i) => (
                <motion.div
                  key={i}
                  {...simpleAnimate}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4 text-foreground">{item.title}</h3>
                  <p className="text-foreground text-center text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* === PROVEN RESULTS === */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              {...simpleAnimate}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Measurable Impact
              </h2>
              <p className="text-xl text-foreground max-w-3xl mx-auto">
                Real results from our global deployments demonstrate the transformative power of digital land governance.
              </p>
            </motion.div>

            {/* Top Row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {results.slice(0, 3).map((r, i) => (
                <motion.div
                  key={i}
                  {...simpleAnimate}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-500 group text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <r.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{r.metric}</div>
                  <p className="text-lg font-medium text-foreground mb-2">{r.desc}</p>
                  <p className="text-primary font-medium">{r.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {results.slice(3, 6).map((r, i) => (
                <motion.div
                  key={i + 3}
                  {...simpleAnimate}
                  transition={{ delay: (i + 3) * 0.1 }}
                  className="p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-500 group text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <r.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{r.metric}</div>
                  <p className="text-lg font-medium text-foreground mb-2">{r.desc}</p>
                  <p className="text-primary font-medium">{r.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* === GLOBAL IMPACT === */}
        <section className="py-24 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              {...simpleAnimate}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Global Deployment & Success
              </h2>
              <p className="text-xl text-foreground max-w-3xl mx-auto">
                From national systematic titling to urban property digitization, our solutions are transforming land governance worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {globalImpact.map((item, i) => (
                <motion.div
                  key={i}
                  {...simpleAnimate}
                  transition={{ delay: i * 0.15 }}
                  className="p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-lg font-bold text-foreground">{item.country}</p>
                  </div>
                  <p className="text-foreground text-sm mb-3 leading-relaxed">{item.desc}</p>
                  <div className="space-y-2">
                    <p className="text-primary text-sm font-semibold">{item.progress}</p>
                    <p className="text-emerald-600 text-sm font-medium">{item.highlight}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* === SOLUTION GRID === */}
        <section ref={ref} className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              {...simpleAnimate}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Complete Solution Suite
              </h2>
              <p className="text-xl text-foreground max-w-3xl mx-auto">
                End-to-end digital land governance solutions that integrate seamlessly to transform how governments manage property rights.
              </p>
            </motion.div>

            {/* Top Row - 2 cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {solutions.slice(0, 2).map((sol, i) => {
                const IconComponent = sol.icon;
                return (
                  <motion.div
                    key={i}
                    {...simpleAnimate}
                    transition={{ delay: i * 0.1 }}
                    className="h-full"
                  >
                    <Link href={sol.href}>
                      <div className="p-8 bg-white border border-gray-200 rounded-3xl flex flex-col h-full hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                          <div className={`w-20 h-20 bg-gradient-to-br ${sol.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                          <div className="text-right">
                            <p className="text-3xl font-bold text-primary">{sol.stats[0]}</p>
                            <p className="text-lg text-foreground">{sol.stats[1]}</p>
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold mb-4 leading-tight text-foreground">{sol.title}</h3>
                        <p className="text-foreground text-lg leading-relaxed mb-6 flex-grow">{sol.description}</p>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {sol.metrics.map((m, mi) => (
                            <div key={mi} className="bg-primary/5 rounded-xl py-3 text-center group-hover:bg-primary/10 transition-colors">
                              <div className="text-lg font-bold text-primary">{m.value}</div>
                              <div className="text-sm text-foreground">{m.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-6 flex-grow">
                          {sol.features.map((f, fi) => (
                            <div key={fi} className="flex text-base text-foreground items-start">
                              <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" /> 
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-center text-sm text-foreground pt-4 border-t border-gray-200">
                          <span className="flex items-center gap-2">
                            <Globe className="w-4 h-4" /> 
                            {sol.deployments.length} deployments
                          </span>
                          <span className="text-primary font-semibold text-lg">{sol.roi} ROI</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Row - 2 cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.slice(2, 4).map((sol, i) => {
                const IconComponent = sol.icon;
                return (
                  <motion.div
                    key={i + 2}
                    {...simpleAnimate}
                    transition={{ delay: (i + 2) * 0.1 }}
                    className="h-full"
                  >
                    <Link href={sol.href}>
                      <div className="p-8 bg-white border border-gray-200 rounded-3xl flex flex-col h-full hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                          <div className={`w-20 h-20 bg-gradient-to-br ${sol.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                          <div className="text-right">
                            <p className="text-3xl font-bold text-primary">{sol.stats[0]}</p>
                            <p className="text-lg text-foreground">{sol.stats[1]}</p>
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold mb-4 leading-tight text-foreground">{sol.title}</h3>
                        <p className="text-foreground text-lg leading-relaxed mb-6 flex-grow">{sol.description}</p>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {sol.metrics.map((m, mi) => (
                            <div key={mi} className="bg-primary/5 rounded-xl py-3 text-center group-hover:bg-primary/10 transition-colors">
                              <div className="text-lg font-bold text-primary">{m.value}</div>
                              <div className="text-sm text-foreground">{m.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-6 flex-grow">
                          {sol.features.map((f, fi) => (
                            <div key={fi} className="flex text-base text-foreground items-start">
                              <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" /> 
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-center text-sm text-foreground pt-4 border-t border-gray-200">
                          <span className="flex items-center gap-2">
                            <Globe className="w-4 h-4" /> 
                            {sol.deployments.length} deployments
                          </span>
                          <span className="text-primary font-semibold text-lg">{sol.roi} ROI</span>
                        </div>
                      </div>
                    </Link>
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
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Join governments worldwide who are building trust in property rights and unlocking economic value through technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-white text-primary rounded-2xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                    Start Your Transformation <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/case-studies">
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-semibold hover:bg-white/10 transition-colors">
                    View Case Studies
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}