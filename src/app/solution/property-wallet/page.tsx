"use client";

import { motion } from "framer-motion";
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Smartphone, Shield, FileCheck, Users, Zap, CheckCircle, ArrowRight, Globe, Lock } from "lucide-react";
import { PageTransition } from '@/components/ui/page-transition';

export default function PropertyWalletPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Secure mobile access to verified land records anytime, anywhere with offline capability",
      metrics: "24/7 access • Offline mode",
      features: ["Mobile app", "Offline functionality", "Multi-language support"]
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Military-grade blockchain security ensuring tamper-proof ownership credentials",
      metrics: "Zero fraud • Instant verification",
      features: ["Cryptographic proof", "Immutable records", "Digital signatures"]
    },
    {
      icon: FileCheck,
      title: "Digital Verification",
      description: "Instant verification for title transfers, taxes, mortgages, and legal transactions",
      metrics: "Real-time verification • API access",
      features: ["QR code verification", "API integration", "Legal compliance"]
    },
    {
      icon: Users,
      title: "Citizen Empowerment",
      description: "Democratizing property rights with transparent, accessible digital ownership",
      metrics: "User-friendly • Accessible design",
      features: ["Citizen education", "Transparent processes", "Dispute resolution"]
    }
  ];

  const deployments = [
    { region: "Zambia Pilot", users: "50,000+ citizens", status: "Live", features: ["Mobile titles", "Offline access"] },
    { region: "Rwanda National", users: "National rollout", status: "Live", features: ["Integration with Ubutaka"] },
    { region: "Liberia Implementation", users: "Rolling out", status: "Implementing", features: ["Rural access focus"] },
    { region: "US Counties", users: "Planning phase", status: "Planning", features: ["Mobile verification"] }
  ];

  const walletFeatures = [
    "Biometric authentication for security",
    "QR code sharing for instant verification",
    "Tax payment integration",
    "Mortgage and loan application support",
    "Property transfer functionality",
    "Dispute resolution portal",
    "Document storage and sharing",
    "Multi-language interface"
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
                <Smartphone className="w-4 h-4" />
                <span>Digital Property Management</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6"
              >
                Property
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#AED59C] to-[#8BC34A] mt-4">
                  Wallet™
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8"
              >
                &quot;Empowering citizens to own and manage their digital titles.&quot; 
                Secure mobile access to verified land records with blockchain-backed integrity and instant verification.
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
                { number: '50K+', label: 'Active Users', icon: Users, description: 'Zambia pilot' },
                { number: '24/7', label: 'Access', icon: Zap, description: 'Mobile availability' },
                { number: 'Zero', label: 'Security Breaches', icon: Shield, description: 'Blockchain security' },
                { number: '80%', label: 'Time Saved', icon: FileCheck, description: 'Transaction speed' }
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

        {/* Benefits Section */}
        <section ref={ref} className="py-24 bg-foreground/3">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Citizen Empowerment
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Transforming property ownership with secure, accessible digital solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background rounded-3xl p-8 border border-foreground/10 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#AED59C] to-[#8BC34A] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-foreground/70 mb-4">
                        {benefit.description}
                      </p>
                      <div className="text-[#8BC34A] font-medium text-sm mb-3">
                        {benefit.metrics}
                      </div>
                      <div className="space-y-2">
                        {benefit.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-foreground/60">
                            <CheckCircle className="w-4 h-4 mr-2 text-[#8BC34A] flex-shrink-0" />
                            {feature}
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

        {/* Deployments & Features */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Global Deployments */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
                  Global Rollout
                </h3>
                <div className="space-y-4">
                  {deployments.map((deployment, index) => (
                    <motion.div
                      key={deployment.region}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-[#AED59C]/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-semibold text-foreground">{deployment.region}</div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          deployment.status === 'Live' 
                            ? 'bg-green-100 text-green-700' 
                            : deployment.status === 'Implementing'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {deployment.status}
                        </span>
                      </div>
                      <div className="text-sm text-foreground/70 mb-3">{deployment.users}</div>
                      <div className="flex flex-wrap gap-2">
                        {deployment.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="px-2 py-1 bg-[#AED59C]/10 text-[#8BC34A] text-xs rounded-full border border-[#AED59C]/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Wallet Features */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
                  Advanced Features
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {walletFeatures.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-foreground/5 border border-foreground/10"
                    >
                      <Lock className="w-5 h-5 text-[#8BC34A] flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
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
                Empower Your Citizens
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                Bring secure, mobile property management to your community with 
                Property Wallet™ and transform how citizens interact with their property rights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#AED59C] text-white rounded-xl font-medium hover:bg-[#8BC34A] transition-all duration-300 shadow-lg flex items-center space-x-2"
                >
                  <span>Request Wallet Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#AED59C] text-[#8BC34A] rounded-xl font-medium hover:bg-[#AED59C]/10 transition-all duration-300"
                >
                  Download App Preview
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}