"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" size="icon" className="md:hidden" aria-label="Ouvrir le menu" onClick={() => setOpen(true)}>
        <Menu className="size-5" />
      </Button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.97)" }}
            className="fixed inset-0 z-50 backdrop-blur-2xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="flex min-h-screen flex-col px-6 pb-10 pt-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">Le web qui rassure</p>
                  <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">Navigation</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Fermer le menu">
                  <X className="size-5" />
                </Button>
              </div>

              <nav className="mt-14 flex flex-1 flex-col justify-center gap-5">
                {siteConfig.nav.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-lg font-medium text-white"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="size-4 text-[var(--color-accent)]" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm leading-6 text-[var(--color-muted-foreground)]">
                  Tu veux aller droit au but ? On passe directement par le devis guidé.
                </p>
                <Button asChild className="w-full">
                  <Link href="/devis" onClick={() => setOpen(false)}>
                    Ouvrir le devis
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
