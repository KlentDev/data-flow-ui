"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Cpu, Shield, Zap, Cloud, Database } from "lucide-react";

export function TechnologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const technologies = [
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description: "Machine learning models for document processing, classification, and fraud detection.",
      capabilities: ["40K pages/hour processing", "Smart indexing", "Pattern recognition"]
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable distributed ledger technology for tamper-proof land records.",
      capabilities: ["Cryptographic proofs", "Smart contracts", "Audit trails"]
    },
    {
      icon: Zap,
      title: "Document Intelligence",
      description: "Advanced OCR and NLP for extracting data from complex land documents.",
      capabilities: ["Handwriting recognition", "Stamp detection", "Data validation"]
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      description: "Scalable infrastructure for global deployment and real-time access.",
      capabilities: ["Global accessibility", "Real-time updates", "Auto-scaling"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced analytics for insights into land use patterns and governance efficiency.",
      capabilities: ["Predictive analytics", "Usage insights", "Performance metrics"]
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Enterprise-grade security protocols to protect sensitive land data.",
      capabilities: ["End-to-end encryption", "Access controls", "Threat detection"]
    }
  ];

  return (
    <section
      id="technology"
      ref={ref}
      className="relative py-20 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-[#AED59C]/10 text-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 border border-[#AED59C]/20"
          >
            <Cpu className="w-4 h-4" />
            <span>Our Technology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            Powered by Cutting-Edge
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#AED59C] to-[#8BC34A] mt-2">
              Technology Stack
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            We combine AI, blockchain, and cloud technologies to create secure, 
            scalable, and intelligent land governance solutions.
          </motion.p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-500 h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-[#AED59C]/20 rounded-xl flex items-center justify-center mb-4">
                <tech.icon className="w-6 h-6 text-[#8BC34A]" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {tech.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {tech.description}
              </p>

              <div className="space-y-2">
                {tech.capabilities.map((capability, capabilityIndex) => (
                  <div key={capabilityIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-[#8BC34A] rounded-full mr-3 flex-shrink-0" />
                    {capability}
                  </div>
                ))}
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
              Discuss technology integration
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}