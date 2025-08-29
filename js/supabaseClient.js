// /js/supabaseClient.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://uzfqgbhdunqtmhvzzrzh.supabase.co' 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6ZnFnYmhkdW5xdG1odnp6cnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0ODE0NzQsImV4cCI6MjA3MjA1NzQ3NH0._LsAV2usMfIQHwVK0V2brokv8fWWDCvYBXyLgUVAOhw'               

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

