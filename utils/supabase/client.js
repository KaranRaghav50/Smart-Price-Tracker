import { createBrowserClient } from "@supabase/ssr";
  
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createClient = () => {
  if (!supabaseUrl || !supabaseKey) {
    return {
      auth: {
        signInWithOAuth: async () => {
          alert(
            "Supabase credentials are not configured yet. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
          );
        },
      },
    };
  }
  return createBrowserClient(supabaseUrl, supabaseKey);
};
