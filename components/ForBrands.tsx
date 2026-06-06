"use client";

import { motion } from "framer-motion";
import { Target, Users, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Target,
    title: "The Right Audience",
    body: "Reach the right audience, save time, and boost your ROI with campaigns that actually convert. Every partnership is handpicked for relevance.",
  },
  {
    icon: Users,
    title: "Managed End-to-End",
    body: "From creator selection and outreach to negotiation and delivery — we handle every step.",
  },
  {
    icon: MessageSquare,
    title: "Authentic Content",
    body: "Creators build deep trust with their audiences. That trust transfers to your brand when the partnership is the right fit.",
  },
];

export function ForBrands() {
  return (
    <section id="brands" className="py-32 px-6 border-t border-white/5">
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
            For Brands
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white max-w-xl">
              Reach the people
              <br />
              who <span className="text-[#9E7C5C]">actually cook</span>
            </h2>
            <p className="text-white/50 max-w-sm leading-relaxed lg:text-right">
              Your ideal customer is already following our creators. We make
              the introduction.
            </p>
          </div>
        </motion.div>

        {/* Benefit cards */}
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
              <div className="w-10 h-10 rounded-full border border-[#9E7C5C]/30 flex items-center justify-center group-hover:border-[#9E7C5C] transition-colors">
                <b.icon className="w-4 h-4 text-[#9E7C5C]" />
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
          <Button asChild>
            <Link href="/contact">Work With Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
