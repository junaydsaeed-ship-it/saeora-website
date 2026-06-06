"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="py-20 md:py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#9E7C5C] mb-6">
              Ready to start?
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white">
              Let&apos;s Build
              <br />
              Something <span className="text-[#9E7C5C]">Real</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contact?type=brand" className="gap-3">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact?type=creator">Join Our Roster</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
