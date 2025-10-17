"use client";

import { motion, useInView, easeOut } from "framer-motion";
import { useRef } from "react";
import { 
  MapPin, Users, Clock, Target, Award, Globe, 
  FileText, Shield, Landmark, Cpu, Zap, Building
} from "lucide-react";

export default function GlobalPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const simpleAnimate = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const globalStats = [
    { value: 6, suffix: "+", label: "Countries Served", icon: Globe, detail: "Across 3 continents" },
    { value: 4, suffix: "M+", label: "Titles in Progress", icon: Target, detail: "Zambia land titling" },
    { value: 50, suffix: "%", label: "Women Ownership Target", icon: Users, detail: "Gender parity focus" },
    { value: 70, suffix: "%", label: "Processing Time Reduction", icon: Clock, detail: "Rwanda case study" },
  ];

  const internationalProjects = [
    { icon: Target, title: "Zambia - Systematic Land Titling", description: "Implementing Africa's largest systematic land titling project—4 million titles over 7 years with 50% women ownership target.", impact: "4M+ titles in progress, 48% women ownership", color: "from-blue-500 to-cyan-400" },
    { icon: Zap, title: "Rwanda - Ubutaka Blockchain", description: "Built blockchain land transaction system reducing approval time from 8 weeks to 3 days with full transparency.", impact: "70% reduction in processing time", color: "from-emerald-500 to-green-400" },
    { icon: FileText, title: "Liberia - Digital Records", description: "Digitizing land records to expand ownership rights and inclusivity across the nation with complete digital transformation.", impact: "500K+ records digitized, 85% accuracy", color: "from-purple-500 to-pink-400" },
    { icon: MapPin, title: "Guyana - Cadastral Mapping", description: "Developed national cadastral datasets for 16,000+ km² to support comprehensive land administration.", impact: "16,000+ km² mapped, 99.8% accuracy", color: "from-amber-500 to-orange-400" },
    { icon: Globe, title: "St. Kitts - Drone Mapping", description: "Executed the island's largest drone-based mapping campaign for accurate land data and planning.", impact: "89,000+ images captured, 100% coverage", color: "from-red-500 to-rose-400" },
    { icon: Building, title: "Sierra Leone - World Bank Partnership", description: "Partnering with the World Bank to issue 1 million digital titles with blockchain verification.", impact: "1M digital titles target, $50M funding", color: "from-indigo-500 to-purple-400" },
  ];

  const usProjects = [
    { icon: FileText, title: "Document Intelligence Platform", description: "First adopter of DocAI system processing 40,000 pages/hour with 50-70% faster recording times.", impact: "40K pages/hour, 70% faster processing" },
    { icon: Shield, title: "Blockchain Data Preservation", description: "Nation's first blockchain land data preservation system ensuring immutable record keeping.", impact: "100% secure, zero disputes" },
    { icon: Landmark, title: "NYC Finance Proof-of-Concept", description: "Blockchain proof-of-concept with NYC Department of Finance for process modernization.", impact: "8 weeks → 3 days approval" },
    { icon: MapPin, title: "Baltimore Vacant Properties", description: "Recording 13,000 vacant properties on blockchain to attract investment and clean up titles.", impact: "13K properties, $5M investment potential" },
    { icon: Cpu, title: "Multi-State Expansion", description: "Bringing Document Intelligence Platform to Maryland, Missouri, Ohio, Florida, and California.", impact: "2025 national rollout" },
    { icon: Award, title: "Industry Recognition", description: "Award-winning solutions deployed across multiple states with proven ROI and efficiency gains.", impact: "Multiple industry awards" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } } : {}}
    >
      <main className="min-h-screen bg-background text-foreground">
        {/* === HERO SECTION === */}
        <section className="relative flex items-center justify-center min-h-[80vh] overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="https://via.placeholder.com/1920x1080.png?text=Global+Impact+Hero+Video"
            >
              <source src="/video/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-primary/20 to-background/80 backdrop-blur-[1px]" />
          </div>

          <motion.div
            {...simpleAnimate}
            className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: easeOut } }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-foreground px-6 py-3 rounded-full text-base font-medium border border-white/20 mb-8"
            >
              <Globe className="w-5 h-5" />
              <span>Global Impact & Reach</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
            >
              Transforming Land Governance Worldwide
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: easeOut } }}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed bg-background/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
            >
              Operating across 3 continents, MLG delivers proven AI and blockchain solutions that transform land governance with measurable results and sustainable impact for governments and citizens.
            </motion.p>
          </motion.div>
        </section>

        {/* === GLOBAL STATS SECTION === */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-emerald-500/5">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div {...simpleAnimate} className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Global Reach & Impact
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Delivering transformative land governance solutions across continents with proven results and scalable impact
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {globalStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: easeOut } }}
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
          </div>
        </section>

        {/* === INTERNATIONAL PROJECTS === */}
        <section ref={ref} className="py-24 bg-gradient-to-b from-background to-background/80">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div {...simpleAnimate} className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                International Deployments
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transforming land governance across Africa and the Caribbean with scalable, secure, and sustainable solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internationalProjects.map((project, i) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: easeOut } }}
                    className="h-full"
                  >
                    <div className={`p-8 bg-gradient-to-br from-muted/40 to-muted/20 border border-border/50 rounded-3xl hover:shadow-2xl hover:scale-105 hover:bg-muted/40 transition-all duration-500 group flex flex-col h-full`}>
                      <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 leading-tight">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">{project.description}</p>
                      <div className="text-xs bg-primary/5 text-muted-foreground px-4 py-3 rounded-xl border border-primary/20 font-medium">
                        {project.impact}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === US PROJECTS === */}
        <section className="py-24 bg-gradient-to-r from-primary/5 to-emerald-500/10">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div {...simpleAnimate} className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                U.S. Technology Leadership
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transforming County and City Governance Nationwide with AI + Blockchain Innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {usProjects.map((project, i) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: easeOut } }}
                    className="h-full"
                  >
                    <div className="p-8 bg-background border border-border/50 rounded-3xl backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 group flex flex-col h-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-center mb-4">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">{project.description}</p>
                      <div className="text-center">
                        <p className="text-primary text-sm font-semibold">{project.impact}</p>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Global Mission</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Whether you&apos;re a government agency, international organization, or technology partner, join us in transforming land governance worldwide with proven AI and blockchain solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <button className="px-8 py-4 bg-white text-primary rounded-2xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                    Partner With Us <Globe className="w-5 h-5" />
                  </button>
                </a>
                <a href="/solution">
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-semibold hover:bg-white/10 transition-colors">
                    Explore Our Solutions
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
