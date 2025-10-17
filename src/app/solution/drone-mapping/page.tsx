"use client";

import { motion } from "framer-motion";
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Map, Camera, Scan, Target, CheckCircle, ArrowRight, Zap } from "lucide-react";

export default function DroneMappingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const capabilities = [
    {
      icon: Map,
      title: "VTOL Drone Survey",
      description: "Vertical Take-Off and Landing drone-based survey and mapping capabilities for difficult terrain",
      metrics: "5cm accuracy • All terrain access",
      features: ["VTOL technology", "Remote area access", "No runway required"]
    },
    {
      icon: Camera,
      title: "High-Resolution Aerial Imagery",
      description: "Professional-grade aerial photography for precise cadastral mapping and analysis",
      metrics: "89,000+ images • Sub-inch resolution",
      features: ["Multi-spectral imaging", "3D modeling", "Orthomosaic maps"]
    },
    {
      icon: Scan,
      title: "AI Boundary Detection",
      description: "Advanced AI-based image processing and automated boundary detection with centimeter precision",
      metrics: "95% automation • Real-time processing",
      features: ["Machine learning algorithms", "Auto-boundary detection", "Change detection"]
    },
    {
      icon: Target,
      title: "Cadastral Mapping",
      description: "Professional land parcel mapping for registration, planning, and dispute resolution",
      metrics: "100% coverage • Legal accuracy",
      features: ["Parcel delineation", "Legal boundary mapping", "Dispute resolution support"]
    }
  ];

  const deployments = [
    { location: "St. Kitts & Nevis", result: "89,000+ images captured", status: "Completed" },
    { location: "Guyana", result: "16,000+ km² mapped", status: "Completed" },
    { location: "Zambia Rural", result: "Rapid land assessment", status: "Active" },
    { location: "Liberia", result: "National cadastre", status: "Planning" }
  ];

  const benefits = [
    "90% faster than traditional surveying",
    "Centimeter-level accuracy for legal boundaries",
    "Cost-effective for large-scale mapping",
    "Safe access to difficult terrain",
    "Digital twin creation for planning",
    "Integration with GIS systems"
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
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
              <Map className="w-4 h-4" />
              <span>Aerial Mapping Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6"
            >
              Drone & Aerial
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#AED59C] to-[#8BC34A] mt-4">
                Mapping
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8"
            >
              &quot;The sky is our survey tool.&quot; Advanced drone and aerial imagery services for fast, accurate land registration and infrastructure planning.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section ref={ref} className="py-24 bg-foreground/3">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Professional aerial mapping solutions for accurate land administration and planning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-3xl p-8 border border-foreground/10 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#AED59C] to-[#8BC34A] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-foreground/70 mb-4">{capability.description}</p>
                    <div className="text-[#8BC34A] font-medium text-sm mb-3">{capability.metrics}</div>
                    <div className="space-y-2">
                      {capability.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-foreground/60">
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

      {/* Deployments & Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-heading font-bold text-foreground mb-8">Global Deployments</h3>
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
                      deployment.status === 'Completed' 
                        ? 'bg-green-100 text-green-700' 
                        : deployment.status === 'Active'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {deployment.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-heading font-bold text-foreground mb-8">Key Benefits</h3>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-foreground/5 border border-foreground/10"
                  >
                    <Zap className="w-5 h-5 text-[#8BC34A] flex-shrink-0" />
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
              Map Your Territory from the Sky
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              Discover how our drone mapping solutions can deliver centimeter-accurate land data 90% faster than traditional methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#AED59C] text-white rounded-xl font-medium hover:bg-[#8BC34A] transition-all duration-300 shadow-lg flex items-center space-x-2"
              >
                <span>Schedule Mapping Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#AED59C] text-[#8BC34A] rounded-xl font-medium hover:bg-[#AED59C]/10 transition-all duration-300"
              >
                View Sample Maps
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
