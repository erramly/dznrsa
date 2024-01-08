import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://icxblgzglhqeatbffmfh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljeGJsZ3pnbGhxZWF0YmZmbWZoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDM4Mzg3OSwiZXhwIjoyMDE1OTU5ODc5fQ.V9_7piyRfHsgb5iPMQg9kh_ISrHFtVDKvjRZ1nxC1kI"
);
