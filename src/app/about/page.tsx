"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Globe, Users, Target, ArrowRight, MapPin, Award, TrendingUp, Lock, Cpu, Zap, FileText, Wallet, Search, Landmark, Building, Scale } from 'lucide-react';
import { PageTransition } from '@/components/ui/page-transition';

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Enhanced core values with technology focus
  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Building immutable, transparent systems that protect property rights and prevent fraud through blockchain technology.',
      color: 'from-[#AED59C] to-[#8BC34A]'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Transforming land governance across North America, Africa, and the Caribbean with scalable, adaptable solutions.',
      color: 'from-[#AED59C] to-[#8BC34A]'
    },
    {
      icon: Users,
      title: 'Citizen Empowerment',
      description: 'Making property rights accessible and transparent for every citizen through user-centric technology design.',
      color: 'from-[#AED59C] to-[#8BC34A]'
    },
    {
      icon: Cpu,
      title: 'AI & Blockchain Innovation',
      description: 'Combining cutting-edge technologies to solve complex land governance challenges efficiently and securely.',
      color: 'from-[#AED59C] to-[#8BC34A]'
    }
  ];

  // Technology pillars
  const technologies = [
    {
      icon: Cpu,
      title: 'Document Intelligence (DocAI)',
      description: 'Processing 40,000 pages/hour with AI-powered classification, verification, and fraud detection.',
      capability: 'Automated record processing'
    },
    {
      icon: Lock,
      title: 'Blockchain Security',
      description: 'Immutable land records and tamper-proof transaction systems with cryptographic verification.',
      capability: 'Tamper-proof records'
    },
    {
      icon: FileText,
      title: 'Digital Registries',
      description: 'End-to-end digital land administration systems that replace paper-based processes.',
      capability: 'Paperless transformation'
    },
    {
      icon: MapPin,
      title: 'Drone & Aerial Mapping',
      description: 'Advanced surveying and boundary detection using VTOL drones and AI image processing.',
      capability: 'Precision mapping'
    }
  ];

  // Updated milestones based on actual MLG achievements
  const milestones = [
    { 
      year: '2018', 
      event: 'MLG Founded', 
      description: 'Vision to revolutionize land governance through AI and blockchain technology',
      icon: Target
    },
    { 
      year: '2019', 
      event: 'Rwanda Ubutaka Launch', 
      description: 'Blockchain land transaction system reducing approval time from 8 weeks to 3 days',
      icon: Zap
    },
    { 
      year: '2020', 
      event: 'Zambia Titling Program', 
      description: '4 million title systematic land titling program with 50% women ownership target',
      icon: MapPin
    },
    { 
      year: '2022', 
      event: 'US County Deployments', 
      description: 'Expanded to Tooele County, Utah and multiple US states with DocAI platform',
      icon: FileText
    },
    { 
      year: '2024', 
      event: 'Global Expansion', 
      description: 'Operating across 3 continents with projects in Zambia, Rwanda, Liberia, Guyana, St. Kitts, Sierra Leone',
      icon: Globe
    }
  ];

  // Enhanced stats with better context
  const stats = [
    { number: '4M+', label: 'Titles in Progress', icon: MapPin, description: 'Zambia systematic titling' },
    { number: '40K', label: 'Pages/Hour', icon: FileText, description: 'DocAI processing speed' },
    { number: '70%', label: 'Time Reduction', icon: TrendingUp, description: 'Faster approvals' },
    { number: '50%', label: 'Women Ownership', icon: Users, description: 'Gender parity target' }
  ];

  // Global projects showcase
  const globalProjects = [
    {
      country: 'Zambia',
      achievement: 'Largest systematic land titling in Africa',
      icon: Target,
      metric: '4M titles over 7 years',
      impact: '50% women ownership target'
    },
    {
      country: 'Rwanda',
      achievement: 'Blockchain land transaction system',
      icon: Zap,
      metric: '8 weeks → 3 days approval',
      impact: 'Ubutaka platform'
    },
    {
      country: 'United States',
      achievement: 'Document Intelligence Platform',
      icon: FileText,
      metric: '40,000 pages/hour processing',
      impact: 'Multiple state deployments'
    },
    {
      country: 'St. Kitts',
      achievement: 'Drone mapping campaign',
      icon: MapPin,
      metric: '89,000+ images captured',
      impact: 'Island-wide cadastral data'
    }
  ];

  return (
    <PageTransition>
      <div ref={containerRef} className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#AED59C]/5 via-background to-[#AED59C]/10" />
          
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: '4rem 4rem',
            }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-[#AED59C]/10 text-[#8BC34A] px-4 py-2 rounded-full text-sm font-medium mb-8 border border-[#AED59C]/20"
                >
                  <Award className="w-4 h-4" />
                  <span>Global Land Governance Leader</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                >
                  Revolutionizing
                  <motion.span 
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-[#AED59C] to-[#8BC34A] mt-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Land Governance
                  </motion.span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-xl text-muted-foreground leading-relaxed mb-8"
                >
                  We combine <strong>AI, blockchain, and digital innovation</strong> to create 
                  secure, transparent, and efficient land governance systems for governments worldwide.
                </motion.p>

                {/* Mission Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 mb-8 text-left"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#AED59C]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-[#8BC34A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Our Mission
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        &quot;To build trust in property rights, unlock land value, and empower citizens through technology.&quot;
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Visual Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 border border-border aspect-[4/5] flex items-center justify-center group">
                  <div className="text-center p-8">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[#AED59C] to-[#8BC34A] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Landmark className="w-10 h-10 text-white" />
                    </motion.div>
                    <p className="text-muted-foreground text-base font-medium mb-2">AI + Blockchain + Digital Innovation</p>
                    <p className="text-muted-foreground/70 text-sm">Secure, Transparent, Efficient Systems</p>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-8 right-8 w-14 h-14 bg-background/80 rounded-xl border border-border flex items-center justify-center backdrop-blur-sm shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <FileText className="w-6 h-6 text-[#8BC34A]" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-8 left-8 w-12 h-12 bg-background/80 rounded-lg border border-border flex items-center justify-center backdrop-blur-sm shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <Shield className="w-5 h-5 text-[#8BC34A]" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                  className="text-center group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#AED59C]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-[#8BC34A]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
                  <div className="text-xs text-muted-foreground/60 mt-1">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Powered by cutting-edge AI and blockchain technologies that transform land governance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                    {/* Hover Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-[#AED59C] to-[#8BC34A] opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Animated Icon */}
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#AED59C] to-[#8BC34A] flex items-center justify-center mb-6 shadow-lg"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <tech.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {tech.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                      {tech.description}
                    </p>
                    <div className="text-[#8BC34A] font-semibold text-sm">
                      {tech.capability}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Impact Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Global Footprint
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transforming land governance across continents with measurable impact and scalable solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {globalProjects.map((project, index) => (
                <motion.div
                  key={project.country}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-500 h-full flex flex-col"
                >
                  <div className="w-12 h-12 bg-[#AED59C]/20 rounded-xl flex items-center justify-center mb-4">
                    <project.icon className="w-6 h-6 text-[#8BC34A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.country}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 flex-grow">
                    {project.achievement}
                  </p>
                  <div className="space-y-2">
                    <div className="text-[#8BC34A] font-semibold text-sm">
                      {project.metric}
                    </div>
                    <div className="text-xs text-muted-foreground/60">
                      {project.impact}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The principles that guide our mission to transform land governance worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                    {/* Hover Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Animated Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <value.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 relative bg-muted/30">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From visionary startup to global leader in digital land governance transformation
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#AED59C] via-[#AED59C]/50 to-transparent" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-8 mb-12 last:mb-0 group relative"
                >
                  {/* Year Indicator */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#AED59C] to-[#8BC34A] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow bg-card rounded-2xl p-6 border border-border group-hover:shadow-md transition-all duration-300 flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#AED59C]/20 rounded-xl flex items-center justify-center shadow-sm">
                        <milestone.icon className="w-6 h-6 text-[#8BC34A]" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {milestone.event}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#AED59C]/10 to-[#AED59C]/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Be part of the global movement to transform land governance and empower communities through technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#AED59C] text-white rounded-xl font-medium hover:bg-[#8BC34A] transition-all duration-300 shadow-lg flex items-center space-x-3"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#AED59C] text-[#8BC34A] rounded-xl font-medium hover:bg-[#AED59C]/10 transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}