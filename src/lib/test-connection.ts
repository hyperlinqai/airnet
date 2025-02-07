import { supabase } from './supabase';

export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from('plans').select('*').order('price');
    
    if (error) {
      console.error('Connection Error:', error.message);
      return { success: false, error: error.message };
    }
    
    console.log('Successfully connected to Supabase!');
    return { success: true, data };
  } catch (err) {
    console.error('Unexpected error:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}
