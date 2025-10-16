"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  MapPin,
  Mail,
  Globe,
  Send,
  CheckCircle,
  Target,
  Landmark,
} from "lucide-react";
import { PageTransition } from "@/components/ui/page-transition";

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactInfo = [
    {
      icon: Mail,
      label: "General Inquiries",
      value: "info@mediciland.com",
      href: "mailto:info@mediciland.com",
      description: "For general questions and information",
    },
    {
      icon: Mail,
      label: "Partnerships",
      value: "partnerships@mediciland.com",
      href: "mailto:partnerships@mediciland.com",
      description: "Government & enterprise partnerships",
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: "Salt Lake City, Utah",
      description: "Global technology innovation center",
    },
    {
      icon: Globe,
      label: "Global Operations",
      value: "3 Continents",
      description: "North America, Africa, Caribbean",
    },
  ];

  const keyServices = [
    "Digital Land Registries",
    "AI Document Processing",
    "Blockchain Security",
    "Drone Mapping",
    "Systematic Titling",
    "Smart Search Portals",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (!formState.organization.trim())
      newErrors.organization = "Organization is required";
    if (!formState.message.trim() || formState.message.length < 10)
      newErrors.message = "Please provide your message (min. 10 characters)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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
              poster="https://via.placeholder.com/1920x1080.png?text=Contact+Hero+Video"
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
              <span>Get in Touch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Let&apos;s Transform
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 mt-2">
                Land Governance
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed bg-background/60 backdrop-blur-sm p-6 rounded-2xl"
            >
              Ready to modernize your land administration systems? Our experts
              can help you implement proven AI and blockchain solutions.
            </motion.p>
          </div>
        </section>

        {/* === CONTACT SECTION === */}
        <section ref={ref} className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
              {/* LEFT: Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="space-y-10"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-3 text-foreground">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-foreground/70">
                    Connect with our team to discuss how we can transform your
                    land governance systems.
                  </p>
                </div>

                {/* Contact Channels */}
                <div className="space-y-5">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-background/60 backdrop-blur-sm hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.label}
                        </h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground/80">{item.value}</p>
                        )}
                        <p className="text-sm text-foreground/60">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Key Services */}
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-primary" />
                    Our Solutions
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {keyServices.map((s, i) => (
                      <motion.div
                        key={s}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                        className="flex items-center gap-2 p-3 rounded-xl border border-border bg-background/40 hover:bg-primary/5 transition"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm font-medium text-foreground/80">
                          {s}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-24"
              >
                <div className="bg-background border border-border rounded-2xl p-8 shadow-lg">
                  {/* Added professional header above form */}
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Send Us a Message
                    </h3>
                    <p className="text-foreground/70">
                      Tell us about your project requirements and we&apos;ll get back 
                      to you with a customized solution.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">
                        Message Sent!
                      </h3>
                      <p className="text-foreground/70 mb-6">
                        Thank you for reaching out! Our team will contact you
                        within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormState({
                            name: "",
                            email: "",
                            organization: "",
                            message: "",
                          });
                        }}
                        className="px-6 py-3 border border-primary text-primary rounded-xl font-medium hover:bg-primary/10 transition"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-background transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                            errors.name ? "border-red-500" : "border-border"
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 mt-2">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-background transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                            errors.email ? "border-red-500" : "border-border"
                          }`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-2">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="organization"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Organization *
                        </label>
                        <input
                          id="organization"
                          name="organization"
                          value={formState.organization}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-background transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                            errors.organization
                              ? "border-red-500"
                              : "border-border"
                          }`}
                          placeholder="Your organization or department"
                        />
                        {errors.organization && (
                          <p className="text-xs text-red-500 mt-2">
                            {errors.organization}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          How can we help? *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formState.message}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-background transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none ${
                            errors.message ? "border-red-500" : "border-border"
                          }`}
                          placeholder="Tell us about your challenges..."
                        />
                        {errors.message && (
                          <p className="text-xs text-red-500 mt-2">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>

                      <p className="text-sm text-center text-foreground/60">
                        We typically respond within 24 hours
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}