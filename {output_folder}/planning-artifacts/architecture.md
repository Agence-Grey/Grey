---
stepsCompleted: [step-01-context, step-02-stack, step-03-data, step-04-api, step-05-routing, step-06-components, step-07-infrastructure, step-08-security]
inputDocuments: [{output_folder}/planning-artifacts/prd.md, {output_folder}/planning-artifacts/ux-design-specification.md, {output_folder}/planning-artifacts/wireframe-home.excalidraw]
workflowType: 'architecture'
project_name: "L'Agence Grey — Site Web Institutionnel"
user_name: "k0da"
date: "2026-04-12"
---

# Architecture Technique — L'Agence Grey

**Author:** k0da (via Alfred/BMAD)
**Date:** 2026-04-12
**Version:** 1.0
**Input:** PRD v1.0, UX Design Spec v1.0, Wireframes validés

---

## 1. Vue d'ensemble

### 1.1 Stack

| Couche | Technologie | Raison |
|---|---|---|
| **Frontend** | Next.js 15 (App Router) | SSR/SSG, SEO natif, file-based routing |
| **Styling** | Tailwind CSS v4 + shadcn/ui | Rapidité, cohérence, composants accessibles |
| **Backend** | Supabase (PostgreSQL) | Auth, DB, Storage, Realtime — 100% intégré |
| **Paiement** | Stripe Checkout + Billing Portal | PCI DSS compliant, abonnements |
| **Email** | Resend | Transactionnel, API simple, bon délivrabilité |
| **Hébergement** | Vercel | Edge functions, CDN, previews auto, analytics |
| **Analytics** | Vercel Analytics | Intégration native, RGPD-friendly |
| **Animations** | Framer Motion + Lottie | Scroll-triggered, performant, fallback mobile |
| **Fonts** | Poppins (Google Fonts) | Géométrique, moderne — variable font |

### 1.2 Principes d'architecture

- **App Router uniquement** — pas de Pages Router
- **Server Components par défaut** — Client Components uniquement pour interactivité
- **Mobile-first** — tous les breakpoints partent de 320px
- **SEO-first** — chaque page a ses meta tags, schema.org, sitemap
- **Edge-ready** — Supabase client côté serveur, pas de middleware lourd

---

## 2. Structure du projet

