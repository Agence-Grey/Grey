export type OfferSlug = "starter" | "pro" | "premium";

export type DevisRequest = {
  nom: string;
  email: string;
  telephone?: string;
  nom_studio: string;
  ville?: string;
  type_studio: string;
  besoins: string[];
  offre: OfferSlug;
  estimation_min?: number;
  estimation_max?: number;
  estimation_affichee?: string;
  rdv_souhaite?: boolean;
  message?: string;
};
