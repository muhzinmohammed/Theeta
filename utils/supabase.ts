import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://iyokkszrbvegyrlphszb.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5b2trc3pyYnZlZ3lybHBoc3piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMDg1NjIsImV4cCI6MjA2NjY4NDU2Mn0.E0ohWCoQS15-C5i09WAplasrbM-MDabG6upTtEBWBLs"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})