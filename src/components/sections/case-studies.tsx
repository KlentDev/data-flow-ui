"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';
import Image from 'next/image';
import { ArrowRight, Target, } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

// Types for Dome Gallery
type ImageItem = string | { src: string; alt?: string };

type DomeGalleryProps = {
  images?: ImageItem[];
  fit?: number;
  fitBasis?: 'auto' | 'min' | 'max' | 'width' | 'height';
  minRadius?: number;
  maxRadius?: number;
  padFactor?: number;
  overlayBlurColor?: string;
  dragSensitivity?: number;
  enlargeTransitionMs?: number;
  segments?: number;
  dragDampening?: number;
  imageBorderRadius?: string;
  grayscale?: boolean;
  onImageClick?: (index: number) => void;
};

type ItemDef = {
  src: string;
  alt: string;
  x: number;
  y: number;
  sizeX: number;
  sizeY: number;
};

// Case Study Types
interface CaseStudyMetric {
  value: string;
  label: string;
}

interface CaseStudy {
  id: number;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: CaseStudyMetric[];
  testimonial: string;
  author: string;
  logo: string;
  image: string;
}

const DEFAULTS = {
  dragSensitivity: 20,
  enlargeTransitionMs: 300,
  segments: 35
};

// Utility functions
const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
const wrapAngleSigned = (deg: number) => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};

function buildItems(pool: ImageItem[], seg: number): ItemDef[] {
  const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
  const evenYs = [-4, -2, 0, 2, 4];
  const oddYs = [-3, -1, 1, 3, 5];

  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenYs : oddYs;
    return ys.map(y => ({ x, y, sizeX: 2, sizeY: 2 }));
  });

  const totalSlots = coords.length;
  if (pool.length === 0) {
    return coords.map(c => ({ ...c, src: '', alt: '' }));
  }

  const normalizedImages = pool.map(image => {
    if (typeof image === 'string') {
      return { src: image, alt: '' };
    }
    return { src: image.src || '', alt: image.alt || '' };
  });

  const usedImages = Array.from({ length: totalSlots }, (_, i) => normalizedImages[i % normalizedImages.length]);

  return coords.map((c, i) => ({
    ...c,
    src: usedImages[i].src,
    alt: usedImages[i].alt
  }));
}