```
agence-grey-site/
├── public/
│   ├── fonts/                    # Poppins variable
│   ├── images/                   # Optimisés WebP/AVIF
│   │   ├── hero/                 # Hero assets (laptop, lumière)
│   │   ├── portfolio/            # Screenshots projets
│   │   └── team/                 # Photos Ophélie & k0da
│   ├── animations/               # Lottie JSON
│   ├── robots.txt
│   └── sitemap.xml               # Ou généré dynamiquement
│
├── src/
│   ├── app/                      # App Router — file-based routing
│   │   ├── layout.tsx            # Root layout (header, footer, fonts)
│   │   ├── page.tsx              # Home (/)
│   │   ├── globals.css           # Tailwind + custom properties
│   │   ├── loading.tsx           # Loading skeleton global
│   │   ├── error.tsx             # Error boundary global
│   │   ├── not-found.tsx         # 404 custom
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx          # /about
│   │   │
│   │   ├── services/
│   │   │   ├── page.tsx          # /services
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # /services/starter, /services/pro, /services/premium
│   │   │
│   │   ├── portfolio/
│   │   │   ├── page.tsx          # /portfolio
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # /portfolio/[nom-projet]
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx          # /contact
│   │   │
│   │   ├── devis/
│   │   │   └── page.tsx          # /devis (formulaire structuré)
│   │   │
│   │   ├── paiement/
│   │   │   ├── page.tsx          # /paiement (Stripe Checkout redirect)
│   │   │   └── success/
│   │   │       └── page.tsx      # /paiement/success
│   │   │
│   │   ├── mentions-legales/
│   │   │   └── page.tsx          # /mentions-legales
│   │   │
│   │   ├── cgv/
│   │   │   └── page.tsx          # /cgv
│   │   │
│   │   ├── confidentialite/
│   │   │   └── page.tsx          # /confidentialite
│   │   │
│   │   └── api/
│   │       ├── contact/
│   │       │   └── route.ts      # POST /api/contact
│   │       ├── devis/
│   │       │   ├── route.ts      # POST /api/devis
│   │       │   └── estimate/
│   │       │       └── route.ts  # POST /api/devis/estimate
│   │       ├── stripe/
│   │       │   ├── checkout/
│   │       │   │   └── route.ts  # POST /api/stripe/checkout
│   │       │   ├── webhook/
│   │       │   │   └── route.ts  # POST /api/stripe/webhook
│   │       │   └── portal/
│   │       │       └── route.ts  # POST /api/stripe/portal
│   │       └── sitemap/
│   │           └── route.ts      # GET /api/sitemap
│   │
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── select.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── skeleton.tsx
│   │   │   └── ...
│   │   │
│   │   ├── layout/               # Layout components
│   │   │   ├── header.tsx        # Header sticky + navigation
│   │   │   ├── mobile-menu.tsx   # Menu hamburger mobile
│   │   │   ├── footer.tsx        # Footer complet
│   │   │   └── cookie-banner.tsx # Consentement RGPD
│   │   │
│   │   ├── home/                 # Home page components
│   │   │   ├── hero.tsx          # Hero animé (Lottie/GSAP)
│   │   │   ├── hero-animation.tsx # Animation laptop + lumière
│   │   │   ├── solutions.tsx     # 3 cartes pricing
│   │   │   ├── process.tsx       # 4 étapes "comment on travaille"
│   │   │   ├── portfolio-preview.tsx # Aperçu réalisations
│   │   │   └── cta-section.tsx   # CTA final violet
│   │   │
│   │   ├── services/             # Services page components
│   │   │   ├── service-card.tsx  # Carte individuelle
│   │   │   ├── comparison-table.tsx # Tableau comparatif
│   │   │   └── addons.tsx        # Services additionnels
│   │   │
│   │   ├── portfolio/            # Portfolio components
│   │   │   ├── gallery.tsx       # Grille projets
│   │   │   ├── project-card.tsx  # Carte projet
│   │   │   └── project-detail.tsx # Page détail
│   │   │
│   │   ├── contact/              # Contact components
│   │   │   ├── contact-form.tsx  # Formulaire
│   │   │   └── contact-info.tsx  # Coordonnées
│   │   │
│   │   ├── devis/                # Devis components
│   │   │   ├── devis-form.tsx    # Formulaire multi-étapes
│   │   │   ├── devis-estimate.tsx # Estimation temps réel
│   │   │   └── devis-summary.tsx # Récapitulatif
│   │   │
│   │   ├── paiement/             # Paiement components
│   │   │   ├── stripe-checkout.tsx # Bouton Stripe
│   │   │   └── payment-status.tsx # Statut paiement
│   │   │
│   │   └── shared/               # Composants réutilisables
│   │       ├── section-wrapper.tsx # Container responsive
│   │       ├── animated-text.tsx # Texte animé (typewriter, fade)
│   │       ├── parallax.tsx      # Effet parallax
│   │       ├── seo.tsx           # Meta tags component
│   │       └── schema-org.tsx    # Schema.org JSON-LD
│   │
│   ├── lib/                      # Utilitaires & config
│   │   ├── supabase.ts           # Client Supabase (server)
│   │   ├── supabase-client.ts    # Client Supabase (browser)
│   │   ├── stripe.ts             # Client Stripe (server)
│   │   ├── resend.ts             # Client Resend
│   │   ├── utils.ts              # cn(), formatPrice(), etc.
│   │   ├── constants.ts          # Prix, offres, config
│   │   └── validations.ts        # Zod schemas (formulaires)
│   │
│   ├── hooks/                    # Custom hooks
│   │   ├── use-scroll.ts         # Scroll position
│   │   ├── use-viewport.ts       # Taille écran
│   │   └── use-intersection.ts   # Intersection Observer
│   │
│   └── types/                    # TypeScript types
│       ├── database.ts           # Types Supabase (auto-generated)
│       ├── devis.ts              # Types devis
│       └── stripe.ts             # Types Stripe
│
├── supabase/
│   ├── migrations/
│   │   └── 001_initial.sql       # Schema initial
│   └── seed.sql                  # Données de test
│
├── .env.local                    # Variables d'environnement
├── next.config.ts                # Config Next.js
├── tailwind.config.ts            # Config Tailwind
├── components.json               # Config shadcn/ui
├── package.json
└── tsconfig.json
```

---

## 3. Base de données — Supabase

### 3.1 Schema

