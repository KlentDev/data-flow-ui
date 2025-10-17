"use client";

import { motion } from "framer-motion";
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ArrowRight, Zap, Shield, Search, FileText, Clock, Target, CheckCircle, Cpu } from "lucide-react";
import { PageTransition } from '@/components/ui/page-transition';

export default function DocAIPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Zap,
      title: "High-Speed Processing",
      description: "Process 40,000+ pages per hour with automated classification and indexing",
      metrics: "40K pages/hour • 99.5% accuracy",
      capabilities: ["Batch document processing", "Real-time classification", "Automated workflow routing"]
    },
    {
      icon: Shield,
      title: "Fraud Prevention",
      description: "AI-based recordability checks and rejection automation eliminate title fraud",
      metrics: "Zero fraud incidents • 100% verification",
      capabilities: ["Document authenticity checks", "Signature verification", "Tamper detection"]
    },
    {
      icon: Search,
      title: "Smart Indexing",
      description: "Extracts data from text, handwriting, and stamps with full audit trail",
      metrics: "Multi-format support • Full audit trail",
      capabilities: ["OCR & handwriting recognition", "Stamp and seal detection", "Data validation"]
    },
    {
      icon: Cpu,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning for document understanding and data extraction",
      metrics: "Context-aware processing • Continuous learning",
      capabilities: ["Natural language processing", "Pattern recognition", "Predictive classification"]
    }
  ];

  const deployments = [
    { location: "Tooele County, UT", result: "70% faster recording", status: "Live" },
    { location: "Maryland", result: "50% cost reduction", status: "Implementing" },
    { location: "Missouri", result: "Zero manual errors", status: "Planning" },
    { location: "Ohio", result: "45K pages/day", status: "Live" }
  ];

  const capabilities = [
    "Handwriting recognition for historical documents",
    "Multi-language document processing",
    "Integration with existing registry systems",
    "Blockchain-backed document verification",
    "Real-time processing dashboard",
    "Customizable workflow rules"
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-20">
        {/* Enhanced Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#AED59C]/10 via-background to-[#8BC34A]/5" />
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1.5px, transparent 0)`,
              backgroundSize: '40px 40px',
            }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-[#AED59C]/10 text-[#8BC34A] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <FileText className="w-4 h-4" />
                <span>Document Intelligence Platform</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6"
              >
                DocAI
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8"
              >
                &quot;Turning every document into data.&quot; Launched in 2024, DocAI automates classification, 
                indexing, and verification for land and court records with enterprise-grade AI.
              </motion.p>
            </div>

            {/* Impact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
            >
              {[
                { number: '40,000+', label: 'Pages/Hour', icon: Zap, description: 'Processing capacity' },
                { number: '50-70%', label: 'Faster Recording', icon: Clock, description: 'Efficiency gain' },
                { number: 'Zero', label: 'Fraud Incidents', icon: Shield, description: 'Security record' },
                { number: '99.5%', label: 'Accuracy Rate', icon: Target, description: 'AI precision' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-background rounded-2xl p-6 shadow-lg border border-foreground/10 text-center group hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#AED59C]/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-[#8BC34A]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-heading font-bold text-[#8BC34A] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-foreground/70 font-medium">{stat.label}</div>
                  <div className="text-xs text-foreground/50 mt-1">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={ref} className="py-24 bg-foreground/3">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Enterprise Features
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Advanced AI capabilities that transform document processing for land governance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background rounded-3xl p-8 border border-foreground/10 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#AED59C] to-[#8BC34A] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 mb-4">
                        {feature.description}
                      </p>
                      <div className="text-[#8BC34A] font-medium text-sm mb-3">
                        {feature.metrics}
                      </div>
                      <div className="space-y-2">
                        {feature.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center text-sm text-foreground/60">
                            <CheckCircle className="w-4 h-4 mr-2 text-[#8BC34A] flex-shrink-0" />
                            {capability}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployments & Capabilities */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Active Deployments */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
                  Active Deployments
                </h3>
                <div className="space-y-4">
                  {deployments.map((deployment, index) => (
                    <motion.div
                      key={deployment.location}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center justify-between p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-[#AED59C]/20 transition-all duration-300"
                    >
                      <div>
                        <div className="font-semibold text-foreground">{deployment.location}</div>
                        <div className="text-sm text-foreground/60">{deployment.result}</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        deployment.status === 'Live' 
                          ? 'bg-green-100 text-green-700' 
                          : deployment.status === 'Implementing'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {deployment.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Advanced Capabilities */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
                  Advanced Capabilities
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={capability}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-foreground/5 border border-foreground/10"
                    >
                      <CheckCircle className="w-5 h-5 text-[#8BC34A] flex-shrink-0" />
                      <span className="text-foreground/80">{capability}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#AED59C]/10 to-[#8BC34A]/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Transform Your Document Processing
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                See how DocAI can process 40,000+ pages per hour with 99.5% accuracy and eliminate title fraud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#AED59C] text-white rounded-xl font-medium hover:bg-[#8BC34A] transition-all duration-300 shadow-lg flex items-center space-x-2"
                >
                  <span>Schedule DocAI Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#AED59C] text-[#8BC34A] rounded-xl font-medium hover:bg-[#AED59C]/10 transition-all duration-300"
                >
                  Download Case Study
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}