// Dome Gallery Component
function DomeGallery({
  images = [],
  fit = 0.5,
  fitBasis = 'auto',
  minRadius = 600,
  maxRadius = Infinity,
  padFactor = 0.25,
  overlayBlurColor = '#060010',
  dragSensitivity = DEFAULTS.dragSensitivity,
  segments = DEFAULTS.segments,
  dragDampening = 2,
  imageBorderRadius = '30px',
  grayscale = true,
  onImageClick
}: DomeGalleryProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  
  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef<{ x: number; y: number } | null>(null);
  const draggingRef = useRef(false);
  const cancelTapRef = useRef(false);
  const movedRef = useRef(false);
  const inertiaRAF = useRef<number | null>(null);
  const pointerTypeRef = useRef<'mouse' | 'pen' | 'touch'>('mouse');
  const tapTargetRef = useRef<HTMLElement | null>(null);
  const openingRef = useRef(false);
  const lastDragEndAt = useRef(0);

  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = (xDeg: number, yDeg: number) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    }
  };

  const lockedRadiusRef = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(entries => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width),
        h = Math.max(1, cr.height);
      const minDim = Math.min(w, h),
        maxDim = Math.max(w, h),
        aspect = w / h;
      let basis: number;
      switch (fitBasis) {
        case 'min':
          basis = minDim;
          break;
        case 'max':
          basis = maxDim;
          break;
        case 'width':
          basis = w;
          break;
        case 'height':
          basis = h;
          break;
        default:
          basis = aspect >= 1.3 ? w : minDim;
      }
      let radius = basis * fit;
      const heightGuard = h * 1.35;
      radius = Math.min(radius, heightGuard);
      radius = clamp(radius, minRadius, maxRadius);
      lockedRadiusRef.current = Math.round(radius);

      const viewerPad = Math.max(8, Math.round(minDim * padFactor));
      root.style.setProperty('--radius', `${lockedRadiusRef.current}px`);
      root.style.setProperty('--viewer-pad', `${viewerPad}px`);
      root.style.setProperty('--overlay-blur-color', overlayBlurColor);
      root.style.setProperty('--tile-radius', imageBorderRadius);
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');
      applyTransform(rotationRef.current.x, rotationRef.current.y);
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [
    fit,
    fitBasis,
    minRadius,
    maxRadius,
    padFactor,
    overlayBlurColor,
    grayscale,
    imageBorderRadius,
  ]);

  useEffect(() => {
    applyTransform(rotationRef.current.x, rotationRef.current.y);
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback(
    (vx: number) => {
      const MAX_V = 1.4;
      let vX = clamp(vx, -MAX_V, MAX_V) * 80;
      let frames = 0;
      const d = clamp(dragDampening ?? 0.6, 0, 1);
      const frictionMul = 0.94 + 0.055 * d;
      const stopThreshold = 0.015 - 0.01 * d;
      const maxFrames = Math.round(90 + 270 * d);
      const step = () => {
        vX *= frictionMul;
        if (Math.abs(vX) < stopThreshold) {
          inertiaRAF.current = null;
          return;
        }
        if (++frames > maxFrames) {
          inertiaRAF.current = null;
          return;
        }
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
        rotationRef.current = { ...rotationRef.current, y: nextY };
        applyTransform(rotationRef.current.x, nextY);
        inertiaRAF.current = requestAnimationFrame(step);
      };
      stopInertia();
      inertiaRAF.current = requestAnimationFrame(step);
    },
    [dragDampening, stopInertia]
  );

  useGesture(
    {
      onDragStart: ({ event }) => {
        stopInertia();

        const evt = event as PointerEvent;
        // Fixed: Remove 'any' type and use proper type assertion
        pointerTypeRef.current = (evt.pointerType as 'mouse' | 'pen' | 'touch') || 'mouse';
        draggingRef.current = true;
        cancelTapRef.current = false;
        movedRef.current = false;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: evt.clientX, y: evt.clientY };
        const potential = (evt.target as Element).closest?.('.item__image') as HTMLElement | null;
        tapTargetRef.current = potential || null;
      },
      onDrag: ({ event, last, velocity: velArr = [0, 0], direction: dirArr = [0, 0], movement }) => {
        if (!draggingRef.current || !startPosRef.current) return;

        const evt = event as PointerEvent;
        const dxTotal = evt.clientX - startPosRef.current.x;

        if (!movedRef.current) {
          const dist2 = dxTotal * dxTotal;
          if (dist2 > 16) movedRef.current = true;
        }

        // Only update horizontal rotation (y-axis)
        const nextY = startRotRef.current.y + dxTotal / dragSensitivity;

        const cur = rotationRef.current;
        if (cur.y !== nextY) {
          rotationRef.current = { ...rotationRef.current, y: nextY };
          applyTransform(rotationRef.current.x, nextY);
        }

        if (last) {
          draggingRef.current = false;
          let isTap = false;

          if (startPosRef.current) {
            const dx = evt.clientX - startPosRef.current.x;
            const dist2 = dx * dx;
            const TAP_THRESH_PX = pointerTypeRef.current === 'touch' ? 10 : 6;
            if (dist2 <= TAP_THRESH_PX * TAP_THRESH_PX) {
              isTap = true;
            }
          }

          const [vMagX] = velArr;
          const [dirX] = dirArr;
          let vx = vMagX * dirX;

          if (!isTap && Math.abs(vx) < 0.001 && Array.isArray(movement)) {
            const [mx] = movement;
            vx = (mx / dragSensitivity) * 0.02;
          }

          if (!isTap && Math.abs(vx) > 0.005) {
            startInertia(vx);
          }
          startPosRef.current = null;
          cancelTapRef.current = !isTap;

          if (isTap && tapTargetRef.current && onImageClick) {
            // Enhanced: Find the correct image index by comparing src
            const clickedImageSrc = tapTargetRef.current.querySelector('img')?.src;
            if (clickedImageSrc) {
              // Extract just the filename part to handle different URL formats
              const clickedSrc = new URL(clickedImageSrc).pathname.split('/').pop();
              const index = items.findIndex(item => {
                const itemSrc = new URL(item.src, window.location.origin).pathname.split('/').pop();
                return itemSrc === clickedSrc;
              });
              if (index !== -1) {
                onImageClick(index);
              }
            }
          }
          tapTargetRef.current = null;

          if (cancelTapRef.current) setTimeout(() => (cancelTapRef.current = false), 120);
          if (movedRef.current) lastDragEndAt.current = performance.now();
          movedRef.current = false;
        }
      }
    },
    { target: mainRef, eventOptions: { passive: false } }
  );

  const cssStyles = `
    .sphere-root {
      --radius: 520px;
      --viewer-pad: 72px;
      --circ: calc(var(--radius) * 3.14);
      --rot-y: calc((360deg / var(--segments-x)) / 2);
      --rot-x: calc((360deg / var(--segments-y)) / 2);
      --item-width: calc(var(--circ) / var(--segments-x));
      --item-height: calc(var(--circ) / var(--segments-y));
    }
    
    .sphere-root * { box-sizing: border-box; }
    .sphere, .sphere-item, .item__image { transform-style: preserve-3d; }
    
    .stage {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      position: absolute;
      inset: 0;
      margin: auto;
      perspective: calc(var(--radius) * 2);
      perspective-origin: 50% 50%;
    }
    
    .sphere {
      transform: translateZ(calc(var(--radius) * -1));
      will-change: transform;
      position: absolute;
    }
    
    .sphere-item {
      width: calc(var(--item-width) * var(--item-size-x));
      height: calc(var(--item-height) * var(--item-size-y));
      position: absolute;
      top: -999px;
      bottom: -999px;
      left: -999px;
      right: -999px;
      margin: auto;
      transform-origin: 50% 50%;
      backface-visibility: hidden;
      transition: transform 300ms;
      transform: rotateY(calc(var(--rot-y) * (var(--offset-x) + ((var(--item-size-x) - 1) / 2)))) 
                 rotateX(calc(var(--rot-x) * (var(--offset-y) - ((var(--item-size-y) - 1) / 2)))) 
                 translateZ(var(--radius));
    }
    
    .item__image {
      position: absolute;
      inset: 10px;
      border-radius: var(--tile-radius, 12px);
      overflow: hidden;
      cursor: pointer;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      transition: transform 300ms;
      pointer-events: auto;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div
        ref={rootRef}
        className="sphere-root relative w-full h-full"
        style={{
          ['--segments-x' as string]: segments,
          ['--segments-y' as string]: segments,
          ['--overlay-blur-color' as string]: overlayBlurColor,
          ['--tile-radius' as string]: imageBorderRadius,
          ['--image-filter' as string]: grayscale ? 'grayscale(1)' : 'none'
        }}
      >
        <main
          ref={mainRef}
          className="absolute inset-0 grid place-items-center overflow-hidden select-none bg-transparent"
          style={{
            touchAction: 'none',
            WebkitUserSelect: 'none'
          }}
        >
          <div className="stage">
            <div ref={sphereRef} className="sphere">
              {items.map((it, i) => (
                <div
                  key={`${it.x},${it.y},${i}`}
                  className="sphere-item absolute m-auto"
                  data-src={it.src}
                  data-alt={it.alt}
                  data-offset-x={it.x}
                  data-offset-y={it.y}
                  data-size-x={it.sizeX}
                  data-size-y={it.sizeY}
                  style={{
                    ['--offset-x' as string]: it.x,
                    ['--offset-y' as string]: it.y,
                    ['--item-size-x' as string]: it.sizeX,
                    ['--item-size-y' as string]: it.sizeY,
                    top: '-999px',
                    bottom: '-999px',
                    left: '-999px',
                    right: '-999px'
                  }}
                >
                  <div
                    className="item__image absolute block overflow-hidden cursor-pointer bg-gray-200 transition-transform duration-300"
                    role="button"
                    tabIndex={0}
                    aria-label={it.alt || 'Open case study'}
                    onClick={() => {
                      if (draggingRef.current) return;
                      if (movedRef.current) return;
                      if (performance.now() - lastDragEndAt.current < 80) return;
                      if (openingRef.current) return;
                      if (onImageClick) {
                        onImageClick(i);
                      }
                    }}
                    style={{
                      inset: '10px',
                      borderRadius: `var(--tile-radius, ${imageBorderRadius})`,
                      backfaceVisibility: 'hidden'
                    }}
                  >
                   <Image
  src={it.src}
  draggable={false}
  alt={it.alt}
  fill
  className="object-cover pointer-events-none"
  style={{
    backfaceVisibility: 'hidden',
    filter: `var(--image-filter, ${grayscale ? 'grayscale(1)' : 'none'})`
  }}
/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

// Main Case Studies Section
export function CaseStudiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number | null>(null);

 const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: "Global Finance Corp",
    industry: "Financial Services",
    challenge: "Needed real-time fraud detection across 5M+ daily transactions with sub-second latency to prevent $50M+ in annual losses.",
    solution: "Implemented AI-powered anomaly detection with real-time data streaming and automated alert systems.",
    results: "97% faster fraud detection, $42M annual savings, 99.9% system uptime",
    metrics: [
      { value: "97%", label: "Faster Detection" },
      { value: "$42M", label: "Annual Savings" },
      { value: "99.9%", label: "Uptime" }
    ],
    testimonial: "DataFlow transformed our security operations. We now catch fraudulent patterns in milliseconds instead of hours.",
    author: "Sarah Chen, CTO",
    logo: "🏦",
    image: "/global/finance.png"
  },
  {
    id: 2,
    client: "MediTech Solutions",
    industry: "Healthcare",
    challenge: "Required real-time patient monitoring across 200+ facilities with predictive analytics for early intervention.",
    solution: "Deployed IoT sensor integration with machine learning models for predictive health analytics.",
    results: "45% faster response times, 30% reduction in critical events, 24/7 monitoring coverage",
    metrics: [
      { value: "45%", label: "Faster Response" },
      { value: "30%", label: "Risk Reduction" },
      { value: "24/7", label: "Coverage" }
    ],
    testimonial: "The real-time analytics have been life-saving. Our response teams now intervene before situations become critical.",
    author: "Dr. Michael Torres, Medical Director",
    logo: "🏥",
    image: "/global/meditech.png"
  },
  {
    id: 3,
    client: "ShopSphere",
    industry: "E-commerce",
    challenge: "Struggled with personalized recommendations and inventory optimization across 2M+ SKUs and 10M monthly users.",
    solution: "Integrated real-time customer behavior tracking with predictive inventory management.",
    results: "35% increase in conversion rates, 60% better inventory turnover, 25% higher customer retention",
    metrics: [
      { value: "35%", label: "Conversion Boost" },
      { value: "60%", label: "Inventory Efficiency" },
      { value: "25%", label: "Retention Gain" }
    ],
    testimonial: "DataFlow's real-time insights helped us understand customer behavior like never before. Our recommendation engine is now 3x more effective.",
    author: "Jessica Williams, VP of Product",
    logo: "🛒",
    image: "/global/shop.png"
  },
  {
    id: 4,
    client: "AutoManufact Inc",
    industry: "Manufacturing",
    challenge: "Needed predictive maintenance and quality control across 15 production lines with 500+ IoT sensors each.",
    solution: "Implemented real-time sensor data analysis with AI-powered predictive maintenance algorithms.",
    results: "40% reduction in downtime, 25% improvement in quality control, 18% increase in production efficiency",
    metrics: [
      { value: "40%", label: "Downtime Reduction" },
      { value: "25%", label: "Quality Improvement" },
      { value: "18%", label: "Efficiency Gain" }
    ],
    testimonial: "The predictive maintenance features have revolutionized our manufacturing process. We're saving millions in avoided downtime.",
    author: "Robert Kim, Operations Director",
    logo: "🏭",
    image: "/global/sensor.png"
  },
  {
    id: 5,
    client: "UrbanRetail Group",
    industry: "Retail",
    challenge: "Required real-time sales analytics and customer flow optimization across 500+ store locations.",
    solution: "Deployed comprehensive retail analytics platform with real-time POS integration and customer tracking.",
    results: "28% increase in sales per square foot, 22% higher customer satisfaction, 15% reduction in stockouts",
    metrics: [
      { value: "28%", label: "Sales Increase" },
      { value: "22%", label: "Satisfaction Boost" },
      { value: "15%", label: "Stockout Reduction" }
    ],
    testimonial: "DataFlow gives us insights we never had before. We can now optimize store layouts and inventory in real-time.",
    author: "David Martinez, Retail Operations VP",
    logo: "🏪",
    image: "/global/pos.png"
  },
  {
    id: 6,
    client: "StreamFlix",
    industry: "Entertainment",
    challenge: "Needed real-time content recommendation and user engagement analytics for 50M+ subscribers.",
    solution: "Built advanced content recommendation engine with real-time viewer behavior analysis.",
    results: "50% higher content engagement, 35% longer viewing sessions, 20% reduction in churn",
    metrics: [
      { value: "50%", label: "Engagement Increase" },
      { value: "35%", label: "Longer Sessions" },
      { value: "20%", label: "Churn Reduction" }
    ],
    testimonial: "Our recommendation accuracy has skyrocketed. DataFlow helps us keep viewers engaged and coming back for more.",
    author: "Amanda Johnson, Head of Product",
    logo: "🎬",
    image: "/global/stream.png"
  }
];


  const domeImages = caseStudies.map(study => ({
    src: study.image,
    alt: `${study.client} - ${study.industry}`
  }));

  const handleImageClick = (index: number) => {
    // Ensure the index is valid and within range
    if (index >= 0 && index < caseStudies.length) {
      setSelectedCaseStudy(index);
    }
  };

  // Get the selected study safely
  const selectedStudy = selectedCaseStudy !== null && selectedCaseStudy >= 0 && selectedCaseStudy < caseStudies.length 
    ? caseStudies[selectedCaseStudy] 
    : null;

  return (
    <section
      id="case-studies"
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


      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border shadow-sm mb-6",
              isDark
                ? "bg-white/10 text-white border-white/20"
                : "bg-blue-500/15 text-foreground/90 border-blue-500/30"
            )}
          >
            <Target className={cn("w-4 h-4", isDark ? "text-white" : "text-blue-500")} />
            <span>Client Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6"
          >
            Real Results,{" "}
            <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              Real Impact
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={cn("text-lg md:text-xl max-w-3xl mx-auto leading-relaxed", isDark ? "text-white/80" : "text-foreground/90")}
          >
            Discover how industry leaders leverage DataFlow to transform their operations, 
            drive innovation, and achieve measurable business outcomes.
          </motion.p>
        </motion.div>

        {/* Dome Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-[600px] md:h-[800px] mb-20"
        >
          <DomeGallery
            images={domeImages}
            fit={0.6}
            minRadius={500}
            maxRadius={800}
            dragSensitivity={25}
            grayscale={false}
            imageBorderRadius="16px"
            onImageClick={handleImageClick}
          />
        </motion.div>

        {/* Selected Case Study Modal */}
        {selectedStudy && (
          <CaseStudyModal
            study={selectedStudy}
            onClose={() => setSelectedCaseStudy(null)}
            isDark={isDark}
          />
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center"
        >
          <motion.h3
            className={cn("text-2xl md:text-3xl font-bold mb-6", isDark ? "text-white" : "text-gray-900")}
          >
            Ready to Write Your Success Story?
          </motion.h3>
          <motion.p
            className={cn("text-lg mb-8 max-w-2xl mx-auto", isDark ? "text-white/70" : "text-gray-600")}
          >
            Join industry leaders who are transforming their business with real-time data analytics.
          </motion.p>
          <InteractiveButton href="/demo">
            Start Your Free Trial
          </InteractiveButton>
        </motion.div>
      </div>
    </section>
  );
}

// Case Study Modal Component
interface CaseStudyModalProps {
  study: CaseStudy;
  onClose: () => void;
  isDark: boolean;
}

function CaseStudyModal({ study, onClose, isDark }: CaseStudyModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "relative rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto",
          isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        )}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{study.logo}</span>
                <div>
                  <h3 className="text-2xl font-bold">{study.client}</h3>
                  <p className={cn("text-sm", isDark ? "text-white/60" : "text-gray-600")}>
                    {study.industry}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className={cn(
                "p-2 rounded-full transition-colors",
                isDark ? "hover:bg-white/10" : "hover:bg-gray-100"
              )}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h4 className={cn("font-semibold mb-3", isDark ? "text-blue-400" : "text-blue-500")}>
                  The Challenge
                </h4>
                <p className={cn("leading-relaxed", isDark ? "text-white/80" : "text-gray-700")}>
                  {study.challenge}
                </p>
              </div>

              <div>
                <h4 className={cn("font-semibold mb-3", isDark ? "text-blue-400" : "text-blue-500")}>
                  Our Solution
                </h4>
                <p className={cn("leading-relaxed", isDark ? "text-white/80" : "text-gray-700")}>
                  {study.solution}
                </p>
              </div>

              {/* Testimonial */}
              <div className={cn("p-6 rounded-2xl", isDark ? "bg-white/5" : "bg-gray-50")}>
                <p className={cn("italic mb-4", isDark ? "text-white/80" : "text-gray-700")}>
                  &quot;{study.testimonial}&quot;
                </p>
                <p className={cn("font-semibold", isDark ? "text-white" : "text-gray-900")}>
                  {study.author}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h4 className={cn("font-semibold mb-3", isDark ? "text-blue-400" : "text-blue-500")}>
                  Key Results
                </h4>
                <p className={cn("leading-relaxed mb-4", isDark ? "text-white/80" : "text-gray-700")}>
                  {study.results}
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric: CaseStudyMetric, index: number) => (
                    <div
                      key={index}
                      className={cn(
                        "text-center p-4 rounded-xl border",
                        isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"
                      )}
                    >
                      <div className={cn("text-xl font-bold mb-1", isDark ? "text-white" : "text-gray-900")}>
                        {metric.value}
                      </div>
                      <div className={cn("text-xs", isDark ? "text-white/60" : "text-gray-600")}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.client}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Interactive Button Component
interface InteractiveButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

function InteractiveButton({ children, className, href }: InteractiveButtonProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const buttonClasses = cn(
    "group relative overflow-hidden rounded-full border px-8 py-4 font-semibold flex items-center justify-center transition-all duration-300 min-h-[56px] flex items-center gap-3 text-lg",
    isDark
      ? "bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/25"
      : "bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/25",
    className
  );

  const ButtonContent = (
    <button className={buttonClasses}>
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </button>
  );

  if (href) {
    return (
      <motion.a 
        href={href} 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }} 
        className="inline-block"
      >
        {ButtonContent}
      </motion.a>
    );
  }

  return <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{ButtonContent}</motion.div>;
}