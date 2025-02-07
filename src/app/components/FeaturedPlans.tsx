import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { Plans } from '@/components/layout/Plans';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export default async function FeaturedPlans() {
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { data: plans } = await supabase
    .from('plans')
    .select('*')
    .eq('is_featured', true)
    .eq('is_active', true)
    .limit(3)
    .order('price', { ascending: true });

  return <Plans initialPlans={plans || []} />;
}