```sql
-- ============================================================
-- TABLE: contacts
-- Formulaire de contact simple
-- ============================================================
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT,
  type_studio TEXT,                -- 'yoga', 'pole_dance', 'danse', 'autre'
  message TEXT NOT NULL,
  
  -- Tracking
  source TEXT DEFAULT 'contact',   -- 'contact', 'devis', 'portfolio'
  ip_address INET,
  user_agent TEXT,
  
  -- Status
  status TEXT DEFAULT 'nouveau'    -- 'nouveau', 'contacte', 'en_cours', 'converti', 'perdu'
    CHECK (status IN ('nouveau', 'contacte', 'en_cours', 'converti', 'perdu')),
  
  -- Index
  CONSTRAINT contacts_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_created ON contacts(created_at DESC);
CREATE INDEX idx_contacts_email ON contacts(email);

-- ============================================================
-- TABLE: devis
-- Formulaire de devis structuré (Phase 2)
-- ============================================================
CREATE TABLE devis (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  
  -- Informations client
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT,
  nom_studio TEXT NOT NULL,
  ville TEXT,
  type_studio TEXT NOT NULL          -- 'yoga', 'pole_dance', 'danse', 'crossfit', 'autre'
    CHECK (type_studio IN ('yoga', 'pole_dance', 'danse', 'crossfit', 'fitness', 'pilates', 'autre')),
  
  -- Besoins (JSONB pour flexibilité)
  besoins JSONB NOT NULL DEFAULT '[]',
  -- Ex: ["site_vitrine", "reservation_en_ligne", "paiement", "blog", "ia_chatbot"]
  
  -- Offre sélectionnée
  offre TEXT NOT NULL                -- 'starter', 'pro', 'premium'
    CHECK (offre IN ('starter', 'pro', 'premium')),
  
  -- Estimation
  estimation_min INTEGER,           -- en centimes (pour éviter les flottants)
  estimation_max INTEGER,
  estimation_affichee TEXT,         -- "1 500€" (string formatée)
  
  -- RDV
  rdv_souhaite BOOLEAN DEFAULT false,
  rdv_creneau TIMESTAMPTZ,
  
  -- Status
  status TEXT DEFAULT 'en_attente'   -- 'en_attente', 'estime', 'rdv_pris', 'devis_envoye', 'accepte', 'refuse'
    CHECK (status IN ('en_attente', 'estime', 'rdv_pris', 'devis_envoye', 'accepte', 'refuse')),
  
  -- Message
  message TEXT
);

CREATE INDEX idx_devis_status ON devis(status);
CREATE INDEX idx_devis_created ON devis(created_at DESC);
CREATE INDEX idx_devis_offre ON devis(offre);

-- ============================================================
-- TABLE: clients
-- Clients existants (Phase 3 — paiement)
-- ============================================================
CREATE TABLE clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  
  -- Infos
  nom TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  telephone TEXT,
  nom_studio TEXT NOT NULL,
  
  -- Stripe
  stripe_customer_id TEXT UNIQUE,
  
  -- Relation
  devis_id UUID REFERENCES devis(id),  -- devis d'origine
  contact_id UUID REFERENCES contacts(id),
  
  -- Status
  status TEXT DEFAULT 'actif'
    CHECK (status IN ('actif', 'suspendu', 'resilie'))
);

CREATE INDEX idx_clients_email ON clients(email);
CREATE INDEX idx_clients_stripe ON clients(stripe_customer_id);

-- ============================================================
-- TABLE: abonnements
-- Abonnements Stripe (Phase 3)
-- ============================================================
CREATE TABLE abonnements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  
  -- Relations
  client_id UUID NOT NULL REFERENCES clients(id),
  
  -- Stripe
  stripe_subscription_id TEXT UNIQUE NOT NULL,
  stripe_price_id TEXT NOT NULL,
  
  -- Détails
  offre TEXT NOT NULL                -- 'starter', 'pro', 'premium'
    CHECK (offre IN ('starter', 'pro', 'premium')),
  montant_mensuel INTEGER NOT NULL,  -- en centimes
  frequence TEXT DEFAULT 'monthly'   -- 'monthly', 'yearly'
    CHECK (frequence IN ('monthly', 'yearly')),
  
  -- Dates
  debut TIMESTAMPTZ NOT NULL,
  fin TIMESTAMPTZ,
  prochaine_facture TIMESTAMPTZ,
  
  -- Status
  status TEXT DEFAULT 'actif'
    CHECK (status IN ('actif', 'en_pause', 'annule', 'expire'))
);

CREATE INDEX idx_abonnements_client ON abonnements(client_id);
CREATE INDEX idx_abonnements_status ON abonnements(status);

-- ============================================================
-- TABLE: paiements
-- Historique des paiements (Phase 3)
-- ============================================================
CREATE TABLE paiements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  
  -- Relations
  client_id UUID NOT NULL REFERENCES clients(id),
  abonnement_id UUID REFERENCES abonnements(id),
  
  -- Stripe
  stripe_payment_intent_id TEXT,
  stripe_invoice_id TEXT UNIQUE,
  
  -- Montant
  montant INTEGER NOT NULL,          -- en centimes
  devise TEXT DEFAULT 'eur',
  
  -- Status
  status TEXT DEFAULT 'en_attente'
    CHECK (status IN ('en_attente', 'paye', 'echoue', 'rembourse')),
  
  -- Facture
  facture_url TEXT
);

CREATE INDEX idx_paiements_client ON paiements(client_id);
CREATE INDEX idx_paiements_created ON paiements(created_at DESC);

-- ============================================================
-- TABLE: portfolio
-- Projets du portfolio (admin)
-- ============================================================
CREATE TABLE portfolio (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  
  slug TEXT NOT NULL UNIQUE,
  titre TEXT NOT NULL,
  description TEXT NOT NULL,
  type_studio TEXT NOT NULL,
  
  -- Images (Supabase Storage)
  images TEXT[] DEFAULT '{}',        -- URLs Supabase Storage
  
  -- Détails
  fonctionnalites TEXT[] DEFAULT '{}',
  lien_externe TEXT,
  
  -- Publication
  publie BOOLEAN DEFAULT false,
  ordre INTEGER DEFAULT 0
);

CREATE INDEX idx_portfolio_publie ON portfolio(publie, ordre);

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE devis ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE abonnements ENABLE ROW LEVEL SECURITY;
ALTER TABLE paiements ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;

-- Public: peut insérer dans contacts et devis
CREATE POLICY "contacts_insert_public" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "devis_insert_public" ON devis
  FOR INSERT WITH CHECK (true);

-- Public: peut lire le portfolio publié
CREATE POLICY "portfolio_read_public" ON portfolio
  FOR SELECT USING (publie = true);

-- Admin (service_role): accès total
-- (Pas de policy nécessaire — service_role bypass RLS)
```

