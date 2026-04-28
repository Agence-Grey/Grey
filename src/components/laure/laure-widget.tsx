"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { LaureChat } from "./laure-chat";
import { cn } from "@/lib/utils";

export function LaureWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 max-sm:bottom-4 max-sm:right-4">
      {open && (
        <div className="mb-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <LaureChat onClose={() => setOpen(false)} />
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full shadow-[0_8px_30px_rgba(168,85,247,0.35)] transition hover:scale-105",
          open
            ? "bg-white/10 text-white border border-white/10"
            : "bg-[var(--color-accent)] text-black"
        )}
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat avec Laure"}
      >
        <MessageCircle className="size-6" />
      </button>
    </div>
  );
}
