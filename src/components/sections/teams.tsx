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

  const wrapIndex = (index: number) => (index + totalMembers) % totalMembers;

  const calculatePosition = (index: number) => {
    const activeIndex = currentIndex;
    const diff = wrapIndex(index - activeIndex);

    if (diff === 0) return 'center';
    if (diff <= visibleCards) return `right-${diff}`;
    if (diff >= totalMembers - visibleCards) return `left-${totalMembers - diff}`;
    return 'hidden';
  };

  const getVariantStyles = (position: string) => {
    const transition = { duration: animationDuration / 1000, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] };
    switch (position) {
      case 'center': return { zIndex: 10, opacity: 1, scale: 1.1, x: 0, filter: 'grayscale(0%)', pointerEvents: 'auto', transition };
      case 'right-1': return { zIndex: 5, opacity: sideCardOpacity, scale: sideCardScale, x: cardWidth * 0.7, filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)', pointerEvents: 'auto', transition };
      case 'right-2': return { zIndex: 1, opacity: sideCardOpacity * 0.7, scale: sideCardScale * 0.9, x: cardWidth * 1.4, filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)', pointerEvents: 'auto', transition };
      case 'left-1': return { zIndex: 5, opacity: sideCardOpacity, scale: sideCardScale, x: -cardWidth * 0.7, filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)', pointerEvents: 'auto', transition };
      case 'left-2': return { zIndex: 1, opacity: sideCardOpacity * 0.7, scale: sideCardScale * 0.9, x: -cardWidth * 1.4, filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)', pointerEvents: 'auto', transition };
      default: return { zIndex: 0, opacity: 0, scale: 0.8, x: direction > 0 ? cardWidth * (visibleCards + 1) : -cardWidth * (visibleCards + 1), pointerEvents: 'none', filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)', transition };
    }
  };

  // Auto-play
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay > 0) interval = setInterval(() => paginate(1), autoPlay);

    const carouselContainer = document.getElementById('team-carousel-container');

    const handleMouseEnter = () => { if (pauseOnHover && autoPlay > 0) clearInterval(interval); };
    const handleMouseLeave = () => { if (pauseOnHover && autoPlay > 0) interval = setInterval(() => paginate(1), autoPlay); };

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
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'ArrowLeft') paginate(-1); else if (e.key === 'ArrowRight') paginate(1); };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [keyboardNavigation, paginate]);

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => { if (!touchNavigation) return; setTouchStart(e.targetTouches[0].clientX); };
  const handleTouchMove = (e: React.TouchEvent) => { if (!touchNavigation) return; setTouchEnd(e.targetTouches[0].clientX); };
  const handleTouchEnd = () => {
    if (!touchNavigation) return;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) paginate(diff > 0 ? 1 : -1);
  };

  const titleSizeClasses = { sm: 'text-4xl', md: 'text-5xl', lg: 'text-6xl', xl: 'text-7xl', '2xl': 'text-8xl' };

  return (
    <div
      id="team-carousel-container"
      className={cn(`flex flex-col items-center justify-center overflow-hidden relative`, className)}
      style={{ background }}
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

      {/* Carousel */}
      <div className="w-full max-w-6xl relative" style={{ height: cardHeight + 10, perspective: '1000px', marginTop: '3rem', marginBottom: '2rem' }}>
        {/* Arrows */}
        {showArrows && (
          <>
            <motion.button onClick={() => paginate(-1)} className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:scale-110" whileTap={{ scale: 0.9 }}>
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button onClick={() => paginate(1)} className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:scale-110" whileTap={{ scale: 0.9 }}>
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </>
        )}

        <div className="w-full h-full flex justify-center items-center relative" style={{ transformStyle: 'preserve-3d' }}>
          <AnimatePresence initial={false} custom={direction}>
            {members.map((member, index) => {
              const position = calculatePosition(index);
              const isCurrent = index === currentIndex;
              if (position === 'hidden' && !isCurrent) return null;

              return (
                <motion.div
                  key={member.id}
                  className={cn("absolute bg-white overflow-hidden shadow-2xl cursor-pointer", cardClassName)}
                  style={{ width: cardWidth, height: cardHeight, borderRadius: cardRadius, top: '50%', left: '50%', marginLeft: -cardWidth / 2, marginTop: -cardHeight / 2 }}
                  initial={getVariantStyles('hidden')}
                  animate={getVariantStyles(position)}
                  exit={getVariantStyles('hidden')}
                  onClick={() => {
                    if (!isCurrent) {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                      onMemberChange?.(members[index], index);
                    }
                    onCardClick?.(member, index);
                  }}
                >
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  {infoPosition === 'overlay' && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center" style={{ background: infoBackground || "linear-gradient(transparent, rgba(0,0,0,0.8))", color: infoTextColor }}>
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

      {/* Info */}
      {infoPosition === 'bottom' && members[currentIndex] && (
        <motion.div key={members[currentIndex].id + "-info"} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="text-center mt-6">
          <h2 className="text-4xl font-bold mb-3 relative inline-block" style={{ color: infoTextColor }}>
            {members[currentIndex].name}
            <span className="absolute top-full left-0 w-full h-0.5 mt-2" style={{ background: infoTextColor }} />
          </h2>
          <p className="text-xl font-medium opacity-80 uppercase tracking-wider" style={{ color: infoTextColor }}>
            {members[currentIndex].role}
          </p>
          {members[currentIndex].bio && <p className="text-base mt-4 max-w-lg mx-auto opacity-70">{members[currentIndex].bio}</p>}
        </motion.div>
      )}
    </div>
  );
};

// Main Team Section
export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const teamMembers: TeamMember[] = [
    { id: "1", name: "Sarah Chen", role: "CEO & Founder", image: "/avatar/ava1.png", bio: "Former Head of Data at TechCorp. 10+ years in data analytics and enterprise software." },
    { id: "2", name: "Marcus Rodriguez", role: "CTO", image: "/avatar/ava2.png", bio: "Ex-Google Cloud architect. Specialized in scalable data infrastructure and real-time systems." },
    { id: "3", name: "Dr. Elena Petrova", role: "Head of AI Research", image: "/avatar/ava3.png", bio: "PhD in Machine Learning from Stanford. Focused on predictive analytics and AI innovation." },
    { id: "4", name: "James Kim", role: "VP of Engineering", image: "/avatar/ava4.png", bio: "Built engineering teams at multiple successful startups. Expert in distributed systems." },
    { id: "5", name: "Amira Hassan", role: "Head of Product", image: "/avatar/ava5.png", bio: "Product leader with background in enterprise SaaS and user experience design." },
    { id: "6", name: "David Thompson", role: "Chief Revenue Officer", image: "/avatar/ava6.png", bio: "Scaling revenue operations for B2B tech companies. Focused on customer success." }
  ];

  return (
    <section id="team" ref={ref} className={cn("relative py-16 md:py-20 overflow-hidden transition-colors duration-700", isDark ? "bg-[#293289]" : "bg-white")}>

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
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border shadow-sm mb-4", isDark ? "bg-white/10 text-white border-white/20" : "bg-blue-500/15 text-foreground/90 border-blue-500/30")}>
            <Users className={cn("w-4 h-4", isDark ? "text-white" : "text-blue-500")} />
            <span>Meet Our Team</span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-4">
            The Minds Behind
            <span className="block text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">DataFlow</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className={cn("text-lg md:text-xl max-w-3xl mx-auto leading-relaxed", isDark ? "text-white/80" : "text-foreground/90")}>
            Our diverse team of experts brings decades of experience in data analytics, artificial intelligence, and enterprise software to build the future of real-time data.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="mt-12 mb-8">
          <TeamCarousel
            members={teamMembers}
            title="OUR TEAM"
            titleSize="2xl"
            titleColor={isDark ? "rgba(59, 130, 246, 1)" : "rgba(59, 130, 246, 1)"}
            background="transparent"
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

               {/* Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8, delay: 0.8 }} 
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border shadow-sm mb-6 backdrop-blur-sm",
              isDark
                ? "bg-blue-400/10 text-blue-400 border-blue-400/20"
                : "bg-blue-400/10 text-blue-600 border-blue-400/20"
            )}
          >
            <span>Our Culture</span>
          </motion.div>

          <h3 className={cn("text-3xl md:text-4xl font-bold mb-12", isDark ? "text-white" : "text-gray-900")}>
            Core Values That Drive Us
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                title: "Innovation First", 
                description: "We push the boundaries of what's possible in data analytics and real-time processing.",
                icon: "🚀",
                gradient: "from-blue-400 to-cyan-400"
              },
              { 
                title: "Customer Success", 
                description: "Our success is measured by the value we deliver to our clients and their businesses.",
                icon: "💎",
                gradient: "from-purple-400 to-pink-400"
              },
              { 
                title: "Collaborative Excellence", 
                description: "We believe the best solutions come from diverse perspectives working together.",
                icon: "🤝",
                gradient: "from-green-400 to-emerald-400"
              }
            ].map((value, index) => (
              <motion.div 
                key={value.title} 
                initial={{ opacity: 0, y: 20, scale: 0.95 }} 
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} 
                transition={{ duration: 0.6, delay: 1.0 + index * 0.15, type: "spring" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={cn(
                  "group relative p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 overflow-hidden",
                  isDark 
                    ? "bg-white/5 border-white/10 hover:border-blue-400/40 hover:bg-white/10" 
                    : "bg-white border-gray-200 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-400/10"
                )}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                
                <h4 className={cn(
                  "text-xl font-bold mb-4 relative z-10",
                  isDark ? "text-white" : "text-gray-900"
                )}>
                  {value.title}
                </h4>
                <p className={cn(
                  "text-base leading-relaxed relative z-10",
                  isDark ? "text-white/80" : "text-gray-600"
                )}>
                  {value.description}
                </p>
                
                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                  <div className={cn(
                    "absolute inset-[1px] rounded-3xl",
                    isDark ? "bg-[#293289]" : "bg-white"
                  )} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.7, delay: 1.4 }} 
          className="text-center mb-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.5 }}
            className={cn(
              "inline-block px-8 py-4 rounded-2xl backdrop-blur-xl border mb-8",
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-white/80 border-gray-200 shadow-2xl shadow-blue-400/5"
            )}
          >
            <h3 className={cn("text-3xl md:text-4xl font-bold mb-4", isDark ? "text-white" : "text-gray-900")}>
              Ready to Join Our Team?
            </h3>
            <motion.p 
              className={cn("text-lg mb-6 max-w-2xl mx-auto", isDark ? "text-white/70" : "text-gray-600")}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.6 }}
            >
              We&apos;re always looking for talented individuals who are passionate about transforming how businesses use data.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.7 }}
            >
              <InteractiveButton 
                href="/careers" 
                className="bg-blue-400 border-blue-400 text-white hover:bg-blue-500 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-400/25"
              >
                View Open Positions
              </InteractiveButton>
              <InteractiveButton 
                href="/contact" 
                className={cn(
                  "backdrop-blur-sm border transition-all duration-300",
                  isDark 
                    ? "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10" 
                    : "bg-white border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400 hover:shadow-2xl hover:shadow-gray-400/10"
                )}
              >
                Contact Our Team
              </InteractiveButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Interactive Button Component
interface InteractiveButtonProps { href?: string; children: React.ReactNode; className?: string; }
function InteractiveButton({ children, className, href }: InteractiveButtonProps) {
  useTheme();
  const buttonClasses = cn("group relative overflow-hidden rounded-full border px-8 py-4 font-semibold flex items-center justify-center transition-all duration-300 min-h-[56px] flex items-center gap-3", className);
  const ButtonContent = (
    <button className={buttonClasses}>
      <span className="relative z-10 flex items-center gap-3">{children}<ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" /></span>
    </button>
  );
  if (href) return <motion.a href={href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">{ButtonContent}</motion.a>;
  return <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{ButtonContent}</motion.div>;
}
