"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Globe, MapPin, Users, TrendingUp, Target } from "lucide-react";

export function GlobalImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const projects = [
    {
      country: "Zambia",
      flag: "🇿🇲",
      title: "Systematic Land Titling",
      description: "4 million titles over 7 years with 50% women ownership target.",
      status: "Active",
      progress: "35%"
    },
    {
      country: "Rwanda",
      flag: "🇷🇼",
      title: "Blockchain System",
      description: "Reduced approval time from 8 weeks to 3 days with full transparency.",
      status: "Completed",
      progress: "100%"
    },
    {
      country: "Liberia",
      flag: "🇱🇷",
      title: "Digital Records",
      description: "Digitizing land records to expand ownership rights and inclusivity.",
      status: "Active",
      progress: "60%"
    },
    {
      country: "United States",
      flag: "🇺🇸",
      title: "Document Intelligence",
      description: "Deploying AI-powered document processing across multiple states.",
      status: "Expanding",
      progress: "45%"
    },
    {
      country: "St. Kitts",
      flag: "🇰🇳",
      title: "Drone Mapping",
      description: "Island-wide aerial mapping with 89,000+ images captured.",
      status: "Completed",
      progress: "100%"
    },
    {
      country: "Sierra Leone",
      flag: "🇸🇱",
      title: "World Bank Partnership",
      description: "1 million digital titles with blockchain verification.",
      status: "Planning",
      progress: "15%"
    }
  ];

  const stats = [
    { number: "4M+", label: "Titles in Progress", icon: Target },
    { number: "6+", label: "Countries", icon: Globe },
    { number: "70%", label: "Time Reduction", icon: TrendingUp },
    { number: "50%", label: "Women Target", icon: Users }
  ];

  return (
    <section
      id="global-impact"
      ref={ref}
      className="relative py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-[#AED59C]/10 text-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 border border-[#AED59C]/20"
          >
            <Globe className="w-4 h-4" />
            <span>Global Impact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            Transforming Land Governance
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#AED59C] to-[#8BC34A] mt-2">
              Worldwide
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            From Africa to the Americas, we deliver proven solutions that create 
            secure, transparent, and efficient land administration systems.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 bg-[#AED59C]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-[#8BC34A]" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.country}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-500 h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{project.flag}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.country}
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      {project.status}
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 bg-[#AED59C]/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#8BC34A]" />
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-foreground mb-3">
                {project.title}
              </h4>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Progress */}
              <div className="mb-2">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Progress</span>
                  <span>{project.progress}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#AED59C] to-[#8BC34A] h-2 rounded-full transition-all duration-1000"
                    style={{ width: project.progress }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/contact"
            className="inline-flex items-center space-x-2 text-[#8BC34A] font-semibold text-base group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="border-b border-transparent hover:border-[#8BC34A] transition-all duration-300">
              Partner with us
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}