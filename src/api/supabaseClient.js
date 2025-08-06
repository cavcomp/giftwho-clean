import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://syldltpdgjxapgtlksbh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5bGRsdHBkZ2p4YXBndGxrc2JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNDk3MzMsImV4cCI6MjA2OTgyNTczM30.Fkzu2yYkLj1hvE_FqqqRS9YwoNAH_qznYjVO4EjjIoU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);