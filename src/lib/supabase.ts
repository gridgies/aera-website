import { createClient } from "@supabase/supabase-js";

// Lazy factory — wird erst aufgerufen wenn eine API Route tatsächlich läuft (nicht beim Build)
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase-Umgebungsvariablen fehlen. Bitte NEXT_PUBLIC_SUPABASE_URL und SUPABASE_SERVICE_ROLE_KEY in .env.local setzen."
    );
  }

  return createClient(url, key);
}

export type WaitlistEntry = {
  id?: string;
  email: string;
  topic: string;
  source?: string;
  created_at?: string;
};

export type ContactSubmission = {
  id?: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  status?: string;
  created_at?: string;
};
