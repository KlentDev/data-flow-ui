"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Check, Star, Zap, Shield, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

// ---- Shared Glow Card ----
function GlowCard({
  children,
  className = "",
  glowColor = "rgba(59,130,246,0.25)",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMouse({ x, y });
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "relative overflow-hidden border rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 cursor-pointer shadow-sm group backdrop-blur-xl",
        isDark
          ? "bg-blue-950/20 border-blue-900/50 hover:border-blue-500/40 hover:bg-blue-950/40"
          : "bg-white/80 border-gray-200 hover:border-blue-500/40 hover:bg-white/90 shadow-[0_8px_20px_-6px_rgba(59,130,246,0.1)]",
        className
      )}
      style={{
        background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, ${glowColor} 0%, ${
          isDark ? "rgba(17,24,39,0.85)" : "rgba(255,255,255,0.9)"
        } 80%)`,
      }}
    >
      {children}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, ${glowColor}, transparent 60%)`,
        }}
      />
    </motion.div>
  );
}

// ---- Pricing Section ----
export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started with analytics.",
      price: "$99",
      period: "/month",
      features: [
        "Up to 10,000 data points/month",
        "Basic dashboards",
        "7-day data retention",
        "Standard support",
        "2 user seats",
        "Email alerts",
      ],
      cta: "Start Free Trial",
      icon: Database,
      glowColor: "rgba(59,130,246,0.15)",
      popular: false,
    },
    {
      name: "Professional",
      description: "Advanced features for growing businesses.",
      price: "$299",
      period: "/month",
      features: [
        "Up to 100,000 data points/month",
        "Advanced analytics & AI insights",
        "30-day retention",
        "Priority support",
        "10 user seats",
        "Custom dashboards",
        "API access",
        "SMS & email alerts",
      ],
      cta: "Start Free Trial",
      icon: Zap,
      glowColor: "rgba(59,130,246,0.25)",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Full platform capabilities for large organizations.",
      price: "Custom",
      period: "",
      features: [
        "Unlimited data points",
        "Enterprise-grade security",
        "Custom data retention",
        "24/7 dedicated support",
        "Unlimited seats",
        "Custom integrations",
        "SLA guarantee",
        "On-premise deployment",
      ],
      cta: "Contact Sales",
      icon: Shield,
      glowColor: "rgba(59,130,246,0.15)",
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      ref={ref}
      className={cn(
        "relative py-24 md:py-32 overflow-hidden transition-colors duration-700",
        isDark ? "bg-[#293289]" : "bg-white"
      )}
    >
{/* Ambient Background */}
<div className="absolute inset-0 overflow-hidden">
  {/* Radial Gradient Overlay */}
  <div
    className={cn(
      "absolute inset-0 opacity-40",
      isDark
        ? "bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)]"
        : "bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]"
    )}
  />

  {/* Floating Particles */}
  {[...Array(12)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 rounded-full bg-blue-400/40"
      style={{ left: `${8 + i * 7}%`, top: `${10 + (i % 6) * 13}%` }}
      animate={{ y: [0, -25, 0], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
    />
  ))}

  {/* Large Blurred Circles - All Four Corners (Matching Radial Gradient Color) */}
  <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl" />
  <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl" />
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl" />
  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl" />
</div>


      {/* 🧩 Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border shadow-sm mb-6",
              isDark
                ? "bg-white/10 text-white border-white/20"
                : "bg-blue-500/15 text-blue-600 border-blue-500/30"
            )}
          >
            <Star
              className={cn(
                "w-4 h-4",
                isDark ? "text-white" : "text-blue-500"
              )}
            />
            <span>Simple Pricing</span>
          </div>

          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold mb-4",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              DataFlow Plan
            </span>
          </h2>
          <p
            className={cn(
              "text-lg max-w-2xl mx-auto",
              isDark ? "text-white/80" : "text-gray-700"
            )}
          >
            Start with a 14-day free trial. No credit card required. Scale as you
            grow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <GlowCard
              key={index}
              glowColor={plan.glowColor}
              className={cn(
                "relative h-full",
                plan.popular &&
                  "border-blue-500/40 shadow-lg shadow-blue-500/20 scale-105 z-10"
              )}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              {/* Card Content */}
              <div className="flex flex-col h-full text-center">
                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4",
                    isDark ? "bg-blue-500/10" : "bg-blue-100"
                  )}
                >
                  <plan.icon
                    className={cn(
                      "w-6 h-6",
                      isDark ? "text-blue-400" : "text-blue-600"
                    )}
                  />
                </div>

                {/* Title + Description */}
                <h3
                  className={cn(
                    "text-2xl font-bold mb-1",
                    isDark ? "text-blue-100" : "text-gray-900"
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "text-sm mb-6",
                    isDark ? "text-blue-200/80" : "text-gray-600"
                  )}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div
                  className={cn(
                    "text-4xl font-bold mb-6",
                    isDark ? "text-blue-100" : "text-gray-900"
                  )}
                >
                  {plan.price}
                  <span
                    className={cn(
                      "text-lg font-normal",
                      isDark ? "text-blue-300" : "text-gray-600"
                    )}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="text-left space-y-2 mb-8 mx-auto max-w-xs flex-grow">
                  {plan.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2"
                    >
                      <Check
                        className={cn(
                          "w-4 h-4",
                          isDark ? "text-blue-400" : "text-blue-500"
                        )}
                      />
                      <span
                        className={cn(
                          "text-sm",
                          isDark ? "text-blue-200/90" : "text-gray-700"
                        )}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href={plan.name === "Enterprise" ? "/contact" : "/signup"}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    "inline-flex items-center justify-center w-full rounded-full border px-6 py-3 font-semibold transition-all duration-300 mt-auto",
                    plan.popular
                      ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:shadow-blue-500/40"
                      : isDark
                      ? "bg-blue-500/10 border-blue-500/30 text-blue-200 hover:bg-blue-500/20"
                      : "bg-blue-500/10 border-blue-500/30 text-blue-700 hover:bg-blue-500/20"
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
