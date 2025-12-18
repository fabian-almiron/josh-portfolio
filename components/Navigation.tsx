"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode, mounted]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none"
      >
        <div className="flex items-center gap-2 pointer-events-auto">
            {/* Dark Mode Toggle */}
            <motion.button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-lg shadow-black/[0.03] ring-1 ring-black/[0.05] dark:ring-white/[0.05] hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {mounted ? (
                isDarkMode ? (
                  <Sun size={18} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <Moon size={18} className="text-gray-700 dark:text-gray-300" />
                )
              ) : (
                <Moon size={18} className="text-gray-700" />
              )}
            </motion.button>

            {/* Main Pill */}
            <div className="flex items-center p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-lg shadow-black/[0.03] ring-1 ring-black/[0.05] dark:ring-white/[0.05]">
                
                {/* Logo Pill */}
                <motion.button
                    onClick={() => scrollToSection("#home")}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-bold text-sm mr-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    JT
                </motion.button>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.replace("#", "");
                        return (
                            <button
                                key={item.href}
                                type="button"
                                onClick={() => scrollToSection(item.href)}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer",
                                    isActive ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-gray-100 dark:bg-gray-700 rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {item.label}
                            </button>
                        );
                    })}
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden pr-2">
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Contact Button (Desktop) */}
                <div className="hidden md:block pl-2 border-l border-gray-200 dark:border-gray-700 ml-2">
                    <button
                        type="button"
                        onClick={() => scrollToSection("#contact")}
                        className="px-4 py-2 text-sm font-medium bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                        Let&apos;s Talk
                    </button>
                </div>
            </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed top-24 inset-x-4 z-50 md:hidden"
            >
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl ring-1 ring-black/5 dark:ring-white/5 p-4 space-y-2">
                    {navItems.map((item) => {
                         const isActive = activeSection === item.href.replace("#", "");
                         return (
                            <button
                                key={item.href}
                                type="button"
                                onClick={() => scrollToSection(item.href)}
                                className={cn(
                                    "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer",
                                    isActive 
                                        ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100" 
                                        : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-100"
                                )}
                            >
                                {item.label}
                            </button>
                         );
                    })}
                     <button
                        type="button"
                        onClick={() => scrollToSection("#contact")}
                        className="w-full mt-2 px-4 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                        Let&apos;s Talk
                    </button>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
