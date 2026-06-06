"use client";

import { motion } from "framer-motion";
import { Sparkles, DollarSign, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Sparkles,
    title: "Partnerships That Fit",
    body: "We only approach you with brands that make sense for your content and your audience. No awkward placements, no off-brand pitches.",
  },
  {
    icon: DollarSign,
    title: "Properly Compensated",
    body: "We negotiate on your behalf to make sure your work is valued correctly.",
  },
  {
    icon: Shield,
    title: "We Handle the Business",
    body: "Contracts, briefs, timelines, payments — we manage the business side so you can stay focused on creating the content you love.",
  },
];

export function ForCreators() {
  return (
    <section id="creators" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#9E7C5C] mb-6">
            For Creators
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white max-w-xl">
              Your content
              <br />
              deserves the <span className="text-[#9E7C5C]">right stage</span>
            </h2>
            <p className="text-white/50 max-w-sm leading-relaxed lg:text-right">
              You built your audience by being real. We find brands that respect
              that — and make sure you get paid properly for it.
            </p>
          </div>
        </motion.div>

        {/* Benefit cards — offset layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#1d1d1b] p-10 flex flex-col gap-6 group hover:bg-[#232320] transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                <b.icon className="w-4 h-4 text-white/60" />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-3">
                  {b.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">{b.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Button asChild variant="outline">
            <Link href="/contact">Join Our Roster</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
