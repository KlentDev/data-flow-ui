"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/theme-toggle';

interface MobileNavProps {
  items: { name: string; href: string; id: string }[];
  activeSection: string;
}

export function MobileNav({ items, activeSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Remove duplicate Home
  const filteredItems = items.filter(item => item.id !== 'home');
  const fullMenuItems = [{ name: 'Home', href: '/', id: 'home' }, ...filteredItems];

  return (
    <div className="lg:hidden">
      {/* Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-foreground/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with solid blue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-blue-300 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel with solid blue background */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-blue-300 border-l border-primary/20 shadow-2xl z-50 p-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-primary-foreground font-bold text-sm">MLG</span>
                  </motion.div>
                  <div>
                    <span className="text-lg font-heading font-bold block">Navigation</span>
                    <div className="h-0.5 w-8 bg-primary rounded-full mt-1" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <ThemeToggle />
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-2">
                {fullMenuItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all duration-200 font-medium group ${
                        isActive
                          ? 'bg-primary/10 text-primary border border-primary/20 shadow-md'
                          : 'text-foreground/80 hover:text-primary hover:bg-primary/5 hover:border-primary/10 border border-transparent'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.id === 'home' && (
                        <Home className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-foreground/60 group-hover:text-primary'}`} />
                      )}
                      <span className="flex-1">{item.name}</span>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Footer */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="pt-6 border-t border-primary/10">
                  <p className="text-sm text-foreground/60 font-medium">
                    Medici Land Governance
                  </p>
                  <p className="text-xs text-foreground/40 mt-1">
                    Transforming land governance worldwide
                  </p>
                </div>
              </motion.div>

              {/* Close Hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-4 left-4 lg:hidden"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-foreground/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 text-foreground/60" />
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
