"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const studioTypes = [
  { value: "yoga", label: "Studio de yoga" },
  { value: "pole_dance", label: "Studio de pole dance" },
  { value: "fitness", label: "Studio fitness / performance" },
  { value: "autre", label: "Autre activité sport" },
] as const;

const initialState = {
  nom: "",
  email: "",
  telephone: "",
  type_studio: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const updateField = (key: keyof typeof initialState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.ok === false) {
        const fieldErrors = data?.errors?.fieldErrors;
        const firstError = fieldErrors
          ? Object.values(fieldErrors).flat().find(Boolean)
          : null;

        toast.error(firstError || data?.error || "Impossible d’envoyer le message pour l’instant.");
        return;
      }

      toast.success("Message envoyé. Nous revenons vers vous rapidement.");
      setForm(initialState);
    } catch {
      toast.error("Le formulaire n’a pas pu être envoyé. Réessaie dans un instant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white" htmlFor="nom">
            Nom
          </label>
          <Input id="nom" value={form.nom} onChange={(e) => updateField("nom", e.target.value)} placeholder="Votre nom" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white" htmlFor="email">
            Email
          </label>
          <Input id="email" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="vous@exemple.fr" required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white" htmlFor="telephone">
            Téléphone
          </label>
          <Input id="telephone" value={form.telephone} onChange={(e) => updateField("telephone", e.target.value)} placeholder="06 00 00 00 00" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Type de studio</label>
          <Select value={form.type_studio} onValueChange={(value) => updateField("type_studio", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Choisir une activité" />
            </SelectTrigger>
            <SelectContent>
              {studioTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white" htmlFor="message">
          Message
        </label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="Décrivez votre besoin, votre activité et ce que vous attendez du site."
          required
        />
      </div>

      <Button type="submit" size="lg" disabled={loading}>
        {loading ? "Envoi en cours…" : "Envoyer le message"}
      </Button>
    </form>
  );
}
