"use client";

import { motion } from "framer-motion";

export function HeroAnimation() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.35),_transparent_30%),linear-gradient(180deg,_rgba(19,19,19,0.96)_0%,_rgba(8,8,8,0.98)_100%)] p-6 shadow-[0_40px_120px_rgba(88,28,135,0.35)]">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[58%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-4"
      >
        <div className="flex h-full flex-col rounded-[1.25rem] border border-white/5 bg-black/70 p-4">
          <div className="flex items-center gap-2 pb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="grid flex-1 gap-3 md:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
              <div className="mb-3 h-3 w-24 rounded-full bg-white/10" />
              <div className="space-y-2">
                <div className="h-16 rounded-2xl bg-[linear-gradient(135deg,_rgba(168,85,247,0.34),_rgba(255,255,255,0.05))]" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-20 rounded-2xl bg-white/5" />
                  <div className="h-20 rounded-2xl bg-white/5" />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <div className="mb-3 h-3 w-20 rounded-full bg-white/10" />
                <div className="space-y-2">
                  <div className="h-10 rounded-xl bg-white/5" />
                  <div className="h-10 rounded-xl bg-white/5" />
                  <div className="h-10 rounded-xl bg-[linear-gradient(135deg,_rgba(168,85,247,0.28),_rgba(255,255,255,0.05))]" />
                </div>
              </div>
              <div className="rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 p-4">
                <div className="h-3 w-24 rounded-full bg-[var(--color-accent)]/40" />
                <div className="mt-3 h-16 rounded-xl bg-[var(--color-accent)]/15" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--color-accent)]/30 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.05, 0.92, 1.05], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 -left-4 h-36 w-36 rounded-full bg-fuchsia-400/20 blur-3xl"
      />
    </div>
  );
}
