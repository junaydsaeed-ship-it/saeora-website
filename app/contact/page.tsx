"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Button } from "@/components/ui/button";

type Role = "brand" | "creator" | "";

export default function ContactPage() {
  const [role, setRole] = useState<Role>(() => {
    if (typeof window === "undefined") return "";
    const type = new URLSearchParams(window.location.search).get("type");
    return type === "brand" || type === "creator" ? type : "";
  });
  const [roleError, setRoleError] = useState("");
  const [state, handleFormspreeSubmit] = useForm("mwvjvyky");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!role) {
      e.preventDefault();
      setRoleError("Please select whether you are a brand or a creator.");
      return;
    }
    setRoleError("");
    handleFormspreeSubmit(e);
  }

  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Minimal header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1d1d1b]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="text-base font-black uppercase tracking-[0.18em] text-white hover:text-white/80 transition-colors"
          >
            Saeora
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {!state.succeeded ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-[#9E7C5C] mb-6">
                Get In Touch
              </p>
              <h1 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tight text-white mb-4">
                Let&apos;s Talk
              </h1>
              <p className="text-white/50 leading-relaxed mb-14">
                Whether you&apos;re a brand looking to grow through the right
                creators, or a creator looking for partnerships that fit — we
                want to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden field so Formspree captures the role value */}
                <input type="hidden" name="role" value={role} />

                {/* Role selector */}
                <div>
                  <label className="block text-xs tracking-widest uppercase text-white/40 mb-3">
                    I am a
                  </label>
                  <div className="flex gap-3">
                    {(["brand", "creator"] as Role[]).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => { setRole(r); setRoleError(""); }}
                        className={`flex-1 h-12 text-xs tracking-widest uppercase border transition-all duration-200 ${
                          role === r
                            ? "border-[#9E7C5C] text-[#9E7C5C] bg-[#9E7C5C]/10"
                            : "border-white/10 text-white/40 hover:border-white/30 hover:text-white/70"
                        }`}
                      >
                        {r === "brand" ? "Brand" : "Creator"}
                      </button>
                    ))}
                  </div>
                  {roleError && (
                    <p className="mt-2 text-sm text-red-400">{roleError}</p>
                  )}
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-widest uppercase text-white/40 mb-3"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border border-white/10 focus:border-[#9E7C5C] outline-none px-5 h-12 text-white placeholder:text-white/20 text-sm transition-colors"
                  />
                  <ValidationError
                    field="name"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-400 block"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-widest uppercase text-white/40 mb-3"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-transparent border border-white/10 focus:border-[#9E7C5C] outline-none px-5 h-12 text-white placeholder:text-white/20 text-sm transition-colors"
                  />
                  <ValidationError
                    field="email"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-400 block"
                  />
                </div>

                {/* Brand name (conditional) */}
                {role === "brand" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <label
                      htmlFor="brand"
                      className="block text-xs tracking-widest uppercase text-white/40 mb-3"
                    >
                      Brand / Company Name
                    </label>
                    <input
                      id="brand"
                      name="brand"
                      type="text"
                      placeholder="Your brand name"
                      className="w-full bg-transparent border border-white/10 focus:border-[#9E7C5C] outline-none px-5 h-12 text-white placeholder:text-white/20 text-sm transition-colors"
                    />
                  </motion.div>
                )}

                {/* Platform handle (conditional) */}
                {role === "creator" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <label
                      htmlFor="platform"
                      className="block text-xs tracking-widest uppercase text-white/40 mb-3"
                    >
                      Your Platform / Handle
                    </label>
                    <input
                      id="platform"
                      name="platform"
                      type="text"
                      placeholder="@yourhandle or channel name"
                      className="w-full bg-transparent border border-white/10 focus:border-[#9E7C5C] outline-none px-5 h-12 text-white placeholder:text-white/20 text-sm transition-colors"
                    />
                  </motion.div>
                )}

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-widest uppercase text-white/40 mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you're looking for…"
                    className="w-full bg-transparent border border-white/10 focus:border-[#9E7C5C] outline-none px-5 py-4 text-white placeholder:text-white/20 text-sm transition-colors resize-none"
                  />
                  <ValidationError
                    field="message"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-400 block"
                  />
                </div>

                {/* Form-level errors (network / server) */}
                <ValidationError
                  errors={state.errors}
                  className="text-sm text-red-400 block"
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={state.submitting}
                  className="w-full gap-3"
                >
                  {state.submitting ? "Sending…" : "Send Message"}
                  {!state.submitting && <Send className="w-4 h-4" />}
                </Button>
              </form>

              {/* Alt contact */}
              <div className="mt-16 pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div>
                  <p className="text-xs tracking-widest uppercase text-white/30 mb-1">
                    Email directly
                  </p>
                  <a
                    href="mailto:junayd@saeora.space"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    junayd@saeora.space
                  </a>
                </div>
                <div className="w-px h-8 bg-white/10 hidden sm:block" />
                <div>
                  <p className="text-xs tracking-widest uppercase text-white/30 mb-1">
                    Instagram
                  </p>
                  <a
                    href="https://www.instagram.com/saeora.agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <InstagramIcon className="w-3 h-3" />
                    @saeora.agency
                  </a>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-24"
            >
              <div className="w-16 h-16 rounded-full border border-[#9E7C5C]/30 flex items-center justify-center mx-auto mb-8">
                <Send className="w-6 h-6 text-[#9E7C5C]" />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">
                Message Sent
              </h2>
              <p className="text-white/50 mb-10 max-w-sm mx-auto leading-relaxed">
                Thanks for reaching out. We&apos;ll be in touch shortly.
              </p>
              <Button asChild variant="outline">
                <Link href="/">Back to Home</Link>
              </Button>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
