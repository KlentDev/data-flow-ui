"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Mail,
  Globe,
  Building,
  Shield,
  Zap,
  Cpu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Database,
  Cloud,
  BarChart3,
  Users,
} from "lucide-react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    { name: "Real-time Analytics", href: "#features" },
    { name: "Global Data Platform", href: "#features" },
    { name: "AI Insights Engine", href: "#features" },
    { name: "Enterprise Security", href: "#features" },
    { name: "API Integration", href: "#integrations" },
  ];

  const company = [
    { name: "About DataFlow", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact Us", href: "#contact" },
  ];

  const technologies = [
    { icon: Cpu, name: "AI & Machine Learning" },
    { icon: Database, name: "Real-time Processing" },
    { icon: Cloud, name: "Cloud Infrastructure" },
    { icon: Shield, name: "Enterprise Security" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "San Francisco, CA", href: "#" },
    { icon: Mail, text: "hello@dataflow.ai", href: "mailto:hello@dataflow.ai" },
    { icon: Globe, text: "www.dataflow.ai", href: "https://dataflow.ai" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-[#293289] text-white border-t border-blue-500/20"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(59,130,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Floating particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  DataFlow
                </h2>
                <p className="text-xs text-white/60">AI Data Intelligence Platform</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Powering real-time global data intelligence with AI-driven analytics, 
              enterprise-grade security, and unmatched scalability for modern businesses.
            </p>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60">
                Powered By
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    className="flex items-center gap-2 text-xs text-white/70 hover:text-blue-400 transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                      <tech.icon className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="leading-tight">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Products</h3>
            <ul className="space-y-3">
              {products.map((product, i) => (
                <motion.li
                  key={product.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(product.href)}
                    className="text-white/70 hover:text-blue-400 flex items-center text-sm transition-all duration-200 group w-full text-left"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {product.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {company.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-white/70 hover:text-blue-400 flex items-center text-sm transition-all duration-200 group w-full text-left"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, i) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 text-white/70 hover:text-blue-400 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-200">
                    <contact.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  title={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/20 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-white/60">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center lg:text-left"
          >
            © {new Date().getFullYear()} DataFlow AI. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-6 flex-wrap justify-center"
          >
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Cookie Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Security</a>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 text-center max-w-2xl mx-auto"
        >
          <p className="text-xs text-white/50 italic leading-relaxed">
            Transforming how businesses harness data intelligence — making real-time analytics, 
            AI-driven insights, and global scalability accessible to organizations worldwide.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}