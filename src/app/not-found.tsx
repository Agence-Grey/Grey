import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-6 py-20 sm:px-8 lg:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Page introuvable</h1>
      <p className="mt-4 text-lg leading-8 text-[var(--color-muted-foreground)]">La route existe peut-être dans le plan, pas encore dans le code.</p>
      <Link href="/" className="mt-8 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-black">Retour à l’accueil</Link>
    </div>
  );
}
