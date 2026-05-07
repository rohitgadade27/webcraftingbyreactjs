import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoIcon from "../assets/logo-icon.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = ["Home", "Services", "Pricing", "Why Us", "Contact"];

  const textColor = isScrolled ? "!text-white" : "!text-white";
  const mutedTextColor = isScrolled ? "!text-white/40" : "!text-white/40";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] px-8 lg:px-16 h-16 flex items-center justify-between backdrop-blur-md bg-black/20 border-b border-white/5 transition-all duration-300">
        {/* Left: Logo */}
        <div className="flex items-center gap-4 h-full">
          <img src={logoIcon} alt="Logo" className="h-full w-auto object-contain py-2" />
          <div className="flex flex-col">
            <span
              className="text-2xl font-heading leading-none tracking-tight uppercase font-bold"
              style={{ color: 'white' }}
            >
              react.js.ai
            </span>
            <span
              className="text-[10px] font-body tracking-[0.2em] uppercase opacity-40 font-medium"
              style={{ color: 'white' }}
            >
              THINK.CODE.LAUNCH
            </span>
          </div>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.replace(/\s+/g, '-').toLowerCase()}`}
              className="px-3 py-2 text-sm font-medium font-body transition-colors opacity-70 hover:opacity-100"
              style={{ color: 'white' }}
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="ml-2 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium flex items-center gap-1 hover:bg-white/90 transition-all"
          >
            Get Started
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full transition-colors relative z-[70] hover:bg-black/5"
            style={{ color: 'white' }}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar (Top level for z-index) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[1000] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-[400px] bg-black/40 backdrop-blur-3xl flex flex-col p-8 shadow-2xl border-l border-white/10"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div className="flex flex-col text-white">
                  <span className="text-3xl font-heading leading-none tracking-tight uppercase font-bold">react.js.ai</span>
                  <span className="text-sm font-body tracking-[0.2em] text-white/40 uppercase mt-2 font-medium">think.codelaunch</span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-3 text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="flex flex-col gap-1 mt-8 overflow-y-auto">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.replace(/\s+/g, '-').toLowerCase()}`}
                    onClick={(e) => {
                      closeMenu();
                      const id = link.replace(/\s+/g, '-').toLowerCase();
                      const element = document.getElementById(id);
                      if (element) {
                        e.preventDefault();
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-4xl font-heading font-medium text-white/80 hover:text-white transition-all py-6 border-b border-white/5 active:bg-white/5 px-2 rounded-lg flex items-center justify-between group"
                  >
                    {link}
                    <ArrowUpRight className="w-8 h-8 text-white/20 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <button
                  onClick={() => {
                    closeMenu();
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-white text-black rounded-full px-8 py-6 text-xl font-bold flex items-center justify-center gap-3 hover:bg-white/90 transition-all shadow-lg active:scale-95"
                >
                  Get Started
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
