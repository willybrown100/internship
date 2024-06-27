
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://uuzdtdszsboflvwxvyup.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1emR0ZHN6c2JvZmx2d3h2eXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1MDY5MjgsImV4cCI6MjAzNTA4MjkyOH0.1srquFK74zYrbN4g_Jh7N4UztuOyf8DUvtvGVNzp-jU"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase