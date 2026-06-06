"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true, once: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1d1d1b]/95 backdrop-blur-sm border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="text-base font-black uppercase tracking-[0.18em] text-white hover:text-white/80 transition-colors"
        >
          Saeora
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="#brands"
            className="text-xs tracking-widest uppercase text-white/70 hover:text-white transition-colors"
          >
            Brands
          </Link>
          <Link
            href="#creators"
            className="text-xs tracking-widest uppercase text-white/70 hover:text-white transition-colors"
          >
            Creators
          </Link>
          <Link
            href="#how-it-works"
            className="text-xs tracking-widest uppercase text-white/70 hover:text-white transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/contact"
            className="text-xs tracking-widest uppercase text-white/70 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/saeora.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Saeora on Instagram"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>

          {/* Mobile menu toggle — padded for larger touch target */}
          <button
            className="md:hidden p-2 -mr-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — animated */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#1d1d1b] border-t border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {(["#brands", "#creators", "#how-it-works"] as const).map((href) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {href.replace("#", "").replace(/-/g, " ")}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
