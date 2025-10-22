"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState, FC } from "react";
import {
  Cpu,
  Shield,
  BarChart3,
  Globe,
  Activity,
  Server,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

// 🧠 Feature type for better typing
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  label: string;
  gradient: string;
  iconColor: string;
  stats: string;
}

// 🧩 Card data
const features: Feature[] = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Process millions of data points per second with adaptive, low-latency AI computation.",
    label: "Analytics",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    stats: "2.5M/sec",
  },
  {
    icon: Globe,
    title: "Global Scalability",
    description:
      "Deployed across 52+ regions with intelligent routing and edge optimization.",
    label: "Infrastructure",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
    stats: "52+ Regions",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Zero-trust protocols, SOC2 compliance, and 256-bit encryption built for enterprise scale.",
    label: "Security",
    gradient: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-400",
    stats: "256-bit",
  },
  {
    icon: Activity,
    title: "Live Monitoring",
    description:
      "Predict, visualize, and track system health through live observability dashboards.",
    label: "Monitoring",
    gradient: "from-red-500/20 to-pink-500/20",
    iconColor: "text-red-400",
    stats: "24/7",
  },
  {
    icon: Cpu,
    title: "AI Insights",
    description:
      "Transform raw data into actionable intelligence with ML-driven predictions.",
    label: "Intelligence",
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
    stats: "AI-Powered",
  },
  {
    icon: Server,
    title: "High Availability",
    description:
      "Ensure 99.99% uptime through redundant multi-region clusters and auto-healing nodes.",
    label: "Reliability",
    gradient: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-400",
    stats: "99.99%",
  },
];

export default function FeaturesDeepDive() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="features"
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



      {/* 🧩 Content Layout */}
      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 self-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <Cpu className="w-4 h-4" />
            Product Features
          </div>

          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            Deep Dive into{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Platform Capabilities
            </span>
          </h2>

          <p
            className={cn(
              "text-lg leading-relaxed max-w-xl",
              isDark ? "text-gray-300" : "text-gray-600"
            )}
          >
            Explore the architecture powering our real-time global data ecosystem —
            blending performance, scalability, and security for enterprise-grade operations.
          </p>
        </motion.div>

        {/* RIGHT CONTENT (Aligned Top) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 self-start"
        >
          {features.map((card, index) => (
            <BentoCard key={card.title} card={card} index={index} isDark={isDark} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────── */
/* 🧩 BentoCard */
interface BentoCardProps {
  card: Feature;
  index: number;
  isDark: boolean;
}

const BentoCard: FC<BentoCardProps> = ({ card, index, isDark }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    el.addEventListener("mousemove", handle);
    return () => el.removeEventListener("mousemove", handle);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className={cn(
        "group relative rounded-2xl p-6 border backdrop-blur-xl flex flex-col justify-between cursor-pointer transition-all duration-500",
        isDark
          ? "bg-blue-950/20 border-blue-900/50 hover:border-blue-500/40 hover:bg-blue-950/40"
          : "bg-white/80 border-gray-200 hover:border-blue-500/40 hover:bg-white/90 shadow-[0_8px_20px_-6px_rgba(59,130,246,0.1)]"
      )}
      style={{
        background: hover
          ? `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(59,130,246,0.08) 0%, transparent 60%)`
          : undefined,
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn("p-3 rounded-xl backdrop-blur-sm", `bg-gradient-to-br ${card.gradient}`)}
        >
          <card.icon className={cn("w-5 h-5 lg:w-6 lg:h-6", card.iconColor)} />
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border bg-white/70 dark:bg-white/5 border-white/10 text-foreground/80">
          {card.stats}
        </span>
      </div>

      <div className="flex-1">
        <h3
          className={cn(
            "text-lg lg:text-xl font-bold mb-2 leading-tight",
            isDark
              ? "text-white group-hover:text-blue-400"
              : "text-gray-900 group-hover:text-blue-600"
          )}
        >
          {card.title}
        </h3>
        <p
          className={cn(
            "text-sm lg:text-base",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          {card.description}
        </p>
      </div>

      <span
        className={cn(
          "text-xs font-semibold mt-4 inline-block px-3 py-1.5 rounded-full border backdrop-blur-sm",
          isDark
            ? "bg-white/5 border-white/10 text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-950/20"
            : "bg-white/80 border-gray-200 text-gray-600 group-hover:text-blue-600 group-hover:bg-blue-50"
        )}
      >
        {card.label}
      </span>
    </motion.div>
  );
};