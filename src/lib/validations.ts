import { z } from "zod";

export const contactSchema = z.object({
  nom: z.string().min(2, "Le nom est requis."),
  email: z.string().email("Email invalide."),
  telephone: z.string().optional(),
  type_studio: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères."),
});

export const devisSchema = z.object({
  nom: z.string().min(2),
  email: z.string().email(),
  telephone: z.string().optional(),
  nom_studio: z.string().min(2),
  ville: z.string().optional(),
  type_studio: z.string().min(2),
  besoins: z.array(z.string()).default([]),
  offre: z.enum(["starter", "pro", "premium"]),
  estimation_min: z.number().int().optional(),
  estimation_max: z.number().int().optional(),
  estimation_affichee: z.string().optional(),
  rdv_souhaite: z.boolean().default(false),
  message: z.string().optional(),
});
