import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rtjogqcndqwypkslsufi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0am9ncWNuZHF3eXBrc2xzdWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NjU3NjcsImV4cCI6MjA0NzA0MTc2N30.8gYl3vR7bVEM1Ch6Q-MabmDvK4T71pMDWti4MyfNvJE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
