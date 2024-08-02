
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://sayzgtkigxbffwnxfbnr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNheXpndGtpZ3hiZmZ3bnhmYm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MzMwODIsImV4cCI6MjAzODAwOTA4Mn0.oLIPSPsWq0KvhlPi--o_TjphO6Yx-TpSrPDAiPKfW3Q'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;