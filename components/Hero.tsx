"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLOT_ONE = ["Brands", "Influencers"];
const SLOT_TWO = ["Influencers", "Brands"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLOT_ONE.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(158,124,92,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Semantic H1 for SEO + screen readers — not shown visually */}
        <h1 className="sr-only">Saeora — Influencer Marketing Agency</h1>

        {/* Visual headline (decorative, rotating) */}
        <div className="font-black uppercase leading-none tracking-tight">
          <span className="block text-[clamp(2rem,5.5vw,4.5rem)] text-white/90">
            We Connect
          </span>

          {/* Animated slot 1 */}
          <span className="block relative h-[clamp(2.8rem,8vw,6.5rem)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={`slot1-${index}`}
                className="block text-[clamp(2.5rem,7.5vw,6rem)] text-[#9E7C5C]"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-110%", opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {SLOT_ONE[index]}
              </motion.span>
            </AnimatePresence>
          </span>

          <span className="block text-[clamp(2rem,5.5vw,4.5rem)] text-white/90">
            With The Right
          </span>

          {/* Animated slot 2 */}
          <span className="block relative h-[clamp(2.8rem,8vw,6.5rem)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={`slot2-${index}`}
                className="block text-[clamp(2.5rem,7.5vw,6rem)] text-white"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-110%", opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              >
                {SLOT_TWO[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>

        {/* Subtitle */}
        <p className="mt-10 text-sm md:text-base tracking-wide text-white/50 max-w-lg mx-auto leading-relaxed">
          We make influencer marketing simple.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button asChild size="lg">
            <Link href="/contact" className="gap-3">
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#how-it-works">
              How It Works
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white">Scroll</span>
        <motion.div
          className="w-px h-10 bg-white origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
