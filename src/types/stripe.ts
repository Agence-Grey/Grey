export type StripeCheckoutMetadata = {
  offer: "essentiel" | "confort" | "booster";
  clientEmail?: string;
  clientName?: string;
  studioName?: string;
};

export type StripePriceId = string;

/** Map offer slugs to Stripe price IDs (configure in Stripe Dashboard) */
export const offerPriceIds: Record<string, { setup_fee?: StripePriceId; recurring?: StripePriceId }> = {
  essentiel: {
    setup_fee: process.env.STRIPE_PRICE_ESSENTIEL ?? "",
  },
  confort: {
    setup_fee: process.env.STRIPE_PRICE_CONFORT_SETUP ?? "",
    recurring: process.env.STRIPE_PRICE_CONFORT_MONTHLY ?? "",
  },
  booster: {
    setup_fee: process.env.STRIPE_PRICE_BOOSTER_SETUP ?? "",
    recurring: process.env.STRIPE_PRICE_BOOSTER_MONTHLY ?? "",
  },
};
