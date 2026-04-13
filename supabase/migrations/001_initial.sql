create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists contacts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  nom text not null,
  email text not null,
  telephone text,
  type_studio text,
  message text not null,
  source text default 'contact',
  ip_address inet,
  user_agent text,
  status text default 'nouveau' check (status in ('nouveau', 'contacte', 'en_cours', 'converti', 'perdu')),
  constraint contacts_email_check check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);
create index if not exists idx_contacts_status on contacts(status);
create index if not exists idx_contacts_created on contacts(created_at desc);
create index if not exists idx_contacts_email on contacts(email);

create table if not exists devis (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  nom text not null,
  email text not null,
  telephone text,
  nom_studio text not null,
  ville text,
  type_studio text not null check (type_studio in ('yoga', 'pole_dance', 'danse', 'crossfit', 'fitness', 'pilates', 'autre')),
  besoins jsonb not null default '[]'::jsonb,
  offre text not null check (offre in ('starter', 'pro', 'premium')),
  estimation_min integer,
  estimation_max integer,
  estimation_affichee text,
  rdv_souhaite boolean default false,
  rdv_creneau timestamptz,
  status text default 'en_attente' check (status in ('en_attente', 'estime', 'rdv_pris', 'devis_envoye', 'accepte', 'refuse')),
  message text
);
create index if not exists idx_devis_status on devis(status);
create index if not exists idx_devis_created on devis(created_at desc);
create index if not exists idx_devis_offre on devis(offre);

create table if not exists clients (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  nom text not null,
  email text not null unique,
  telephone text,
  nom_studio text not null,
  stripe_customer_id text unique,
  devis_id uuid references devis(id),
  contact_id uuid references contacts(id),
  status text default 'actif' check (status in ('actif', 'suspendu', 'resilie'))
);
create index if not exists idx_clients_email on clients(email);
create index if not exists idx_clients_stripe on clients(stripe_customer_id);

create table if not exists abonnements (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  client_id uuid not null references clients(id),
  stripe_subscription_id text unique not null,
  stripe_price_id text not null,
  offre text not null check (offre in ('starter', 'pro', 'premium')),
  montant_mensuel integer not null,
  frequence text default 'monthly' check (frequence in ('monthly', 'yearly')),
  debut timestamptz not null,
  fin timestamptz,
  prochaine_facture timestamptz,
  status text default 'actif' check (status in ('actif', 'en_pause', 'annule', 'expire'))
);
create index if not exists idx_abonnements_client on abonnements(client_id);
create index if not exists idx_abonnements_status on abonnements(status);

create table if not exists paiements (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  client_id uuid not null references clients(id),
  abonnement_id uuid references abonnements(id),
  stripe_payment_intent_id text,
  stripe_invoice_id text unique,
  montant integer not null,
  devise text default 'eur',
  status text default 'en_attente' check (status in ('en_attente', 'paye', 'echoue', 'rembourse')),
  facture_url text
);
create index if not exists idx_paiements_client on paiements(client_id);
create index if not exists idx_paiements_created on paiements(created_at desc);

create table if not exists portfolio (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  slug text not null unique,
  titre text not null,
  description text not null,
  type_studio text not null,
  images text[] default '{}',
  fonctionnalites text[] default '{}',
  lien_externe text,
  publie boolean default false,
  ordre integer default 0
);
create index if not exists idx_portfolio_publie on portfolio(publie, ordre);

drop trigger if exists contacts_set_updated_at on contacts;
create trigger contacts_set_updated_at before update on contacts for each row execute function public.set_updated_at();
drop trigger if exists devis_set_updated_at on devis;
create trigger devis_set_updated_at before update on devis for each row execute function public.set_updated_at();
drop trigger if exists clients_set_updated_at on clients;
create trigger clients_set_updated_at before update on clients for each row execute function public.set_updated_at();
drop trigger if exists abonnements_set_updated_at on abonnements;
create trigger abonnements_set_updated_at before update on abonnements for each row execute function public.set_updated_at();
drop trigger if exists portfolio_set_updated_at on portfolio;
create trigger portfolio_set_updated_at before update on portfolio for each row execute function public.set_updated_at();

alter table contacts enable row level security;
alter table devis enable row level security;
alter table clients enable row level security;
alter table abonnements enable row level security;
alter table paiements enable row level security;
alter table portfolio enable row level security;

drop policy if exists contacts_insert_public on contacts;
create policy contacts_insert_public on contacts for insert with check (true);
drop policy if exists devis_insert_public on devis;
create policy devis_insert_public on devis for insert with check (true);
drop policy if exists portfolio_read_public on portfolio;
create policy portfolio_read_public on portfolio for select using (publie = true);
