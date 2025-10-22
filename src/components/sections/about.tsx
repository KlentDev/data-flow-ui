"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState, FC } from "react";
import {
  Globe,
  Shield,
  Activity,
  BarChart3,
  Server,
  Eye,
  Zap,
  TrendingUp,
  GitBranch,
  ShieldCheck,
  Workflow,
  Cloud,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface BentoCardData {
  icon: FC<{ className?: string }>;
  illustration: FC<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  label: string;
  gradient: string;
  hoverGradient: string;
  iconColor: string;
  stats: string;
  illustrationProps: {
    className: string;
    strokeWidth?: number;
  };
}

export default function AboutSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const bentoCards: BentoCardData[] = [
    {
      icon: Activity,
      illustration: Workflow,
      title: "Real-time Analytics",
      description:
        "Process millions of data points per second with adaptive, low-latency AI computation.",
      label: "Analytics",
      gradient: "from-blue-500/20 to-cyan-500/20",
      hoverGradient: "from-blue-500/30 to-cyan-500/30",
      iconColor: "text-blue-400",
      stats: "2.5M/sec",
      illustrationProps: { className: "w-16 h-16 text-blue-400/20", strokeWidth: 1 },
    },
    {
      icon: Globe,
      illustration: GitBranch,
      title: "Global Scalability",
      description:
        "Deployed across 52+ regions with intelligent routing and edge optimization.",
      label: "Infrastructure",
      gradient: "from-green-500/20 to-emerald-500/20",
      hoverGradient: "from-green-500/30 to-emerald-500/30",
      iconColor: "text-green-400",
      stats: "52+ Regions",
      illustrationProps: { className: "w-16 h-16 text-green-400/20", strokeWidth: 1 },
    },
    {
      icon: Shield,
      illustration: ShieldCheck,
      title: "Enterprise Security",
      description:
        "Zero-trust protocols, SOC2 compliance, and 256-bit encryption built for enterprise scale.",
      label: "Security",
      gradient: "from-purple-500/20 to-violet-500/20",
      hoverGradient: "from-purple-500/30 to-violet-500/30",
      iconColor: "text-purple-400",
      stats: "256-bit",
      illustrationProps: { className: "w-16 h-16 text-purple-400/20", strokeWidth: 1 },
    },
    {
      icon: BarChart3,
      illustration: TrendingUp,
      title: "AI Insights",
      description:
        "Transform raw data into actionable intelligence with ML-driven predictions.",
      label: "Intelligence",
      gradient: "from-orange-500/20 to-amber-500/20",
      hoverGradient: "from-orange-500/30 to-amber-500/30",
      iconColor: "text-orange-400",
      stats: "AI-Powered",
      illustrationProps: { className: "w-16 h-16 text-orange-400/20", strokeWidth: 1 },
    },
    {
      icon: Eye,
      illustration: Workflow,
      title: "Live Monitoring",
      description:
        "Predict, visualize, and track system health through live observability dashboards.",
      label: "Monitoring",
      gradient: "from-red-500/20 to-pink-500/20",
      hoverGradient: "from-red-500/30 to-pink-500/30",
      iconColor: "text-red-400",
      stats: "24/7",
      illustrationProps: { className: "w-16 h-16 text-red-400/20", strokeWidth: 1 },
    },
    {
      icon: Server,
      illustration: Cloud,
      title: "High Availability",
      description:
        "Ensure 99.99% uptime through redundant multi-region clusters and auto-healing nodes.",
      label: "Reliability",
      gradient: "from-indigo-500/20 to-blue-500/20",
      hoverGradient: "from-indigo-500/30 to-blue-500/30",
      iconColor: "text-indigo-400",
      stats: "99.99%",
      illustrationProps: { className: "w-16 h-16 text-indigo-400/20", strokeWidth: 1 },
    },
  ];

  return (
    <section
      id="about"
      className={cn(
        "relative py-20 md:py-24 overflow-hidden transition-colors duration-700",
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




      {/* Content */}
      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Platform Capabilities
          </div>
          <h2 className={cn("text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4", isDark ? "text-white" : "text-gray-900")}>
            Enterprise-Grade{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Data Intelligence
            </span>
          </h2>
          <p className={cn("text-lg max-w-3xl mx-auto leading-relaxed", isDark ? "text-gray-300" : "text-gray-600")}>
            Power mission-critical operations with AI-driven insights, global scalability, and real-time performance.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {bentoCards.map((card, index) => (
            <BentoCard key={card.title} card={card} index={index} isDark={isDark} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface BentoCardProps {
  card: BentoCardData;
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

  const Illustration = card.illustration;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ y: -6, scale: 1.02 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className={cn(
        "group relative rounded-2xl p-6 lg:p-8 border backdrop-blur-xl",
        "flex flex-col justify-between aspect-[4/3] cursor-pointer transition-all duration-500",
        isDark        ? "bg-blue-950/20 border-blue-900/50 hover:border-blue-500/40 hover:bg-blue-950/40"
        : "bg-white/80 border-gray-200 hover:border-blue-500/40 hover:bg-white/90 shadow-[0_8px_20px_-6px_rgba(59,130,246,0.1)]"
      )}
      style={{
        background: hover
          ? `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(59,130,246,0.08) 0%, transparent 60%)`
          : undefined,
      }}
    >
      {/* Faint illustration */}
      <div className="absolute inset-0 flex items-center justify-end pr-4 pb-4 opacity-40">
        <Illustration
          {...card.illustrationProps}
          className={cn(
            card.illustrationProps.className,
            "transition-transform duration-700",
            hover ? "scale-110 opacity-60" : "scale-100 opacity-40"
          )}
        />
      </div>

      {/* Icon & Stat */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div
          className={cn(
            "p-3 rounded-xl backdrop-blur-sm",
            `bg-gradient-to-br ${card.gradient}`
          )}
        >
          <card.icon className={cn("w-5 h-5 lg:w-6 lg:h-6", card.iconColor)} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border bg-white/70 dark:bg-white/5 border-white/10 text-foreground/80"
        >
          {card.stats}
        </motion.div>
      </div>

      {/* Title & Description */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <h3
          className={cn(
            "text-lg lg:text-xl font-bold mb-2 leading-tight transition-colors duration-300",
            isDark
              ? "text-white group-hover:text-blue-400"
              : "text-gray-900 group-hover:text-blue-600"
          )}
        >
          {card.title}
        </h3>
        <p
          className={cn(
            "text-sm lg:text-base leading-relaxed",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          {card.description}
        </p>
      </div>

      {/* Label */}
      <div className="relative z-10 mt-4">
        <span
          className={cn(
            "text-xs font-semibold px-3 py-1.5 rounded-full border backdrop-blur-sm transition-all duration-300",
            isDark
              ? "bg-white/5 border-white/10 text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-950/20"
              : "bg-white/80 border-gray-200 text-gray-600 group-hover:text-blue-600 group-hover:bg-blue-50"
          )}
        >
          {card.label}
        </span>
      </div>
    </motion.div>
  );
};

