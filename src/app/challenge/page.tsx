"use client";

import { motion } from 'framer-motion';
import { useRef} from 'react';
import { useInView } from 'framer-motion';
import { FileText, Shield, Clock, Users, Lock, AlertTriangle, Target, Globe, Building2, LandPlot } from 'lucide-react';
import { Counter } from '@/components/ui/counter';
import { PageTransition } from '@/components/ui/page-transition';

export default function ChallengePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const challenges = [
    {
      icon: FileText,
      title: 'Paper-Based & Fragmented',
      description: 'Physical records scattered across departments, vulnerable to damage, loss, and deterioration.',
      impact: '70% of land records remain in paper format globally',
    },
    {
      icon: Shield,
      title: 'Fraud & Corruption',
      description: 'Lack of transparency enables document forgery, duplicate titles, and illegal property transfers.',
      impact: '$trillions lost annually to land fraud worldwide',
    },
    {
      icon: Clock,
      title: 'Slow & Inefficient',
      description: 'Manual verification and approval processes taking weeks or months for simple transactions.',
      impact: '8+ weeks average processing time for property transfers',
    },
    {
      icon: Users,
      title: 'Limited Citizen Access',
      description: 'Barriers prevent people from accessing and verifying their own property information.',
      impact: 'Over 1 billion people lack secure property rights',
    },
    {
      icon: Lock,
      title: 'Data Silos',
      description: 'Isolated, incompatible systems create information gaps and hinder inter-agency cooperation.',
      impact: '60% of governments struggle with incompatible land systems',
    },
    {
      icon: AlertTriangle,
      title: 'Gender Inequality',
      description: 'Systemic barriers prevent women from securing and maintaining property rights.',
      impact: 'Women own less than 20% of land globally',
    }
  ];

  const globalImpact = [
    { value: 70, suffix: '%', label: 'Land Records Still on Paper', icon: FileText },
    { value: 1, suffix: 'B+', label: 'People Lack Secure Rights', icon: Users },
    { value: 8, suffix: 'Weeks', label: 'Average Processing Time', icon: Clock },
    { value: 20, suffix: '%', label: 'Women Land Ownership Rate', icon: AlertTriangle }
  ];

  const realWorldConsequences = [
    {
      icon: Building2,
      title: 'Economic Stagnation',
      description: 'Unclear property rights deter investment and hinder economic development.'
    },
    {
      icon: Globe,
      title: 'Social Instability',
      description: 'Land disputes account for 90% of court cases in developing countries.'
    },
    {
      icon: LandPlot,
      title: 'Environmental Impact',
      description: 'Poor land governance leads to unsustainable resource management.'
    }
  ];

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
              poster="https://via.placeholder.com/1920x1080.png?text=Challenge+Hero+Video"
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
              <span>The Global Challenge</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Broken Systems,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 mt-2">
                Broken Trust
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed bg-background/60 backdrop-blur-sm p-6 rounded-2xl"
            >
              Traditional land governance systems are failing citizens and governments alike. 
              Outdated processes create barriers to prosperity, security, and sustainable development.
            </motion.p>
          </div>
        </section>

        {/* === GLOBAL IMPACT SECTION === */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
              {/* LEFT: Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    The Scale of the Challenge
                  </h2>
                  <p className="text-lg text-foreground/70 mb-6">
                    Outdated land governance systems create multiple critical problems that 
                    affect economic growth, social stability, and individual rights worldwide.
                  </p>
                </div>

                {/* Mission Highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-primary/15 border border-primary/25 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Urgent Need for Change
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        These systemic challenges affect billions of people and trillions in economic 
                        potential. Modern solutions can transform these broken systems.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT: Stats Grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                {globalImpact.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 group text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* === CHALLENGES GRID SECTION === */}
        <section ref={ref} className="py-24 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Core Challenges
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Systemic problems in land governance that affect economic growth, social stability, and individual rights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <challenge.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {challenge.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">
                      {challenge.description}
                    </p>
                    
                    {/* Impact Badge */}
                    <div className="px-3 py-2 bg-primary/5 rounded-xl text-foreground/70 text-sm font-medium border border-primary/20">
                      {challenge.impact}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* === REAL-WORLD CONSEQUENCES SECTION === */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Real-World Impact
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                The consequences of inefficient land governance extend far beyond paperwork—they affect economies, communities, and the environment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {realWorldConsequences.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="bg-background rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}