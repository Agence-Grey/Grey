export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          nom: string;
          email: string;
          telephone: string | null;
          type_studio: string | null;
          message: string;
          source: string | null;
          ip_address: string | null;
          user_agent: string | null;
          status: string | null;
        };
        Insert: {
          nom: string;
          email: string;
          message: string;
          telephone?: string | null;
          type_studio?: string | null;
          source?: string | null;
          ip_address?: string | null;
          user_agent?: string | null;
          status?: string | null;
        };
        Update: Partial<Database['public']['Tables']['contacts']['Insert']>;
        Relationships: [];
      };
      devis: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          nom: string;
          email: string;
          telephone: string | null;
          nom_studio: string;
          ville: string | null;
          type_studio: string;
          besoins: Json;
          offre: string;
          estimation_min: number | null;
          estimation_max: number | null;
          estimation_affichee: string | null;
          rdv_souhaite: boolean | null;
          rdv_creneau: string | null;
          status: string | null;
          message: string | null;
        };
        Insert: {
          nom: string;
          email: string;
          nom_studio: string;
          type_studio: string;
          offre: string;
          telephone?: string | null;
          ville?: string | null;
          besoins?: Json;
          estimation_min?: number | null;
          estimation_max?: number | null;
          estimation_affichee?: string | null;
          rdv_souhaite?: boolean | null;
          rdv_creneau?: string | null;
          status?: string | null;
          message?: string | null;
        };
        Update: Partial<Database['public']['Tables']['devis']['Insert']>;
        Relationships: [];
      };
      clients: { Row: Record<string, never>; Insert: Record<string, never>; Update: Record<string, never>; Relationships: [] };
      abonnements: { Row: Record<string, never>; Insert: Record<string, never>; Update: Record<string, never>; Relationships: [] };
      paiements: { Row: Record<string, never>; Insert: Record<string, never>; Update: Record<string, never>; Relationships: [] };
      portfolio: { Row: Record<string, never>; Insert: Record<string, never>; Update: Record<string, never>; Relationships: [] };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