### 3.2 Storage (Supabase Storage)

```
bucket: portfolio-images
  /{projet-slug}/
    /cover.webp
    /screenshot-01.webp
    /screenshot-02.webp

bucket: team-photos
  /ophelie.webp
  /k0da.webp
  /team.webp
```

---

## 4. Routes

### 4.1 Pages (Frontend)

| Route | Page | Type | SEO |
|---|---|---|---|
| `/` | Home | SSG | H1, Schema.org WebPage |
| `/about` | À propos | SSG | H1, Schema.org AboutPage |
| `/services` | Services | SSG | H1, Schema.org Service |
| `/services/[slug]` | Service détail | SSG (dynamic) | H1, Schema.org Service |
| `/portfolio` | Portfolio | SSG | H1, Schema.org CollectionPage |
| `/portfolio/[slug]` | Projet détail | SSG (dynamic) | H1, Schema.org CreativeWork |
| `/contact` | Contact | SSG | H1, Schema.org ContactPage |
| `/devis` | Devis en ligne | CSR (client) | H1 |
| `/paiement` | Paiement | CSR (client) | noindex |
| `/paiement/success` | Confirmation | CSR | noindex |
| `/mentions-legales` | Mentions légales | SSG | noindex |
| `/cgv` | CGV | SSG | noindex |
| `/confidentialite` | Politique confidentialité | SSG | noindex |

### 4.2 API Routes (Backend)

| Route | Method | Description | Auth |
|---|---|---|---|
| `/api/contact` | POST | Enregistrer un contact | Public |
| `/api/devis` | POST | Enregistrer un devis | Public |
| `/api/devis/estimate` | POST | Calculer une estimation | Public |
| `/api/stripe/checkout` | POST | Créer une session Stripe | Public |
| `/api/stripe/webhook` | POST | Webhook Stripe (paiements) | Stripe signature |
| `/api/stripe/portal` | POST | Créer un portail client | Auth (Phase 3) |
| `/api/sitemap` | GET | Sitemap XML dynamique | Public |

### 4.3 Webhook Stripe

