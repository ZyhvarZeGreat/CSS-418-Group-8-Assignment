import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "./database.types";
export const supabase: SupabaseClient<Database> = createClient(
  `${import.meta.env.VITE_SUPABASE_AUTH_URL}`,
  `${import.meta.env.VITE_SUPABASE_AUTH_API_KEY}`
);
