"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Globe,
  Users,
  Target,
  MapPin,
  TrendingUp,
  Lock,
  Cpu,
  Landmark,
  Zap,
  Eye,
} from "lucide-react";

// Remove PageTransition import for now

export default function AboutPage() {
  const ref = useRef(null);

  return (
    // Remove PageTransition wrapper
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* HERO SECTION */}
      <section
        ref={ref}
        className="relative overflow-hidden min-h-[90vh] flex items-center justify-center text-center"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://via.placeholder.com/1920x1080.png?text=About+Video"
          >
            <source src="/video/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Enhanced Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-primary/20 to-background/80 backdrop-blur-[1px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl px-6 py-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
          >
            Revolutionizing Land Governance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light"
          >
            Transforming how governments manage land, property, and public records through AI, blockchain, and digital innovation.
          </motion.p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="relative z-10 py-28 bg-gradient-to-b from-background via-background/70 to-background">
        <div className="container max-w-7xl mx-auto px-6 flex flex-col gap-28">
          {/* Mission Section */}
          <div className="flex flex-col xl:flex-row items-center gap-16">
            <div className="flex-1 space-y-6 text-center xl:text-left">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed font-light">
                To build trust in property rights, unlock land value, and empower citizens through cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-4 mt-8 justify-center xl:justify-start">
                <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <span className="text-sm font-medium">AI-Powered</span>
                </div>
                <div className="px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  <span className="text-sm font-medium">Blockchain-Secured</span>
                </div>
                <div className="px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                  <span className="text-sm font-medium">Citizen-Centric</span>
                </div>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-muted/60 to-muted/30 rounded-3xl border border-border/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <p className="font-bold text-lg">Global Impact</p>
                <p className="text-sm text-muted-foreground text-center">
                  Operating across North America, Africa, and the Caribbean to transform land governance.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-muted/60 to-muted/30 rounded-3xl border border-border/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="p-3 bg-emerald-500/10 rounded-2xl">
                  <Target className="w-8 h-8 text-emerald-400" />
                </div>
                <p className="font-bold text-lg">Proven Results</p>
                <p className="text-sm text-muted-foreground text-center">
                  4M+ titles in progress, 70% faster processing, 50% women ownership parity.
                </p>
              </div>
            </div>
          </div>

          {/* The Challenge Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 bg-gradient-to-r from-muted/40 to-muted/20 rounded-3xl p-12 border border-border/50">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                The Global Challenge
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Traditional land management systems are failing billions worldwide:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Paper-based and fragmented systems
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Vulnerable to fraud and data loss
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Slow and expensive to operate
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Inaccessible to citizens and investors
                </li>
              </ul>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">4M+</div>
                <div className="text-sm text-muted-foreground">Titles in Progress</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-emerald-400 mb-2">70%</div>
                <div className="text-sm text-muted-foreground">Faster Processing</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50%</div>
                <div className="text-sm text-muted-foreground">Women Ownership</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">13K+</div>
                <div className="text-sm text-muted-foreground">Properties Digitized</div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="flex flex-col gap-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Our Technology Pillars
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Combining cutting-edge technologies to create secure, transparent, and efficient land governance systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cpu className="w-10 h-10 text-primary" />,
                  title: "AI & Machine Learning",
                  desc: "Processing 40,000+ pages/hour with intelligent document classification and verification.",
                },
                {
                  icon: <Shield className="w-10 h-10 text-emerald-400" />,
                  title: "Blockchain Security",
                  desc: "Immutable, transparent records with cryptographic proofs and tamper-evident audit trails.",
                },
                {
                  icon: <Zap className="w-10 h-10 text-amber-400" />,
                  title: "Digital Innovation",
                  desc: "End-to-end digital ecosystems for transparent, efficient, and equitable governance.",
                },
                {
                  icon: <Eye className="w-10 h-10 text-cyan-400" />,
                  title: "Transparency",
                  desc: "Public access portals with instant search and full audit trails for all transactions.",
                },
                {
                  icon: <Lock className="w-10 h-10 text-purple-400" />,
                  title: "Security & Trust",
                  desc: "Protecting property rights with robust systems that prevent fraud and data loss.",
                },
                {
                  icon: <Users className="w-10 h-10 text-pink-400" />,
                  title: "Inclusive Design",
                  desc: "Gender-inclusive titling and citizen-centric solutions built into every project.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 bg-gradient-to-br from-muted/40 to-muted/20 rounded-3xl border border-border/50 flex flex-col items-center text-center gap-4 shadow-lg hover:shadow-2xl hover:bg-muted/40 transition-all duration-500 group"
                >
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <p className="font-bold text-xl">{item.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Global Presence */}
          <div className="flex flex-col items-center text-center gap-8">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Global Footprint
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Partnering with governments worldwide to modernize land records and expand property rights across continents.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-full max-w-4xl">
              {[
                { 
                  icon: <MapPin className="w-8 h-8" />, 
                  label: "Africa",
                  highlight: "Zambia, Rwanda, Liberia, Sierra Leone",
                  color: "from-emerald-500/10 to-emerald-500/5"
                },
                { 
                  icon: <Globe className="w-8 h-8" />, 
                  label: "North America",
                  highlight: "USA, Caribbean Nations",
                  color: "from-blue-500/10 to-blue-500/5"
                },
                { 
                  icon: <Landmark className="w-8 h-8" />, 
                  label: "Caribbean",
                  highlight: "St. Kitts, Guyana",
                  color: "from-amber-500/10 to-amber-500/5"
                },
                { 
                  icon: <TrendingUp className="w-8 h-8" />, 
                  label: "Global Expansion",
                  highlight: "Growing worldwide presence",
                  color: "from-purple-500/10 to-purple-500/5"
                },
              ].map((region, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col items-center gap-4 p-8 rounded-3xl border border-border/50 bg-gradient-to-br ${region.color} backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="text-primary">
                    {region.icon}
                  </div>
                  <p className="font-bold text-lg">{region.label}</p>
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    {region.highlight}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}