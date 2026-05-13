"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const views = [
  { type: "desktop" as const, label: "Version desktop" },
  { type: "mobile" as const, label: "Version mobile" },
];

function MockupPlaceholder({ type }: { type: "desktop" | "mobile" }) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      {/* Fake browser/screen content */}
      <div className="w-full space-y-2 px-4">
        {/* Header bar */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/60" />
            <span className="h-2 w-2 rounded-full bg-amber-300/60" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
          </div>
          <div className="ml-3 h-1.5 flex-1 rounded-full bg-white/10" />
        </div>

        {/* Content blocks */}
        <div className="mt-3 space-y-2">
          <div className="h-2 w-3/4 rounded-full bg-white/10" />
          <div className="h-2 w-1/2 rounded-full bg-white/5" />
        </div>

        {/* Cards */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="h-12 rounded-xl bg-[linear-gradient(135deg,_rgba(168,85,247,0.25),_rgba(255,255,255,0.03))]" />
          <div className="h-12 rounded-xl bg-white/5" />
          <div className="h-12 rounded-xl bg-white/5" />
        </div>

        {/* Image placeholder row */}
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="h-10 rounded-xl bg-white/5" />
          <div className="h-10 rounded-xl bg-white/5" />
        </div>

        {/* Footer nav */}
        <div className="mt-2 flex gap-2">
          <div className="h-1.5 w-12 rounded-full bg-white/10" />
          <div className="h-1.5 w-12 rounded-full bg-[var(--color-accent)]/50" />
          <div className="h-1.5 w-12 rounded-full bg-white/10" />
        </div>

        {type === "mobile" && (
          <>
            {/* Extra mobile-only elements */}
            <div className="mt-2 h-8 rounded-xl bg-white/5" />
            <div className="mt-1.5 grid grid-cols-4 gap-1.5">
              <div className="aspect-square rounded-lg bg-[var(--color-accent)]/15" />
              <div className="aspect-square rounded-lg bg-white/5" />
              <div className="aspect-square rounded-lg bg-white/5" />
              <div className="aspect-square rounded-lg bg-white/5" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function HeroAnimation() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % views.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const view = views[current];

  return (
    <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center">
      {/* Ambient glows */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-[var(--color-accent)]/25 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-8 -left-4 h-32 w-32 rounded-full bg-fuchsia-400/15 blur-3xl"
      />

      {/* Device frame */}
      <AnimatePresence mode="wait">
        <motion.div
          key={view.type}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-full"
        >
          {view.type === "desktop" ? (
            /* Desktop frame */
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] shadow-[0_40px_120px_rgba(88,28,135,0.3)]">
              {/* Top bar */}
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
                <div className="ml-2 h-1.5 w-40 rounded-full bg-white/10" />
              </div>
              {/* Screen */}
              <div className="aspect-[16/10] overflow-hidden p-4">
                <MockupPlaceholder type="desktop" />
              </div>
            </div>
          ) : (
            /* Mobile frame */
            <div className="mx-auto w-[200px]">
              <div className="rounded-[2rem] border border-white/15 bg-[#0d0d0d] p-2 shadow-[0_30px_80px_rgba(88,28,135,0.3)]">
                {/* Notch */}
                <div className="mx-auto mb-2 h-4 w-20 rounded-b-xl bg-dark/60" />
                {/* Screen */}
                <div className="aspect-[9/19] overflow-hidden rounded-[1.25rem] bg-dark/70 p-3">
                  <MockupPlaceholder type="mobile" />
                </div>
                {/* Home bar */}
                <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-white/20" />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {views.map((v, i) => (
          <button
            key={v.type}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-[var(--color-accent)]"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
