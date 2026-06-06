"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1d1d1b]/95 backdrop-blur-sm border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/saeora-logo-white.png"
            alt="Saeora"
            width={120}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
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
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/saeora.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Saeora on Instagram"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1d1d1b] border-t border-white/10 px-6 py-8 flex flex-col gap-6">
          {["#brands", "#creators", "#how-it-works"].map((href) => (
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
      )}
    </header>
  );
}
