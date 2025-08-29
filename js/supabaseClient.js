// /js/supabaseClient.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://YOUR-PROJECT-REF.supabase.co'     // ← عدّل
const SUPABASE_ANON_KEY = 'YOUR_PUBLIC_ANON_KEY'                 // ← عدّل

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
