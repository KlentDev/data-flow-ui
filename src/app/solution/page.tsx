"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { FileText, Wallet, Search, Map, Target, ArrowRight, CheckCircle, Zap, Shield, Users, Globe, Cpu, Building, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { PageTransition } from '@/components/ui/page-transition';

export default function SolutionPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Enhanced solutions with ROI metrics and implementation details
  const solutions = [
    {
      icon: FileText,
      title: 'Document Intelligence (DocAI)',
      description: 'Advanced AI platform automating classification, indexing, and verification for land and court records with enterprise-grade security.',
      features: ['40,000+ pages/hour processing', 'AI-based recordability checks & fraud detection', 'Smart indexing, redaction & data linking', 'Blockchain-backed preservation', 'Full audit trail & analytics'],
      href: '/solutions/docai',
      stats: ['40K', 'pages/hour'],
      deployments: ['Tooele County, UT', 'Maryland', 'Missouri', 'Ohio', 'Florida', 'California'],
      roi: '6-12 months',
      implementation: '4-8 weeks',
      metrics: [
        { value: '70%', label: 'Faster Processing' },
        { value: '99.9%', label: 'Accuracy' },
        { value: 'Zero', label: 'Fraud' }
      ]
    },
    {
      icon: Wallet,
      title: 'Property Wallet™',
      description: 'Secure mobile access to verified land records with blockchain-based ownership credentials.',
      features: ['Blockchain-based ownership credentials', 'Digital verification for transactions', 'Mobile access platform', 'Offline capability', 'Multi-language support'],
      href: '/solutions/property-wallet',
      stats: ['1M+', 'Users Targeted'],
      deployments: ['Zambia Pilot', 'Rwanda National', 'Liberia Implementation'],
      roi: '8-18 months',
      implementation: '6-12 weeks',
      metrics: [
        { value: '80%', label: 'Time Saved' },
        { value: '24/7', label: 'Access' },
        { value: 'Secure', label: 'Verification' }
      ]
    },
    {
      icon: Search,
      title: 'Smart Search Portals',
      description: 'Internal & public-facing search with full-text AI retrieval and advanced filtering capabilities powered by machine learning.',
      features: ['Full-text AI retrieval', 'Advanced filters & legal descriptions', 'Integrated paywall monetization', 'County-branded interfaces', 'API access & analytics'],
      href: '/solutions/search-portals',
      stats: ['<1s', 'Search Speed'],
      deployments: ['Multiple US Counties', 'Zambia National', 'Rwanda Integration'],
      roi: '3-6 months',
      implementation: '2-4 weeks',
      metrics: [
        { value: '95%', label: 'Satisfaction' },
        { value: '+$50K', label: 'Revenue' },
        { value: 'Instant', label: 'Access' }
      ]
    },
    {
      icon: Map,
      title: 'Drone & Aerial Mapping',
      description: 'VTOL drone-based survey and mapping with AI-based image processing and boundary detection for rapid cadastral mapping.',
      features: ['VTOL drone-based survey', 'AI-based image processing', 'Boundary detection technology', '5cm resolution accuracy', '3D modeling & GIS integration'],
      href: '/solutions/drone-mapping',
      stats: ['89K+', 'Images'],
      deployments: ['St. Kitts National', 'Guyana 16,000km²', 'Zambia Rural Areas'],
      roi: '12-24 months',
      implementation: '2-6 months',
      metrics: [
        { value: '90%', label: 'Time Saved' },
        { value: '5cm', label: 'Accuracy' },
        { value: '100%', label: 'Coverage' }
      ]
    },
    {
      icon: Target,
      title: 'Systematic Land Titling',
      description: 'Large-scale digital titling programs transforming paper-based systems into secure property rights with gender-inclusive approaches.',
      features: ['Gender-inclusive titling programs', 'Mass-scale title registration', 'Equity-focused implementation', 'Mobile field verification', 'Community engagement tools'],
      href: '/solutions/land-titling',
      stats: ['4M+', 'Titles'],
      deployments: ['Zambia National', 'World Bank Programs', 'Multi-country Expansion'],
      roi: '18-36 months',
      implementation: '12-24 months',
      metrics: [
        { value: '50%', label: 'Women Target' },
        { value: '4M', label: 'Titles' },
        { value: '7 Years', label: 'Program' }
      ]
    }
  ];

  // Enhanced results with real data
  const results = [
    { 
      metric: '70%', 
      description: 'Reduction in processing time', 
      icon: Zap,
      context: 'Rwanda: 8 weeks → 3 days'
    },
    { 
      metric: '50-70%', 
      description: 'Faster recording times', 
      icon: Clock,
      context: 'US County deployments'
    },
    { 
      metric: '50%', 
      description: 'Women ownership target', 
      icon: Users,
      context: 'Zambia gender parity'
    },
    { 
      metric: 'Zero', 
      description: 'Title fraud incidents', 
      icon: Shield,
      context: 'Blockchain security'
    }
  ];

  // Enhanced global impact with detailed metrics
  const globalImpact = [
    {
      country: 'Zambia',
      description: 'Africa\'s largest systematic land titling project',
      metric: '4M titles over 7 years',
      icon: Target,
      progress: '35% complete',
      team: '50+ specialists'
    },
    {
      country: 'Rwanda',
      description: 'Blockchain land transaction system',
      metric: '8 weeks → 3 days approval',
      icon: Zap,
      progress: '100% deployed',
      team: '30+ developers'
    },
    {
      country: 'Baltimore',
      description: 'Vacant properties digitization',
      metric: '13,000 properties on blockchain',
      icon: Building,
      progress: 'Investment ready',
      team: 'Implementation team'
    }
  ];

  // Technology integration benefits
  const integrationBenefits = [
    {
      benefit: 'Unified Data Ecosystem',
      description: 'Seamless integration across all solutions',
      icon: Cpu
    },
    {
      benefit: 'Blockchain Security Layer',
      description: 'End-to-end cryptographic protection',
      icon: Shield
    },
    {
      benefit: 'Scalable Architecture',
      description: 'From single county to national deployment',
      icon: TrendingUp
    }
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
              poster="https://via.placeholder.com/1920x1080.png?text=Solutions+Hero+Video"
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
              <Target className="w-4 h-4" />
              <span>End-to-End Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Comprehensive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 mt-2">
                Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed bg-background/60 backdrop-blur-sm p-6 rounded-2xl"
            >
              MLG combines AI-powered data intelligence with blockchain-backed integrity 
              to deliver comprehensive digital land governance solutions that build trust, 
              unlock economic value, and empower citizens worldwide.
            </motion.p>
          </div>
        </section>

        {/* === RESULTS SECTION === */}
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
                    Proven Results & Impact
                  </h2>
                  <p className="text-lg text-foreground/70 mb-6">
                    Our solutions deliver measurable improvements in efficiency, security, 
                    and accessibility across global deployments.
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
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Integrated Digital Ecosystem
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Each solution seamlessly integrates into a unified platform, creating transparent, 
                        efficient, and equitable governance systems with measurable ROI and proven security.
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
                {results.map((result, index) => (
                  <motion.div
                    key={result.description}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 group text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <result.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      {result.metric}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">{result.description}</div>
                    <div className="text-xs text-foreground/50">{result.context}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* === INTEGRATION BENEFITS === */}
        <section className="py-24 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Seamless Integration Benefits
              </h2>
              <p className="text-lg text-foreground/70">
                Unified platform delivering maximum value through interconnected solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {integrationBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.benefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 text-center border border-border hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.benefit}</h3>
                  <p className="text-foreground/60 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* === GLOBAL IMPACT SECTION === */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Proven Global Impact
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Transforming land governance across continents with measurable, scalable results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {globalImpact.map((impact, index) => (
                <motion.div
                  key={impact.country}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-500 h-full">
                    <div className="flex items-center gap-3 mb-4 justify-center">
                      <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                        <impact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-xl font-bold text-primary">{impact.country}</div>
                    </div>
                    <div className="text-sm text-foreground/70 mb-3">{impact.description}</div>
                    <div className="text-lg font-semibold text-foreground mb-2">{impact.metric}</div>
                    <div className="flex justify-between text-xs text-foreground/50">
                      <span>{impact.progress}</span>
                      <span>{impact.team}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* === SOLUTIONS GRID SECTION === */}
        <section ref={ref} className="py-24 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Comprehensive Solution Suite
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                End-to-end technologies addressing every aspect of modern land governance, 
                delivering measurable ROI and enterprise-grade security
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={solution.href}>
                    <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-500 h-full flex flex-col cursor-pointer">
                      {/* Header with Icon and Metrics */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <solution.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{solution.stats[0]}</div>
                          <div className="text-sm text-foreground/60">{solution.stats[1]}</div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">
                        {solution.description}
                      </p>
                      
                      {/* Quick Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {solution.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center bg-primary/5 rounded-lg py-2">
                            <div className="text-xs font-semibold text-primary">{metric.value}</div>
                            <div className="text-xs text-foreground/60">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Features List */}
                      <div className="space-y-3 mb-6">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start text-foreground/70 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Deployment & ROI */}
                      <div className="flex items-center justify-between text-xs text-foreground/50 mb-4">
                        <div className="flex items-center">
                          <Globe className="w-3 h-3 mr-1" />
                          {solution.deployments.length} deployments
                        </div>
                        <div className="text-primary font-medium">{solution.roi} ROI</div>
                      </div>
                      
                      {/* Arrow Indicator */}
                      <div className="mt-auto opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 flex items-center gap-2 text-primary font-medium">
                        <span>Explore solution</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}