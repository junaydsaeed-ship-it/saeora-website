"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: label */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#9E7C5C] mb-6">
              About Saeora
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white">
              Where Food
              <br />
              Meets <span className="text-[#9E7C5C]">Influence</span>
            </h2>
          </motion.div>

          {/* Right: copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-white/70 text-lg leading-relaxed">
              Saeora is an influencer marketing agency built specifically for the
              food space. We work exclusively in the home cook niche — connecting
              food and kitchenware brands with creators who have built genuine
              trust with food-loving audiences.
            </p>
            <p className="text-white/50 leading-relaxed">
              No vanity metrics. No irrelevant placements. Just precise
              matchmaking between brands that want to grow and creators whose
              audiences are already listening.
            </p>

            {/* Divider line */}
            <div className="pt-4 flex items-center gap-6">
              <div className="w-12 h-px bg-[#9E7C5C]" />
              <p className="text-xs tracking-[0.2em] uppercase text-white/30">
                Food &amp; Kitchenware · Home Cooks · Real Reach
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
