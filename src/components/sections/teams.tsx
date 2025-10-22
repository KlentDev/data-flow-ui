"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { ArrowRight, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

// Team Carousel Types and Component
interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

interface TeamCarouselProps {
  members: TeamMember[];
  title?: string;
  titleSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  titleColor?: string;
  background?: string;
  cardWidth?: number;
  cardHeight?: number;
  cardRadius?: number;
  showArrows?: boolean;
  showDots?: boolean;
  keyboardNavigation?: boolean;
  touchNavigation?: boolean;
  animationDuration?: number;
  autoPlay?: number;
  pauseOnHover?: boolean;
  visibleCards?: number;
  sideCardScale?: number;
  sideCardOpacity?: number;
  grayscaleEffect?: boolean;
  className?: string;
  cardClassName?: string;
  titleClassName?: string;
  infoPosition?: 'bottom' | 'overlay' | 'none';
  infoTextColor?: string;
  infoBackground?: string;
  onMemberChange?: (member: TeamMember, index: number) => void;
  onCardClick?: (member: TeamMember, index: number) => void;
  initialIndex?: number;
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({
  members,
  title = "OUR TEAM",
  titleSize = "2xl",
  titleColor = "rgba(59, 130, 246, 1)",
  background,
  cardWidth = 320,
  cardHeight = 420,
  cardRadius = 24,
  showArrows = true,
  showDots = true,
  keyboardNavigation = true,
  touchNavigation = true,
  animationDuration = 800,
  autoPlay = 5000,
  pauseOnHover = true,
  visibleCards = 2,
  sideCardScale = 0.85,
  sideCardOpacity = 0.7,
  grayscaleEffect = true,
  className,
  cardClassName,
  titleClassName,
  infoPosition = "bottom",
  infoTextColor = "rgb(59, 130, 246)",
  infoBackground = "transparent",
  onMemberChange,
  onCardClick,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const totalMembers = members.length;

  const paginate = useCallback(
    (newDirection: number) => {
      if (totalMembers === 0) return;
      setDirection(newDirection);
      const nextIndex = (currentIndex + newDirection + totalMembers) % totalMembers;
      setCurrentIndex(nextIndex);
      onMemberChange?.(members[nextIndex], nextIndex);
    },
    [currentIndex, totalMembers, members, onMemberChange]
  );

  const wrapIndex = (index: number) => {
    return (index + totalMembers) % totalMembers;
  };

  const calculatePosition = (index: number) => {
    const activeIndex = currentIndex;
    const diff = wrapIndex(index - activeIndex);

    if (diff === 0) return 'center';
    if (diff <= visibleCards) return `right-${diff}`;
    if (diff >= totalMembers - visibleCards) return `left-${totalMembers - diff}`;
    return 'hidden';
  };

  const getVariantStyles = (position: string) => {
    const transition = {
      duration: animationDuration / 1000,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    };

    switch (position) {
      case 'center':
        return {
          zIndex: 10,
          opacity: 1,
          scale: 1.1,
          x: 0,
          filter: 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      case 'right-1':
        return {
          zIndex: 5,
          opacity: sideCardOpacity,
          scale: sideCardScale,
          x: cardWidth * 0.7,
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      case 'right-2':
        return {
          zIndex: 1,
          opacity: sideCardOpacity * 0.7,
          scale: sideCardScale * 0.9,
          x: cardWidth * 1.4,
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      case 'left-1':
        return {
          zIndex: 5,
          opacity: sideCardOpacity,
          scale: sideCardScale,
          x: -cardWidth * 0.7,
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      case 'left-2':
        return {
          zIndex: 1,
          opacity: sideCardOpacity * 0.7,
          scale: sideCardScale * 0.9,
          x: -cardWidth * 1.4,
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      default:
        return {
          zIndex: 0,
          opacity: 0,
          scale: 0.8,
          x: direction > 0 ? cardWidth * (visibleCards + 1) : -cardWidth * (visibleCards + 1),
          pointerEvents: 'none',
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          transition,
        };
    }
  };

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay > 0) {
      interval = setInterval(() => {
        paginate(1);
      }, autoPlay);
    }

    const carouselContainer = document.getElementById('team-carousel-container');

    const handleMouseEnter = () => {
      if (pauseOnHover && autoPlay > 0) clearInterval(interval);
    };

    const handleMouseLeave = () => {
      if (pauseOnHover && autoPlay > 0) {
        interval = setInterval(() => {
          paginate(1);
        }, autoPlay);
      }
    };

    if (carouselContainer && pauseOnHover && autoPlay > 0) {
      carouselContainer.addEventListener('mouseenter', handleMouseEnter);
      carouselContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      clearInterval(interval);
      if (carouselContainer && pauseOnHover && autoPlay > 0) {
        carouselContainer.removeEventListener('mouseenter', handleMouseEnter);
        carouselContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [autoPlay, paginate, pauseOnHover]);

  // Keyboard navigation
  useEffect(() => {
    if (!keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'ArrowRight') {
        paginate(1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [keyboardNavigation, paginate]);

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!touchNavigation) return;
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchNavigation) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchNavigation) return;

    const swipeThreshold = 50;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        paginate(1);
      } else {
        paginate(-1);
      }
    }
  };

  const titleSizeClasses = {
    sm: 'text-4xl',
    md: 'text-5xl',
    lg: 'text-6xl',
    xl: 'text-7xl',
    '2xl': 'text-8xl',
  };

  return (
    <div
      id="team-carousel-container"
      className={cn(`min-h-screen flex flex-col items-center justify-center overflow-hidden relative 
        transparent`, className)}
      style={{ background: background }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Title */}
      {title && (
        <h2
          className={cn(
            "font-black uppercase tracking-tight absolute top-12 left-1/2 transform -translate-x-1/2 pointer-events-none whitespace-nowrap",
            titleSizeClasses[titleSize],
            titleClassName
          )}
          style={{
            color: 'transparent',
            background: `linear-gradient(to bottom, ${titleColor}75 40%, transparent 76%)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          {title}
        </h2>
      )}

      {/* Carousel Container */}
      <div
        className="w-full max-w-6xl relative"
        style={{
          height: cardHeight + 10,
          perspective: '1000px',
        }}
      >
        {/* Navigation Arrows */}
        {showArrows && (
          <>
            <motion.button
              onClick={() => paginate(-1)}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:scale-110"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:scale-110"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </>
        )}

        {/* Cards Track */}
        <div
          className="w-full h-full flex justify-center items-center relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <AnimatePresence initial={false} custom={direction}>
            {members.map((member, index) => {
              const position = calculatePosition(index);
              const isCurrent = index === currentIndex;

              if (position === 'hidden' && !isCurrent) return null;

              return (
                <motion.div
                  key={member.id}
                  className={cn(
                    "absolute bg-white overflow-hidden shadow-2xl cursor-pointer",
                    cardClassName
                  )}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    borderRadius: cardRadius,
                    top: '50%',
                    left: '50%',
                    marginLeft: -cardWidth / 2,
                    marginTop: -cardHeight / 2,
                  }}
                  initial={getVariantStyles('hidden')}
                  animate={getVariantStyles(position)}
                  exit={getVariantStyles('hidden')}
                  onClick={() => {
                    if (!isCurrent) {
                      const newDirection = index > currentIndex ? 1 : -1;
                      setDirection(newDirection);
                      setCurrentIndex(index);
                      onMemberChange?.(members[index], index);
                    }
                    onCardClick?.(member, index);
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Info */}
                  {infoPosition === 'overlay' && (
                    <div
                      className="absolute bottom-0 left-0 right-0 p-4 text-center"
                      style={{
                        background: infoBackground || "linear-gradient(transparent, rgba(0,0,0,0.8))",
                        color: infoTextColor,
                      }}
                    >
                      <h3 className="text-lg font-bold">{member.name}</h3>
                      <p className="text-sm opacity-90">{member.role}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Member Info (Bottom) */}
      {infoPosition === 'bottom' && members[currentIndex] && (
        <motion.div
          key={members[currentIndex].id + "-info"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center mt-10"
        >
          <h2
            className="text-4xl font-bold mb-3 relative inline-block"
            style={{ color: infoTextColor }}
          >
            {members[currentIndex].name}
            <span
              className="absolute top-full left-0 w-full h-0.5 mt-2"
              style={{ background: infoTextColor }}
            />
          </h2>
          <p
            className="text-xl font-medium opacity-80 uppercase tracking-wider"
            style={{ color: infoTextColor }}
          >
            {members[currentIndex].role}
          </p>
          {members[currentIndex].bio && (
            <p className="text-base mt-4 max-w-lg mx-auto opacity-70">
              {members[currentIndex].bio}
            </p>
          )}
        </motion.div>
      )}

      {/* Dots Indicator */}
      {showDots && (
        <div className="flex justify-center gap-3 mt-15 ">
          {members.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                if (index !== currentIndex) {
                  const newDirection = index > currentIndex ? 1 : -1;
                  setDirection(newDirection);
                  setCurrentIndex(index);
                  onMemberChange?.(members[index], index);
                }
              }}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "scale-125"
                  : "hover:scale-110"
              )}
              style={{
                background: index === currentIndex
                  ? infoTextColor
                  : `${infoTextColor}40`,
              }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Team Section Component
export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CEO & Founder",
    image: "/avatar/ava1.png",
    bio: "Former Head of Data at TechCorp. 10+ years in data analytics and enterprise software.",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    role: "CTO",
    image: "/avatar/ava2.png",
    bio: "Ex-Google Cloud architect. Specialized in scalable data infrastructure and real-time systems.",
  },
  {
    id: "3",
    name: "Dr. Elena Petrova",
    role: "Head of AI Research",
    image: "/avatar/ava3.png",
    bio: "PhD in Machine Learning from Stanford. Focused on predictive analytics and AI innovation.",
  },
  {
    id: "4",
    name: "James Kim",
    role: "VP of Engineering",
    image: "/avatar/ava4.png",
    bio: "Built engineering teams at multiple successful startups. Expert in distributed systems.",
  },
  {
    id: "5",
    name: "Amira Hassan",
    role: "Head of Product",
    image: "/avatar/ava5.png",
    bio: "Product leader with background in enterprise SaaS and user experience design.",
  },
  {
    id: "6",
    name: "David Thompson",
    role: "Chief Revenue Officer",
    image: "/avatar/ava6.png",
    bio: "Scaling revenue operations for B2B tech companies. Focused on customer success.",
  }
];


  const stats = [
    { number: "50+", label: "Team Members" },
    { number: "15", label: "Countries" },
    { number: "40%", label: "Women in Tech" },
    { number: "10+", label: "Years Average Experience" }
  ];

  return (
<section
  id="team"
  ref={ref}
  className={cn(
    "relative py-24 md:py-28 overflow-hidden transition-colors duration-700",
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


      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,hsla(217,91%,60%,0.15)_0%,transparent_70%)] opacity-50 dark:opacity-25" />

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
            <Users className={cn("w-4 h-4", isDark ? "text-white" : "text-blue-500")} />
            <span>Meet Our Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6"
          >
            The Minds Behind
            <span className="block text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              DataFlow
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={cn("text-lg md:text-xl max-w-3xl mx-auto leading-relaxed", isDark ? "text-white/80" : "text-foreground/90")}
          >
            Our diverse team of experts brings decades of experience in data analytics, 
            artificial intelligence, and enterprise software to build the future of real-time data.
          </motion.p>
        </motion.div>

        {/* Team Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
         className="mt-16 mb-12"

        >
          <TeamCarousel
            members={teamMembers}
            title="OUR TEAM"
            titleSize="2xl"
            titleColor={isDark ? "rgba(59, 130, 246, 1)" : "rgba(59, 130, 246, 1)"}
            background={isDark ? "transparent" : "transparent"}
            cardWidth={320}
            cardHeight={420}
            cardRadius={24}
            showArrows={true}
            showDots={true}
            keyboardNavigation={true}
            touchNavigation={true}
            animationDuration={800}
            autoPlay={5000}
            pauseOnHover={true}
            visibleCards={2}
            sideCardScale={0.85}
            sideCardOpacity={0.7}
            grayscaleEffect={true}
            infoPosition="bottom"
            infoTextColor={isDark ? "rgb(255, 255, 255)" : "rgb(59, 130, 246)"}
            infoBackground="transparent"
            onMemberChange={(member, index) => console.log('Active member:', member, index)}
            onCardClick={(member, index) => console.log('Clicked member:', member, index)}
          />
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className={cn(
                  "text-3xl md:text-4xl font-bold mb-2",
                  isDark ? "text-blue-400" : "text-blue-500"
                )}>
                  {stat.number}
                </div>
                <div className={cn(
                  "text-sm font-medium",
                  isDark ? "text-white/70" : "text-gray-600"
                )}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className={cn("text-2xl md:text-3xl font-bold mb-12", isDark ? "text-white" : "text-gray-900")}>
            Our Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Innovation First",
                description: "We push the boundaries of what's possible in data analytics and real-time processing."
              },
              {
                title: "Customer Success",
                description: "Our success is measured by the value we deliver to our clients and their businesses."
              },
              {
                title: "Collaborative Excellence",
                description: "We believe the best solutions come from diverse perspectives working together."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className={cn(
                  "p-6 rounded-2xl border backdrop-blur-sm",
                  isDark 
                    ? "bg-white/5 border-white/10" 
                    : "bg-white border-gray-200"
                )}
              >
                <h4 className={cn("text-lg font-semibold mb-3", isDark ? "text-white" : "text-gray-900")}>
                  {value.title}
                </h4>
                <p className={cn("text-sm leading-relaxed", isDark ? "text-white/70" : "text-gray-600")}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="text-center"
        >
          <motion.h3
            className={cn("text-2xl md:text-3xl font-bold mb-6", isDark ? "text-white" : "text-gray-900")}
          >
            Ready to Join Our Team?
          </motion.h3>
          <motion.p
            className={cn("text-lg mb-8 max-w-2xl mx-auto", isDark ? "text-white/70" : "text-gray-600")}
          >
            We&apos;re always looking for talented individuals who are passionate about transforming 
            how businesses use data.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <InteractiveButton href="/careers" className="bg-blue-500 border-blue-500 text-white hover:bg-blue-600">
              View Open Positions
            </InteractiveButton>
            <InteractiveButton 
              href="/contact" 
              className={isDark ? "bg-white/10 border-white/20 text-white" : "bg-white border-gray-300 text-gray-900"}
            >
              Contact Our Team
            </InteractiveButton>
          </div>
        </motion.div>
      </div>
    </section>
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
    "group relative overflow-hidden rounded-full border px-8 py-4 font-semibold flex items-center justify-center transition-all duration-300 min-h-[56px] flex items-center gap-3",
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