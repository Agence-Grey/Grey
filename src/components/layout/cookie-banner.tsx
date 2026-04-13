"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "agence-grey-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    setVisible(!consent);
  }, []);

  const saveConsent = (value: "accepted" | "refused") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-[1.5rem] border border-white/10 bg-[#111]/95 p-4 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">Cookies & confidentialité</p>
              <p className="max-w-2xl text-sm leading-6 text-[var(--color-muted-foreground)]">
                Ce site utilise les cookies strictement nécessaires et peut activer une mesure d’audience sobre. Tu peux accepter ou rester au strict minimum.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button size="sm" variant="secondary" onClick={() => saveConsent("refused")}>
                Refuser le superflu
              </Button>
              <Button size="sm" onClick={() => saveConsent("accepted")}>
                Accepter
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
