"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const pranaImages = [
  { src: "/portfolio/prana/img_4d930aae2969.png", w: 2880, h: 1412, label: "écran desktop" },
  { src: "/portfolio/prana/img_791c0a0a3380.png", w: 1290, h: 2796, label: "écran mobile" },
  { src: "/portfolio/prana/img_7d2d07a36b3f.png", w: 1290, h: 2449, label: "écran mobile" },
  { src: "/portfolio/prana/img_7f2e848e586d.png", w: 1290, h: 2190, label: "écran mobile" },
  { src: "/portfolio/prana/img_a69f473feace.png", w: 1290, h: 2796, label: "écran mobile" },
  { src: "/portfolio/prana/img_d21866675b37.png", w: 2880, h: 1534, label: "écran desktop" },
  { src: "/portfolio/prana/img_dac5c57bd131.png", w: 2880, h: 1412, label: "écran desktop" },
  { src: "/portfolio/prana/img_dd2f369788fd.png", w: 1290, h: 2796, label: "écran mobile" },
  { src: "/portfolio/prana/img_e3a4b7df3625.png", w: 1290, h: 2796, label: "écran mobile" },
] as const;

export function PranaGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : i === 0 ? pranaImages.length - 1 : i - 1));
  }, []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : i === pranaImages.length - 1 ? 0 : i + 1));
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [close, prev, next]
  );

  return (
    <>
      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pranaImages.map((img, index) => {
          const landscape = img.w >= img.h;
          return (
            <button
              key={img.src}
              onClick={() => setOpenIndex(index)}
              className={cn(
                "group relative cursor-zoom-in overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 text-left",
                landscape ? "aspect-[16/10]" : "aspect-[4/3]",
                "transition hover:border-white/25"
              )}
            >
              <Image
                src={img.src}
                alt={`Prana maquette ${img.label} ${index + 1}`}
                fill
                className={cn(
                  "transition duration-500",
                  landscape ? "object-contain" : "object-cover"
                )}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/90 backdrop-blur-sm"
          onClick={close}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute right-5 top-5 rounded-full border border-white/10 bg-dark/60 p-3 text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label="Fermer"
          >
            <X className="size-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-dark/60 p-3 text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label="Image précédente"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-dark/60 p-3 text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label="Image suivante"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Image */}
          <div
            className={cn(
              "relative mx-2 sm:mx-8 md:mx-16 w-full max-h-[80vh] max-w-full",
              pranaImages[openIndex].w >= pranaImages[openIndex].h
                ? "aspect-[16/9] md:max-w-5xl md:aspect-[4/3]"
                : "aspect-[10/16] md:max-w-md"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={pranaImages[openIndex].src}
              alt={`Prana maquette ${pranaImages[openIndex].label} ${openIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-dark/60 px-4 py-1.5 text-sm text-white/80">
            {openIndex + 1} / {pranaImages.length}
          </p>
        </div>
      )}
    </>
  );
}
