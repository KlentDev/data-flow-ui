"use client";

import { motion } from "framer-motion";
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Target, Users, Globe, Award, CheckCircle, ArrowRight, TrendingUp, Shield } from "lucide-react";
import { PageTransition } from '@/components/ui/page-transition';

export default function LandTitlingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const programHighlights = [
    {
      icon: Target,
      title: "4 Million Titles",
      description: "Africa's largest systematic land titling project transforming property rights at scale",
      metrics: "7-year program • National coverage",
      features: ["Mass title registration", "Digital transformation", "Legal framework integration"]
    },
    {
      icon: Users,
      title: "Gender Inclusion",
      description: "Groundbreaking 50% women ownership target to build equitable property rights systems",
      metrics: "Gender parity focus • Social impact",
      features: ["Women empowerment", "Community engagement", "Legal awareness"]
    },
    {
      icon: Globe,
      title: "Global Implementation",
      description: "Proven systematic titling methodology deployed across multiple continents and jurisdictions",
      metrics: "3 continents • 6+ countries",
      features: ["Adaptable methodology", "Local context integration", "Capacity building"]
    },
    {
      icon: Shield,
      title: "Secure Digital Titles",
      description: "Blockchain-backed digital titles ensuring permanent, fraud-proof property records",
      metrics: "100% secure • Instant verification",
      features: ["Blockchain security", "Mobile access", "Dispute resolution"]
    }
  ];

  const countryPrograms = [
    { country: "Zambia", scale: "4M titles", timeline: "2020-2027", status: "Active", progress: "35%" },
    { country: "Liberia", scale: "National digitization", timeline: "2022-2025", status: "Active", progress: "60%" },
    { country: "Sierra Leone", scale: "1M titles (World Bank)", timeline: "2024-2026", status: "Planning", progress: "15%" },
    { country: "Rwanda", scale: "National system", timeline: "2019-2021", status: "Completed", progress: "100%" }
  ];

  const programBenefits = [
    "Increased agricultural productivity",
    "Enhanced women's economic empowerment",
    "Reduced land disputes and conflicts",
    "Improved access to credit and loans",
    "Stimulated local economic development",
    "Strengthened governance and transparency"
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
                <Award className="w-4 h-4" />
                <span>Systematic Land Titling</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6"
              >
                Systematic
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#AED59C] to-[#8BC34A] mt-4">
                  Land Titling
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8"
              >
                Large-scale land titling programs that transform paper-based systems into 
                secure, digital property rights for millions of citizens with social equity focus.
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
                { number: '4M+', label: 'Titles Target', icon: Target, description: 'Zambia program' },
                { number: '50%', label: 'Women Ownership', icon: Users, description: 'Gender parity target' },
                { number: '6+', label: 'Countries', icon: Globe, description: 'Global deployment' },
                { number: '100%', label: 'Digital Security', icon: Shield, description: 'Blockchain backed' }
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

        {/* Zambia Spotlight */}
        <section className="py-16 bg-gradient-to-r from-[#AED59C]/15 to-[#8BC34A]/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              className="max-w-5xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Zambia: Africa&apos;s Largest Titling Program
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-6">
                Implementing Africa&apos;s largest systematic land titling project—4 million titles over 7 years, 
                with a groundbreaking target of 50% ownership by women to transform property rights at national scale.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {[
                  { value: '1.2M', label: 'Titles Issued' },
                  { value: '48%', label: 'Women Owners' },
                  { value: '94%', label: 'Satisfaction' },
                  { value: '2027', label: 'Completion' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-[#8BC34A]">{stat.value}</div>
                    <div className="text-sm text-foreground/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Program Highlights */}
        <section ref={ref} className="py-24 bg-foreground/3">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Program Excellence
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Comprehensive titling solutions that combine scale, equity, and security
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {programHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background rounded-3xl p-8 border border-foreground/10 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#AED59C] to-[#8BC34A] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                      <highlight.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                        {highlight.title}
                      </h3>
                      <p className="text-foreground/70 mb-4">
                        {highlight.description}
                      </p>
                      <div className="text-[#8BC34A] font-medium text-sm mb-3">
                        {highlight.metrics}
                      </div>
                      <div className="space-y-2">
                        {highlight.features.map((feature, featureIndex) => (
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

        {/* Global Programs & Benefits */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Country Programs */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
                  Active Programs
                </h3>
                <div className="space-y-4">
                  {countryPrograms.map((program, index) => (
                    <motion.div
                      key={program.country}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-[#AED59C]/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-semibold text-foreground text-lg">{program.country}</div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          program.status === 'Completed' 
                            ? 'bg-green-100 text-green-700' 
                            : program.status === 'Active'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {program.status}
                        </span>
                      </div>
                      <div className="text-sm text-foreground/70 mb-2">{program.scale}</div>
                      <div className="flex justify-between text-xs text-foreground/50">
                        <span>{program.timeline}</span>
                        <span>Progress: {program.progress}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Economic Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
                  Economic & Social Impact
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {programBenefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-foreground/5 border border-foreground/10"
                    >
                      <TrendingUp className="w-5 h-5 text-[#8BC34A] flex-shrink-0" />
                      <span className="text-foreground/80">{benefit}</span>
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
                Launch Your Titling Program
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                Transform property rights at scale with our proven systematic land titling methodology 
                that combines digital innovation with social equity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#AED59C] text-white rounded-xl font-medium hover:bg-[#8BC34A] transition-all duration-300 shadow-lg flex items-center space-x-2"
                >
                  <span>Start Program Assessment</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#AED59C] text-[#8BC34A] rounded-xl font-medium hover:bg-[#AED59C]/10 transition-all duration-300"
                >
                  Download Program Guide
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}