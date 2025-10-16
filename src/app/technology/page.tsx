"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Cpu, Shield, Zap, Database, Link, Lock, Search, FileText, Cloud, Smartphone, Target, CheckCircle, TrendingUp, Users, Award, Clock} from 'lucide-react';
import { PageTransition } from '@/components/ui/page-transition';

export default function TechnologyPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Enhanced core technologies with real performance metrics
  const coreTechnologies = [
    {
      icon: Cpu,
      title: 'Artificial Intelligence',
      description: 'Advanced machine learning algorithms that automate and optimize land governance processes with enterprise-grade accuracy.',
      features: [
        'Document classification & data extraction',
        'Handwriting and stamp recognition',
        'Automated recordability checks',
        'Boundary detection from aerial imagery',
        'Predictive analytics for land valuation'
      ],
      capabilities: ['40,000 pages/hour processing', '99.5% accuracy rate', 'Multi-language support'],
      performance: '98% reduction in manual processing',
      deployments: ['US Counties', 'Zambia Titling', 'Rwanda System'],
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Immutable distributed ledger technology ensuring data integrity and preventing fraud with cryptographic verification.',
      features: [
        'Cryptographic document verification',
        'Tamper-proof audit trails',
        'Smart contract automation',
        'Decentralized identity management',
        'Timestamped transaction records'
      ],
      capabilities: ['Zero successful fraud attempts', 'Instant verification', 'Military-grade encryption'],
      performance: '100% data integrity guarantee',
      deployments: ['Wyoming State', 'NYC Finance', 'Baltimore Properties'],
    },
    {
      icon: Database,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud platform supporting global operations with high availability and compliance.',
      features: [
        'Multi-region data replication',
        'Disaster recovery systems',
        'Real-time data synchronization',
        'API-first architecture',
        'Compliance with local data laws'
      ],
      capabilities: ['99.9% uptime SLA', 'Global CDN deployment', 'SOC 2 Type II certified'],
      performance: 'Sub-second response times globally',
      deployments: ['3 Continents', '6+ Countries', 'Millions of users'],
    }
  ];

  // Enhanced platform features with integration examples
  const platformFeatures = [
    {
      icon: FileText,
      title: 'Document Intelligence',
      description: 'AI-powered processing of land records, contracts, and legal documents with human-level accuracy',
      capabilities: ['OCR for printed text', 'Handwriting recognition', 'Stamp and seal detection', 'Automated indexing'],
      integration: 'Integrates with existing registry systems',
      impact: '70% faster document processing'
    },
    {
      icon: Search,
      title: 'Smart Search & Analytics',
      description: 'Advanced search capabilities with full-text retrieval and analytical insights for decision support',
      capabilities: ['Natural language queries', 'Fuzzy matching', 'Relationship mapping', 'Trend analysis'],
      integration: 'API access for third-party applications',
      impact: 'Instant property history access'
    },
    {
      icon: Link,
      title: 'API Integration',
      description: 'Seamless integration with existing government systems and third-party services',
      capabilities: ['RESTful APIs', 'Webhook support', 'Bulk data operations', 'Custom integration frameworks'],
      integration: '100+ pre-built connectors',
      impact: 'Weeks instead of months for integration'
    },
    {
      icon: Smartphone,
      title: 'Mobile Accessibility',
      description: 'Cross-platform mobile applications for field agents and citizen access in remote areas',
      capabilities: ['Offline functionality', 'Biometric authentication', 'QR code scanning', 'Digital signatures'],
      integration: 'Works on 2G/3G networks',
      impact: '50% increase in rural access'
    }
  ];

  // Enhanced security features with compliance details
  const securityFeatures = [
    {
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data at rest and in transit with AES-256 standards',
      icon: Lock,
      certification: 'FIPS 140-2 Compliant'
    },
    {
      title: 'Access Control',
      description: 'Role-based permissions and multi-factor authentication with biometric options',
      icon: Shield,
      certification: 'NIST SP 800-63B'
    },
    {
      title: 'Audit Trail',
      description: 'Comprehensive logging of all system activities and changes with blockchain verification',
      icon: FileText,
      certification: 'GDPR Article 30'
    },
    {
      title: 'Compliance',
      description: 'Adherence to international data protection and privacy standards across jurisdictions',
      icon: CheckCircle,
      certification: 'ISO 27001 Certified'
    }
  ];

  // Enhanced implementation stats with real data
  const implementationStats = [
    { 
      number: '40K', 
      label: 'Pages Processed Per Hour', 
      icon: Zap,
      description: 'DocAI maximum capacity',
      trend: 'Industry leading'
    },
    { 
      number: '99.9%', 
      label: 'System Uptime', 
      icon: Cloud,
      description: 'Enterprise SLA guarantee',
      trend: 'Zero downtime'
    },
    { 
      number: '70%', 
      label: 'Process Efficiency Gain', 
      icon: TrendingUp,
      description: 'Average across deployments',
      trend: '8 weeks → 3 days'
    },
    { 
      number: '0', 
      label: 'Security Breaches', 
      icon: Shield,
      description: 'Since platform launch',
      trend: 'Perfect record'
    }
  ];

  // Enhanced integration partners with specific examples
  const integrationPartners = [
    { 
      name: 'Government Registries', 
      description: 'Seamless integration with national land registries and cadastral systems',
      examples: ['Zambia Ministry of Lands', 'Rwanda Land Authority', 'US County Systems']
    },
    { 
      name: 'Payment Systems', 
      description: 'Integration with tax and payment processing systems for revenue collection',
      examples: ['Mobile Money APIs', 'Banking Gateways', 'Government Treasury']
    },
    { 
      name: 'Survey Systems', 
      description: 'Connection with cadastral and surveying tools for accurate mapping',
      examples: ['GIS Platforms', 'Drone Data', 'Satellite Imagery']
    },
    { 
      name: 'Mobile Networks', 
      description: 'Partnerships with telecom providers for rural and remote access',
      examples: ['2G/3G Optimization', 'Offline Sync', 'Low-bandwidth Mode']
    }
  ];

  // Technology adoption benefits
  const adoptionBenefits = [
    {
      benefit: 'Rapid Deployment',
      description: '4-8 week implementation for standard solutions',
      icon: Clock
    },
    {
      benefit: 'Proven Scalability',
      description: 'From single county to national deployment',
      icon: TrendingUp
    },
    {
      benefit: 'Citizen Trust',
      description: 'Transparent systems build public confidence',
      icon: Users
    },
    {
      benefit: 'Future Proof',
      description: 'Regular updates and new feature releases',
      icon: Award
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
              poster="https://via.placeholder.com/1920x1080.png?text=Technology+Hero+Video"
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
              <Cpu className="w-4 h-4" />
              <span>Enterprise Technology</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Advanced Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 mt-2">
                For Modern Governance
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed bg-background/60 backdrop-blur-sm p-6 rounded-2xl"
            >
              MLG combines cutting-edge AI, blockchain, and cloud technologies to create 
              secure, transparent, and efficient land governance systems that scale globally.
            </motion.p>
          </div>
        </section>

        {/* === TECHNOLOGY STATS SECTION === */}
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
                    Proven Performance Metrics
                  </h2>
                  <p className="text-lg text-foreground/70 mb-6">
                    Enterprise-grade technology delivering measurable results and reliable 
                    performance across global deployments.
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
                        Trust Through Advanced Technology
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Our integrated technology stack ensures every land transaction is secure, 
                        transparent, and verifiable while maintaining the highest standards of 
                        data privacy and regulatory compliance.
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
                {implementationStats.map((stat, index) => (
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

        {/* === ADOPTION BENEFITS === */}
        <section className="py-24 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Technology Adoption Benefits
              </h2>
              <p className="text-lg text-foreground/70">
                Rapid implementation with immediate and long-term value
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {adoptionBenefits.map((benefit, index) => (
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

        {/* === CORE TECHNOLOGIES SECTION === */}
        <section ref={ref} className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Core Technology Stack
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Three powerful enterprise technologies working in harmony to revolutionize land governance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {coreTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {tech.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {tech.description}
                    </p>
                    
                    {/* Performance Metric */}
                    <div className="bg-primary/5 rounded-xl p-4 mb-6">
                      <div className="text-sm text-foreground/60 mb-1">Performance Impact</div>
                      <div className="text-lg font-bold text-primary">{tech.performance}</div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-6 flex-grow">
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Key Features:</h4>
                      {tech.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start text-sm text-foreground/70">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Capabilities & Deployments */}
                    <div className="border-t border-border pt-6 space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-3">Performance:</h4>
                        <div className="flex flex-wrap gap-2">
                          {tech.capabilities.map((capability, capIndex) => (
                            <span 
                              key={capIndex}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                            >
                              {capability}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-2">Active Deployments:</h4>
                        <div className="text-xs text-foreground/60">
                          {tech.deployments.join(' • ')}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* === PLATFORM FEATURES SECTION === */}
        <section className="py-24 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Platform Capabilities
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Comprehensive tools and features that make land governance efficient, accessible, and future-proof
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-500 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-foreground/70 mb-4">
                          {feature.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          {feature.capabilities.map((capability, capIndex) => (
                            <div key={capIndex} className="flex items-center text-sm text-foreground/60">
                              <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                              {capability}
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-xs text-foreground/50">
                          <span>{feature.integration}</span>
                          <span className="text-primary font-medium">{feature.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* === SECURITY & INTEGRATION SECTION === */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Security Features */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    Enterprise Security & Compliance
                  </h2>
                  <p className="text-lg text-foreground/70">
                    Military-grade security measures that protect sensitive land records and ensure 
                    regulatory compliance across all global jurisdictions.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {securityFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-foreground/70 mb-2">{feature.description}</p>
                        <div className="text-sm text-primary font-medium">{feature.certification}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Integration Partners */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    Integration Ecosystem
                  </h3>
                  <p className="text-lg text-foreground/70">
                    Designed to work seamlessly with existing government infrastructure and partner 
                    systems worldwide, ensuring smooth digital transformation.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {integrationPartners.map((partner, index) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className="font-semibold text-foreground text-lg mb-2">{partner.name}</h4>
                      <p className="text-foreground/70 text-sm mb-3">{partner.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {partner.examples.map((example, exampleIndex) => (
                          <span 
                            key={exampleIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}