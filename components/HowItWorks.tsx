"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "You Reach Out",
    body: "Whether you're a brand looking for reach or a creator looking for the right partnerships — it starts with a conversation. Tell us what you're building.",
  },
  {
    number: "02",
    title: "We Find the Fit",
    body: "We identify the best match from our network. For brands, that means creators whose audiences overlap with your customer. For creators, brands that suit your niche and voice.",
  },
  {
    number: "03",
    title: "We Make It Happen",
    body: "Saeora manages outreach, negotiation, contracts, and delivery. From first contact to final content — we run the process so both sides get what they need.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 border-t border-white/5">
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
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white">
            How It Works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-px">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-8 md:gap-16 p-10 border-t border-white/5 hover:border-[#9E7C5C]/20 transition-colors"
            >
              <span className="text-5xl font-black text-white/10 group-hover:text-[#9E7C5C]/20 transition-colors leading-none">
                {step.number}
              </span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white self-center">
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed self-center">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
