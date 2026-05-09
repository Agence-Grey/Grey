create table if not exists laure_conversations (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  session_id text not null unique,
  ip_address inet,
  user_agent text,
  page_url text,
  source text default 'laure_widget',
  status text default 'actif' check (status in ('actif', 'archive', 'converti')),
  messages jsonb not null default '[]'::jsonb,
  last_message_at timestamptz default now(),
  summary text,
  lead_score integer default 0 check (lead_score between 0 and 100),
  prospect_email text,
  prospect_telephone text,
  prospect_nom text,
  type_studio text,
  offre_suggeree text,
  notes_internes text
);

create index if not exists idx_laure_created on laure_conversations(created_at desc);
create index if not exists idx_laure_status on laure_conversations(status);
create index if not exists idx_laure_lead_score on laure_conversations(lead_score desc);
create index if not exists idx_laure_session on laure_conversations(session_id);

drop trigger if exists laure_set_updated_at on laure_conversations;
create trigger laure_set_updated_at before update on laure_conversations for each row execute function public.set_updated_at();

alter table laure_conversations enable row level security;

drop policy if exists laure_insert_public on laure_conversations;
create policy laure_insert_public on laure_conversations for insert with check (true);

drop policy if exists laure_select_service_role on laure_conversations;
create policy laure_select_service_role on laure_conversations for select using (true);

drop policy if exists laure_update_service_role on laure_conversations;
create policy laure_update_service_role on laure_conversations for update using (true);
