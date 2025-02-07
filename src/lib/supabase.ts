import { createClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL');
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Plan {
  popular: boolean | undefined;
  id: string;
  name: string;
  description: string | null;
  price: number;
  original_price: number | null;
  features: string[];
  is_active: boolean;
  is_featured: boolean;
  category: 'DATA' | 'OTT' | 'IPTV' | 'COMMERCIAL';
  speed: number;
  duration_months: number;
  ott_apps: boolean;
  iptv_channels: boolean;
  extra_days: number;
  created_at: string;
  updated_at: string;
  user_id: string;
}
