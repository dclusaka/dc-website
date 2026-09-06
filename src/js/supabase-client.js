// Shared Supabase client used across the login, members, admin, apply,
// and card pages.
const SUPABASE_URL = "https://rrrbiqxjiokmvanmmrda.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_W5l17wCvZgTNRR5kWRUDSw_WvrxCQrB";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
