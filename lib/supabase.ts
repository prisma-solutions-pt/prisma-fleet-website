import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Missing Supabase env vars");
  return createClient(url, key, { auth: { persistSession: false } });
}

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  fleet_size: string | null;
  message: string | null;
  created_at: string;
};
