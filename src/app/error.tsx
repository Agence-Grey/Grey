"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-6 py-20 sm:px-8 lg:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">Erreur</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Le site a toussé.</h1>
      <button onClick={reset} className="mt-8 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-black">Réessayer</button>
    </div>
  );
}
