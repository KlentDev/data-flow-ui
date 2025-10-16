"use client";

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { MapPin, Users, Clock, Target, Award, TrendingUp, ArrowRight, Globe, FileText, Shield, Landmark, Cpu, Zap, Building, CheckCircle, Mail } from 'lucide-react';
import { PageTransition } from '@/components/ui/page-transition';

export default function GlobalPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Enhanced international projects with detailed metrics
  const projects = [
    {
      country: 'Zambia',
      flag: '🇿🇲',
      title: 'Systematic Land Titling',
      description: 'Implementing Africa’s largest systematic land titling project—4 million titles over 7 years with 50% women ownership target.',
      achievement: 'Gender-inclusive titling program',
      impact: '4M+ titles in progress',
      status: 'Active',
      timeline: '2020-2027',
      teamSize: '50+ specialists',
      progress: '35%',
      color: 'from-primary to-primary/70',
      technologies: ['AI-Powered Titling', 'Blockchain Security', 'Mobile Verification'],
      icon: Target,
      metrics: [
        { value: '1.2M', label: 'Titles Issued' },
        { value: '48%', label: 'Women Owners' },
        { value: '94%', label: 'Satisfaction' }
      ]
    },
    {
      country: 'Rwanda',
      flag: '🇷🇼',
      title: 'Ubutaka Blockchain System',
      description: 'Built blockchain land transaction system reducing approval time from 8 weeks to 3 days with full transparency.',
      achievement: '70% reduction in processing time',
      impact: 'National scale deployment',
      status: 'Completed',
      timeline: '2019-2021',
      teamSize: '30+ developers',
      progress: '100%',
      color: 'from-primary to-primary/70',
      technologies: ['Blockchain', 'Smart Contracts', 'Digital Signatures'],
      icon: Zap,
      metrics: [
        { value: '3 Days', label: 'Approval Time' },
        { value: '70%', label: 'Time Saved' },
        { value: '100%', label: 'Transparency' }
      ]
    },
    {
      country: 'Liberia',
      flag: '🇱🇷',
      title: 'Digital Records Transformation',
      description: 'Digitizing land records to expand ownership rights and inclusivity across the nation.',
      achievement: 'Complete digital transformation',
      impact: 'Enhanced transparency & access',
      status: 'Active',
      timeline: '2022-2025',
      teamSize: '25+ analysts',
      progress: '60%',
      color: 'from-primary to-primary/70',
      technologies: ['Document Digitization', 'Data Migration', 'Public Access Portals'],
      icon: FileText,
      metrics: [
        { value: '500K', label: 'Records Digitized' },
        { value: '85%', label: 'Accuracy Rate' },
        { value: '24/7', label: 'Access' }
      ]
    },
    {
      country: 'Guyana',
      flag: '🇬🇾',
      title: 'National Cadastral Mapping',
      description: 'Developed national cadastral datasets for 16,000+ km² to support comprehensive land administration.',
      achievement: 'Complete national coverage',
      impact: '16,000+ km² mapped',
      status: 'Completed',
      timeline: '2021-2023',
      teamSize: '20+ GIS specialists',
      progress: '100%',
      color: 'from-primary to-primary/70',
      technologies: ['Aerial Mapping', 'GIS Integration', 'Boundary Detection'],
      icon: MapPin,
      metrics: [
        { value: '16K+', label: 'km² Mapped' },
        { value: '99.8%', label: 'Accuracy' },
        { value: '6 Mos', label: 'Ahead of Schedule' }
      ]
    },
    {
      country: 'St. Kitts',
      flag: '🇰🇳',
      title: 'Drone Mapping Campaign',
      description: 'Executed the island’s largest drone-based mapping campaign for accurate land data and planning.',
      achievement: 'High-resolution aerial data',
      impact: '89,000+ images captured',
      status: 'Completed',
      timeline: '2022',
      teamSize: '15+ surveyors',
      progress: '100%',
      color: 'from-primary to-primary/70',
      technologies: ['VTOL Drones', 'AI Image Processing', '3D Modeling'],
      icon: Globe,
      metrics: [
        { value: '89K+', label: 'Images' },
        { value: '5cm', label: 'Resolution' },
        { value: '100%', label: 'Island Coverage' }
      ]
    },
    {
      country: 'Sierra Leone',
      flag: '🇸🇱',
      title: 'World Bank Partnership',
      description: 'Partnering with the World Bank to issue 1 million digital titles with blockchain verification.',
      achievement: 'International development collaboration',
      impact: '1M digital titles target',
      status: 'Planning',
      timeline: '2024-2026',
      teamSize: '35+ team',
      progress: '15%',
      color: 'from-primary to-primary/70',
      technologies: ['Digital Titles', 'Blockchain Verification', 'Mobile Wallets'],
      icon: Building,
      metrics: [
        { value: '$50M', label: 'Funding' },
        { value: '1M', label: 'Title Target' },
        { value: '2026', label: 'Completion' }
      ]
    }
  ];

  // Enhanced US projects with ROI metrics
  const usProjects = [
    {
      location: 'Tooele County, Utah',
      initiative: 'Document Intelligence Platform',
      achievement: 'First adopter of DocAI system processing 40,000 pages/hour',
      impact: '50-70% faster recording times',
      costSavings: '$250K annually',
      timeline: '6 months',
      icon: FileText,
      technologies: ['DocAI', 'Automated Indexing', 'Fraud Prevention'],
      metrics: ['40K pages/hour', '70% faster', 'Zero fraud']
    },
    {
      location: 'Wyoming',
      initiative: 'Blockchain Land Data Preservation',
      achievement: 'Nation’s first blockchain land data preservation system',
      impact: 'Immutable record keeping',
      costSavings: 'Eliminated audit costs',
      timeline: '4 months',
      icon: Shield,
      technologies: ['Blockchain', 'Data Integrity', 'Cryptographic Proofs'],
      metrics: ['100% secure', 'Instant verification', 'Zero disputes']
    },
    {
      location: 'New York City',
      initiative: 'Department of Finance PoC',
      achievement: 'Blockchain proof-of-concept with NYC Department of Finance',
      impact: 'Modernization initiative',
      costSavings: 'Pilot funded',
      timeline: '3 months',
      icon: Landmark,
      technologies: ['Blockchain PoC', 'Smart Contracts', 'Process Optimization'],
      metrics: ['8 weeks → 3 days', '90% efficiency', 'Scalable']
    },
    {
      location: 'Baltimore, Maryland',
      initiative: 'Vacant Properties Digitization',
      achievement: 'Recording 13,000 vacant properties on blockchain to attract investment',
      impact: 'Title cleanup & investment ready',
      costSavings: '$5M investment potential',
      timeline: '8 months',
      icon: MapPin,
      technologies: ['Property Digitization', 'Blockchain Registry', 'Investment Portal'],
      metrics: ['13K properties', '$5M investment', '100% clean titles']
    }
  ];

  // Enhanced global stats with trends
  const globalStats = [
    { 
      number: '6+', 
      label: 'Countries Served', 
      icon: Globe, 
      description: 'Across 3 continents',
      trend: '+2 this year'
    },
    { 
      number: '4M+', 
      label: 'Titles in Progress', 
      icon: Target, 
      description: 'Zambia land titling',
      trend: '35% completed'
    },
    { 
      number: '50%', 
      label: 'Women Ownership Target', 
      icon: Users, 
      description: 'Gender parity focus',
      trend: '48% achieved'
    },
    { 
      number: '70%', 
      label: 'Processing Time Reduction', 
      icon: Clock, 
      description: 'Rwanda case study',
      trend: 'Industry record'
    }
  ];

  const expansionStates = [
    { name: 'Maryland', status: 'Q1 2025', type: 'DocAI Deployment' },
    { name: 'Missouri', status: 'Q2 2025', type: 'Full Platform' },
    { name: 'Ohio', status: 'Q2 2025', type: 'County Partnership' },
    { name: 'Florida', status: 'Q3 2025', type: 'Statewide Rollout' },
    { name: 'California', status: 'Q4 2025', type: 'Tech Innovation' },
    { name: 'Utah', status: 'Q1 2025', type: 'Expansion' }
  ];

  // Technology impact metrics
  const technologyImpact = [
    { technology: 'AI Document Processing', impact: '40,000 pages/hour', icon: Cpu },
    { technology: 'Blockchain Security', impact: 'Zero fraud incidents', icon: Shield },
    { technology: 'Drone Mapping', impact: '89,000+ images', icon: MapPin },
    { technology: 'Mobile Verification', impact: 'Instant citizen access', icon: Users }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-24">
        {/* === HERO SECTION === */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          {/* Video Background */}
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
            </video>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/70 to-background/80" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20"
            >
              <Globe className="w-4 h-4" />
              <span>Global Impact</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Transforming Land Governance
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 mt-2">
                Across Continents
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed bg-background/60 backdrop-blur-sm p-6 rounded-2xl"
            >
              Operating across 3 continents, MLG delivers proven AI and blockchain solutions 
              that transform land governance with measurable results and sustainable impact.
            </motion.p>
          </div>
        </section>

        {/* === GLOBAL STATS SECTION === */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
              {/* LEFT: Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    Global Reach, Local Impact
                  </h2>
                  <p className="text-lg text-foreground/70 mb-6">
                    From Africa to the Americas, we&apos;re delivering transformative land governance 
                    solutions with proven results and scalable impact.
                  </p>
                </div>

                {/* Mission Highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-primary/15 border border-primary/25 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Proven Results Across Continents
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        From Zambia&apos;s 4M-title program to US county modernization—delivering 
                        70% efficiency gains and 100% security with blockchain technology.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT: Stats Grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                {globalStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 group text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-foreground/50 mb-1">{stat.description}</div>
                    <div className="text-xs text-primary font-semibold">{stat.trend}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* === TECHNOLOGY IMPACT SECTION === */}
        <section className="py-24 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    Technology-Driven Results
                  </h2>
                  <p className="text-lg text-foreground/70">
                    Measurable impact delivered through cutting-edge AI and blockchain solutions 
                    that transform land governance systems worldwide.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {technologyImpact.map((tech, index) => (
                    <motion.div
                      key={tech.technology}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <tech.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{tech.technology}</h3>
                      <p className="text-primary font-medium">{tech.impact}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl p-8 aspect-video flex items-center justify-center border border-primary/20">
                  <div className="text-center">
                    <Globe className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-foreground/70 text-lg font-medium">
                      Global Land Governance Innovation
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* === INTERNATIONAL PROJECTS SECTION === */}
        <section ref={ref} className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                International Deployments
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed bg-background/60 backdrop-blur-sm p-6 rounded-2xl">
                Transforming land governance across Africa and the Caribbean with scalable, 
                secure, and sustainable solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.country}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-foreground/10">
                      <div 
                        className={`h-full bg-gradient-to-r ${project.color} transition-all duration-1000`}
                        style={{ width: project.progress }}
                      />
                    </div>
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{project.flag}</span>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {project.country}
                          </h3>
                          <div className="flex items-center text-xs text-foreground/50">
                            <Clock className="w-3 h-3 mr-1" />
                            {project.timeline}
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-br ${project.color} text-white`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <project.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground">
                        {project.title}
                      </h4>
                    </div>
                    
                    <p className="text-foreground/70 leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Quick Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-sm font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-foreground/60">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Team & Progress */}
                    <div className="flex items-center justify-between text-xs text-foreground/50 border-t border-foreground/10 pt-3">
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {project.teamSize}
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {project.progress} complete
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* === US LEADERSHIP SECTION === */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center mb-16">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    U.S. Technology Leadership
                  </h2>
                  <p className="text-xl text-foreground/70 leading-relaxed">
                    Transforming County and City Governance Nationwide with AI + Blockchain Innovation
                  </p>
                </div>

                <div className="bg-primary/15 border border-primary/25 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Industry Recognition</h3>
                      <p className="text-foreground/70 text-sm">Award-winning solutions deployed across multiple states</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl p-8 aspect-video flex items-center justify-center border border-primary/20">
                  <div className="text-center">
                    <Building className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-foreground/70 text-lg font-medium">
                      US Government Partnerships
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* US Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {usProjects.map((project, index) => (
                <motion.div
                  key={project.location}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden">
                    {/* ROI Badge */}
                    <div className="absolute top-4 right-4 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      ROI: {project.costSavings}
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {project.location}
                        </h3>
                        <div className="flex items-center text-foreground/60 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          United States • {project.timeline}
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-foreground mb-3">
                      {project.initiative}
                    </h4>
                    
                    <div className="space-y-3 text-foreground/70 mb-4">
                      <div className="flex items-start text-sm">
                        <Target className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                        {project.achievement}
                      </div>
                      <div className="flex items-start text-sm">
                        <TrendingUp className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                        {project.impact}
                      </div>
                    </div>

                    {/* Quick Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center bg-primary/5 rounded-lg py-2">
                          <div className="text-xs font-semibold text-primary">{metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Expansion Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="mt-16 bg-primary/15 border border-primary/25 rounded-2xl p-8 max-w-5xl mx-auto backdrop-blur-sm"
            >
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  2025 U.S. National Expansion
                </h3>
                <p className="text-lg text-foreground/80 mb-8">
                  Bringing Document Intelligence Platform (DocAI) and blockchain solutions to new states with proven ROI
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {expansionStates.map((state, index) => (
                    <motion.div
                      key={state.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="bg-background rounded-2xl p-4 text-center border border-border hover:shadow-md transition-all duration-300 group hover:border-primary/30"
                    >
                      <div className="text-lg font-bold text-foreground mb-2">{state.name}</div>
                      <div className="text-sm text-primary font-medium mb-1">{state.status}</div>
                      <div className="text-xs text-foreground/60">{state.type}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}