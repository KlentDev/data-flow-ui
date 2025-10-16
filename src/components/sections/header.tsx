"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MobileNav } from "@/components/ui/mobile-nav";
import { Search } from "@/components/ui/search";
import { usePathname } from "next/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrolled(latest > 0.1);
  });

  useEffect(() => {
    setMounted(true);
    const currentPage = pathname.split("/").pop() || "home";
    setActiveSection(currentPage === "" ? "home" : currentPage);
  }, [pathname]);

  if (!mounted) return null;

  const navigationItems = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/about", id: "about" },
    {
      name: "Solutions",
      href: "/solution",
      id: "solution",
      dropdown: [
        { name: "Document Intelligence (DocAI)", href: "/solution/doc-ai" },
        { name: "Property Wallet", href: "/solution/property-wallet" },
        { name: "Smart Search Portals", href: "/solution/smart-search" },
        { name: "Drone & Aerial Mapping", href: "/solution/drone-mapping" },
        { name: "Systematic Land Titling", href: "/solution/land-titling" },
      ],
    },
    { name: "Challenges", href: "/challenge", id: "challenge" },
    { name: "Technology", href: "/technology", id: "technology" },
    { name: "Global Impact", href: "/global", id: "global-impact" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 
        ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-[rgba(174,213,156,0.3)] shadow-md"
            : "bg-transparent border-transparent shadow-none"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      {/* Consistent height wrapper */}
      <div
        className={`container mx-auto px-6 flex items-center justify-between relative transition-all duration-500 ${
          scrolled ? "py-3" : "py-3"
        }`}
      >
        {/* Logo */}
        <motion.a
          href="/"
          className="relative group"
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
        >
          <motion.div className="w-12 h-12 bg-gradient-to-br from-[#AED59C] to-[#8BC34A] rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-sm tracking-wider">
              MLG
            </span>
          </motion.div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navigationItems.map((item, index) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;
            const hasDropdown = !!item.dropdown;

            return (
              <motion.div
                key={item.id}
                className="relative"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onHoverStart={() => {
                  setHoveredItem(item.id);
                  if (hasDropdown) setDropdownOpen(true);
                }}
                onHoverEnd={() => {
                  setHoveredItem(null);
                  if (hasDropdown) setDropdownOpen(false);
                }}
              >
                <a
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#AED59C] drop-shadow-[0_0_10px_rgba(174,213,156,0.8)]"
                      : "text-foreground/70 hover:text-[#AED59C] hover:drop-shadow-[0_0_8px_rgba(174,213,156,0.5)]"
                  }`}
                >
                  <span className="relative flex items-center gap-1 z-10">
                    {item.name}
                    {hasDropdown && (
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    )}
                  </span>
                </a>

                {/* Dropdown */}
                {hasDropdown && (
                  <AnimatePresence>
                    {dropdownOpen && isHovered && (
                      <motion.div
                        className="absolute top-full left-0 mt-3 w-64 rounded-xl shadow-lg overflow-hidden border"
                        style={{
                          backgroundColor: "hsla(var(--background) / 0.95)",
                          borderColor: "hsla(var(--primary) / 0.3)",
                          backdropFilter: "blur(16px)",
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      >
                        <div className="flex flex-col p-2">
                          {item.dropdown!.map((dropdownItem, i) => (
                            <motion.a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="px-4 py-2 text-sm text-foreground/70 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              {dropdownItem.name}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            );
          })}
        </nav>

        {/* Right-side Actions */}
        <div className="flex items-center space-x-3 relative z-[1000]">
          <Search />
          <motion.div whileHover={{ scale: 1.05, rotate: 10 }}>
            <ThemeToggle />
          </motion.div>
          <motion.div className="block lg:hidden" whileHover={{ scale: 1.05 }}>
            <MobileNav items={navigationItems} activeSection={activeSection} />
          </motion.div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-[#AED59C] to-[#8BC34A] origin-left"
        style={{
          scaleX: scrollYProgress,
          boxShadow: "0 0 8px rgba(174,213,156,0.5)",
        }}
      />
    </motion.header>
  );
}