```typescript
// /api/stripe/webhook/route.ts
// Events gérés:
// - checkout.session.completed → créer client + abonnement
// - invoice.paid → enregistrer paiement
// - invoice.payment_failed → notifier + marquer échec
// - customer.subscription.updated → mettre à jour abonnement
// - customer.subscription.deleted → marquer résilié
```

---

## 5. Intégrations

### 5.1 Stripe

**Configuration :**
```
STRIPE_SECRET_KEY=sk_...
STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

**Products & Prices (à créer dans Stripe Dashboard) :**

| Product | Price ID | Montant | Type |
|---|---|---|---|
| Starter | price_starter_monthly | 49€/mois | Recurring |
| Pro | price_pro_monthly | 99€/mois | Recurring |
| Premium | price_premium_monthly | 199€/mois | Recurring |

**Flow paiement :**
```
Client → CTA "Payer" → /api/stripe/checkout (créer session)
  → Redirection Stripe Checkout (hébergé)
  → Paiement réussi → /paiement/success
  → Webhook → enregistrer client/abonnement/paiement dans Supabase
```

### 5.2 Resend (Email)

```
RESEND_API_KEY=re_...
```

**Emails transactionnels :**
- Confirmation contact reçu
- Confirmation devis reçu + estimation
- Facture paiement
- Notification équipe (nouveau contact/devis/paiement)

### 5.3 Supabase

```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

---

## 6. Design System — Tokens

### 6.1 Couleurs (Tailwind)

```typescript
// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: '#7F3FBF',
    hover: '#6B2FA6',
    light: '#9B5FCF',
  },
  secondary: {
    DEFAULT: '#8a2be2',
  },
  dark: '#1a1a1a',
  charcoal: '#333333',
}
```

### 6.2 Typographie

```css
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

:root {
  --font-display: 'Poppins', sans-serif;
  --font-body: 'Poppins', sans-serif;
}
```

### 6.3 Composants shadcn/ui requis

- `Button` (primary, secondary, ghost, outline)
- `Card` (services, portfolio)
- `Input`, `Textarea`, `Select` (formulaires)
- `Dialog` (modales)
- `Toast` (notifications)
- `Badge` (offres, statuts)
- `Skeleton` (loading states)
- `Accordion` (FAQ, CGV)
- `Tabs` (services comparison)
- `Separator`

---

## 7. Configuration Next.js

```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { hostname: '*.supabase.co' },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
```

---

## 8. Déploiement — Vercel

### 8.1 Configuration

```
Framework: Next.js
Build Command: next build
Output Directory: .next
Install Command: pnpm install
```

### 8.2 Variables d'environnement (Vercel)

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
STRIPE_SECRET_KEY
STRIPE_PUBLISHABLE_KEY
STRIPE_WEBHOOK_SECRET
RESEND_API_KEY
NEXT_PUBLIC_SITE_URL=https://agence-grey.fr
```

### 8.3 Domaine

```
agence-grey.fr → Vercel (DNS configuré)
www.agence-grey.fr → redirect 301 → agence-grey.fr
```

---

## 9. Plan d'implémentation — Phase 1 (MVP)

### Ordre de développement (Anti-Gravity)

```
1. Setup projet Next.js 15 + Tailwind + shadcn/ui
2. Root layout (header, footer, fonts, globals.css)
3. Home page (hero, solutions, process, portfolio-preview, CTA)
4. About page
5. Services page (+ detail pages)
6. Portfolio page (+ detail pages)
7. Contact page + /api/contact
8. Mentions légales, CGV, Confidentialité
9. SEO (meta tags, schema.org, sitemap, robots.txt)
10. Responsive pass (mobile-first)
11. Performance pass (Lighthouse > 90)
12. Deploy to Vercel
```

### Validation continue

- [ ] Lighthouse score > 90 sur chaque page
- [ ] WCAG 2.1 AA — contraste, navigation clavier
- [ ] Responsive sur 320px, 768px, 1024px, 1440px
- [ ] SEO audit (meta, schema, sitemap)
- [ ] Core Web Vitals (LCP < 2.5s, CLS < 0.1)

---

## 10. Prochaines Étapes

1. ✅ Architecture validée
2. → Create Epics & Stories (décomposer en tickets)
3. → Implementation Readiness check (gate)
4. → Anti-Gravity implémente
5. → Review + déploiement

---

*Document généré par BMAD v6.3.0 — L'Agence Grey Pipeline*
