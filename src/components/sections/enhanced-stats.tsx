"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "next-themes";
import {
  Database,
  Zap,
  Globe,
  Activity,
  Server,
  Network,
  BarChart3,
} from "lucide-react";
import { Counter } from "@/components/ui/counter";
import { cn } from "@/lib/utils";

export function EnhancedStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const stats = [
    { value: 2.3, suffix: "M", label: "Data Points/Second", icon: Activity },
    { value: 99.9, suffix: "%", label: "Uptime SLA", icon: Server },
    { value: 48, suffix: "", label: "Global Regions", icon: Globe },
    { value: 15.4, suffix: "M", label: "Active Data Streams", icon: Database },
  ];

  const performanceMetrics = [
    { value: "<100", suffix: "ms", label: "Average Latency", icon: Zap },
    { value: 256, suffix: "-bit", label: "Encryption", icon: Shield },
    { value: 99.99, suffix: "%", label: "Data Accuracy", icon: BarChart3 },
    { value: 24, suffix: "/7", label: "Real-time Monitoring", icon: Network },
  ];

  return (
    <section
      ref={ref}
      id="stats"
      className={cn(
        "relative flex items-center justify-center overflow-hidden py-24 transition-colors duration-700",
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



      {/* 💡 Stats Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-6"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={cn(
              "text-4xl md:text-5xl font-heading font-bold tracking-tight",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            Powering{" "}
            <span
              className={cn(
                "bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
              )}
            >
              Real-time Analytics
            </span>{" "}
            Globally
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className={cn(
              "text-lg max-w-2xl mx-auto mt-4 leading-relaxed",
              isDark ? "text-gray-300" : "text-gray-600"
            )}
          >
            Delivering enterprise-grade data processing with unmatched speed,
            reliability, and global scale.
          </motion.p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={cn(
                "relative group p-6 rounded-2xl border backdrop-blur-xl text-center transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.3)]",
                isDark
                  ? "border-blue-900/50 bg-blue-950/30 hover:bg-blue-950/50 hover:border-blue-500/40"
                  : "border-gray-200 bg-white/70 hover:bg-white/90 hover:border-blue-500/40"
              )}
            >
              <div className="relative z-10 flex justify-center mb-4">
                <div
                  className={cn(
                    "p-3 rounded-xl transition-colors duration-300",
                    isDark ? "bg-blue-900/30" : "bg-blue-500/10"
                  )}
                >
                  <stat.icon
                    className={cn(
                      "w-6 h-6 transition-colors duration-300",
                      isDark
                        ? "text-blue-400 group-hover:text-blue-300"
                        : "text-blue-600 group-hover:text-blue-500"
                    )}
                  />
                </div>
              </div>

              <div
                className={cn(
                  "relative z-10 text-2xl md:text-3xl font-bold transition-colors duration-300",
                  isDark
                    ? "text-white group-hover:text-blue-300"
                    : "text-gray-900 group-hover:text-blue-600"
                )}
              >
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
              </div>

              <p
                className={cn(
                  "relative z-10 text-xs mt-2 uppercase tracking-wide font-semibold leading-tight",
                  isDark ? "text-gray-400" : "text-gray-500"
                )}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mb-8"
        >
          <h3
            className={cn(
              "text-2xl font-bold mb-2",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            Performance Metrics
          </h3>
          <p className={isDark ? "text-gray-400" : "text-gray-500"}>
            Enterprise-grade reliability and speed
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {performanceMetrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.1 }}
              className={cn(
                "relative group p-4 rounded-xl border text-center transition-all duration-300",
                isDark
                  ? "border-blue-900/40 bg-blue-950/40 hover:bg-blue-950/70"
                  : "border-gray-200 bg-white/60 hover:bg-white/80"
              )}
            >
              <div className="flex justify-center mb-2">
                <metric.icon
                  className={cn(
                    "w-5 h-5 transition-colors duration-300",
                    isDark
                      ? "text-blue-400 group-hover:text-blue-300"
                      : "text-blue-500/80 group-hover:text-blue-500"
                  )}
                />
              </div>

              <div
                className={cn(
                  "text-lg font-semibold transition-colors duration-300",
                  isDark
                    ? "text-white group-hover:text-blue-300"
                    : "text-gray-900 group-hover:text-blue-600"
                )}
              >
                {metric.value}
                {metric.suffix}
              </div>

              <p
                className={cn(
                  "text-xs mt-1 font-medium leading-tight",
                  isDark ? "text-gray-400" : "text-gray-600"
                )}
              >
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <p
            className={cn(
              "text-sm italic",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            Processing over{" "}
            <span
              className={cn(
                "font-semibold",
                isDark ? "text-blue-400" : "text-blue-600"
              )}
            >
              15 million data streams
            </span>{" "}
            across 48 global regions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* 🛡 Local Shield Icon (for Encryption metric) */
const Shield = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);
