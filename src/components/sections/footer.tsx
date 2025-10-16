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
} from "lucide-react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    { name: "Document Intelligence (DocAI)", href: "#products" },
    { name: "Property Wallet", href: "#products" },
    { name: "Smart Search Portals", href: "#products" },
    { name: "Drone Mapping Services", href: "#products" },
    { name: "Blockchain Security", href: "#products" },
  ];

  const company = [
    { name: "About MLG", href: "#about" },
    { name: "Global Impact", href: "#global" },
    { name: "Case Studies", href: "#global" },
    { name: "Contact Us", href: "#contact" },
  ];

  const technologies = [
    { icon: Cpu, name: "AI & Machine Learning" },
    { icon: Shield, name: "Blockchain Security" },
    { icon: Zap, name: "Digital Innovation" },
    { icon: Building, name: "Government Systems" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Salt Lake City, Utah", href: "#" },
    { icon: Mail, text: "info@mediciland.com", href: "mailto:info@mediciland.com" },
    { icon: Globe, text: "www.mediciland.com", href: "https://mediciland.com" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#020C28] via-[#010A1F] to-[#000817] text-white border-t border-white/10"
    >
      {/* Subtle glow gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-sm">MLG</span>
              </div>
              <span className="text-xl font-bold">Medici Land Governance</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Revolutionizing land governance through cutting-edge AI, blockchain,
              and digital innovation. Building trust in property rights worldwide.
            </p>

            {/* Technologies */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60">
                Powered By
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    className="flex items-center gap-2 text-xs text-white/70 hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    <tech.icon className="w-3 h-3 text-primary" />
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution, i) => (
                <motion.li
                  key={solution.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <a
                    href={solution.href}
                    className="text-white/70 hover:text-primary flex items-center text-sm transition-colors duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {solution.name}
                  </a>
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
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-primary flex items-center text-sm transition-colors duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.name}
                  </a>
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
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, i) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-200">
                    <contact.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            © {new Date().getFullYear()} Medici Land Governance. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-6"
          >
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </motion.div>
        </div>

        {/* Mission */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 text-center text-xs text-white/50 italic max-w-2xl mx-auto"
        >
          Our mission continues — to make property rights accessible, transparent, and verifiable for every citizen on Earth.
        </motion.p>
      </div>
    </footer>
  );
}
