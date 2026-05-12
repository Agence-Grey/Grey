"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { servicePackages } from "@/lib/content";
import { cn } from "@/lib/utils";

const STEPS = ["Informations", "Studio", "Besoins", "Offre", "Récapitulatif"] as const;

const STUDIO_TYPES = [
  "Yoga",
  "Pole dance",
  "Pilates",
  "Fitness / HIIT",
  "Danse",
  "Arts martiaux",
  "Boxe fitness",
  "Bien-être / Spa",
  "Autre",
] as const;

const NEEDS_OPTIONS = [
  "Site internet",
  "Prise de rendez-vous",
  "Paiement en ligne",
  "Blog / Actualités",
  "Automatisation IA",
  "SEO avancé",
  "Identité visuelle",
  "SEA / Google Ads",
] as const;

type FormState = {
  nom: string;
  email: string;
  telephone: string;
  nom_studio: string;
  ville: string;
  type_studio: string;
  besoins: string[];
  offre: string;
  message: string;
};

const emptyForm: FormState = {
  nom: "",
  email: "",
  telephone: "",
  nom_studio: "",
  ville: "",
  type_studio: "",
  besoins: [],
  offre: "confort",
  message: "",
};

export function DevisForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [estimation, setEstimation] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const updateField = useCallback(<K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const toggleNeed = useCallback((need: string) => {
    setForm((prev) => ({
      ...prev,
      besoins: prev.besoins.includes(need)
        ? prev.besoins.filter((n) => n !== need)
        : [...prev.besoins, need],
    }));
  }, []);

  const fetchEstimation = useCallback(async () => {
    try {
      const res = await fetch("/api/devis/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ offre: form.offre, besoins: form.besoins }),
      });
      const data = await res.json();
      if (data.ok) setEstimation(data.estimation_affichee);
    } catch {
      // ignore
    }
  }, [form.offre, form.besoins]);

  const next = useCallback(() => {
    if (step === 2) fetchEstimation();
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }, [step, fetchEstimation]);

  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);

  const validate = (): boolean => {
    switch (step) {
      case 0:
        if (!form.nom.trim() || form.nom.trim().length < 2) {
          toast.error("Veuillez entrer votre nom.");
          return false;
        }
        if (!form.email.includes("@")) {
          toast.error("Veuillez entrer un email valide.");
          return false;
        }
        return true;
      case 1:
        if (!form.nom_studio.trim() || form.nom_studio.trim().length < 2) {
          toast.error("Veuillez entrer le nom de votre studio.");
          return false;
        }
        if (!form.type_studio) {
          toast.error("Veuillez sélectionner un type de studio.");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (!validate()) return;
    next();
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        toast.success("Devis envoyé ! Nous vous recontactons sous 24h.");
        setForm(emptyForm);
        setStep(0);
        setEstimation(null);
      } else {
        toast.error("Une erreur est survenue. Réessayez.");
      }
    } catch {
      toast.error("Impossible d'envoyer le devis.");
    } finally {
      setSubmitting(false);
    }
  };

  const selectedOffer = servicePackages.find((o) => o.slug === form.offre);

  return (
    <div className="mx-auto max-w-2xl px-6 py-12 sm:px-8 lg:px-10">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          {STEPS.map((label, i) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-colors",
                  i < step ? "bg-[var(--color-accent)] text-black" :
                  i === step ? "bg-[var(--color-accent)]/20 text-[var(--color-accent)] ring-2 ring-[var(--color-accent)]/40" :
                  "bg-white/5 text-[var(--color-muted-foreground)]"
                )}
              >
                {i < step ? "✓" : i + 1}
              </div>
              <span className={cn(
                "hidden text-[0.65rem] font-medium sm:block",
                i <= step ? "text-white" : "text-[var(--color-muted-foreground)]"
              )}>
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 h-1 rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[var(--color-accent)] transition-all duration-300"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Step content */}
      <div className="min-h-[280px]">
        {step === 0 && (
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-white">Vos informations</h2>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-muted-foreground)]">Nom complet *</label>
              <Input value={form.nom} onChange={(e) => updateField("nom", e.target.value)} placeholder="Jean Dupont" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-muted-foreground)]">Email *</label>
              <Input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="jean@studio.fr" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-muted-foreground)]">Téléphone (optionnel)</label>
              <Input value={form.telephone} onChange={(e) => updateField("telephone", e.target.value)} placeholder="06 12 34 56 78" />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-white">Votre studio</h2>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-muted-foreground)]">Nom du studio *</label>
              <Input value={form.nom_studio} onChange={(e) => updateField("nom_studio", e.target.value)} placeholder="Omkara Yoga" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-muted-foreground)]">Ville (optionnel)</label>
              <Input value={form.ville} onChange={(e) => updateField("ville", e.target.value)} placeholder="Paris 11e" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-muted-foreground)]">Type de studio *</label>
              <Select value={form.type_studio} onValueChange={(v) => updateField("type_studio", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selectionner..." />
                </SelectTrigger>
                <SelectContent>
                  {STUDIO_TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-white">Vos besoins</h2>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              Selectionnez tout ce qui vous interesse. L&apos;estimation sera calculee automatiquement.
            </p>
            <div className="flex flex-wrap gap-2">
              {NEEDS_OPTIONS.map((need) => (
                <button
                  key={need}
                  type="button"
                  onClick={() => toggleNeed(need)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    form.besoins.includes(need)
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/15 text-[var(--color-accent)]"
                      : "border-white/10 bg-white/5 text-[var(--color-muted-foreground)] hover:border-white/20"
                  )}
                >
                  {need}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-white">Choisissez votre offre</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {servicePackages.map((offer) => (
                <button
                  key={offer.slug}
                  type="button"
                  onClick={() => updateField("offre", offer.slug)}
                  className={cn(
                    "rounded-[1.25rem] border p-5 text-left transition-all",
                    form.offre === offer.slug
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  )}
                >
                  <p className="text-sm font-semibold text-white">{offer.name}</p>
                  <p className="mt-1 text-lg font-bold text-white">{offer.price}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-muted-foreground)]">{offer.priceNote}</p>
                </button>
              ))}
            </div>
            {estimation && (
              <div className="rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-4 text-center">
                <p className="text-sm text-[var(--color-muted-foreground)]">Estimation personnalisée</p>
                <p className="mt-1 text-xl font-bold text-white">{estimation}</p>
              </div>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-white">Récapitulatif</h2>
            <div className="space-y-3 rounded-[1.25rem] border border-white/10 bg-white/5 p-6">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-[var(--color-muted-foreground)]">Nom</span>
                <span className="text-white">{form.nom}</span>
                <span className="text-[var(--color-muted-foreground)]">Email</span>
                <span className="text-white">{form.email}</span>
                {form.telephone && (
                  <>
                    <span className="text-[var(--color-muted-foreground)]">Téléphone</span>
                    <span className="text-white">{form.telephone}</span>
                  </>
                )}
                <span className="text-[var(--color-muted-foreground)]">Studio</span>
                <span className="text-white">{form.nom_studio}{form.ville ? ` — ${form.ville}` : ""}</span>
                <span className="text-[var(--color-muted-foreground)]">Type</span>
                <span className="text-white">{form.type_studio}</span>
                <span className="text-[var(--color-muted-foreground)]">Offre</span>
                <span className="text-white">{selectedOffer?.name ?? form.offre}</span>
              </div>
              {form.besoins.length > 0 && (
                <div>
                  <p className="text-sm text-[var(--color-muted-foreground)]">Besoins</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {form.besoins.map((n) => (
                      <Badge key={n} variant="outline" className="border-[var(--color-accent)]/30 text-[var(--color-accent)]">{n}</Badge>
                    ))}
                  </div>
                </div>
              )}
              {estimation && (
                <div className="mt-2 border-t border-white/10 pt-3">
                  <p className="text-sm text-[var(--color-muted-foreground)]">Estimation</p>
                  <p className="text-lg font-bold text-white">{estimation}</p>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-muted-foreground)]">Message (optionnel)</label>
              <Textarea
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder="Details sur votre projet..."
                rows={3}
              />
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={prev}
          disabled={step === 0}
        >
          ← Précédent
        </Button>

        {step < STEPS.length - 1 ? (
          <Button onClick={handleNext}>
            Suivant →
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={submitting}>
            {submitting ? "Envoi en cours..." : "Envoyer le devis"}
          </Button>
        )}
      </div>
    </div>
  );
}
