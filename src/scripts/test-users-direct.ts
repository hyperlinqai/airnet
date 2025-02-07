import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase credentials');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testUsers() {
  try {
    // Test user registration
    const { data: authUser, error: signUpError } = await supabase.auth.signUp({
      email: 'test@airnet360.com',
      password: 'test123456',
      options: {
        data: {
          full_name: 'Test User',
          avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=test'
        }
      }
    });

    if (signUpError) {
      throw signUpError;
    }

    console.log('Created auth user:', authUser);

    // Wait a moment for the trigger to create the user profile
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Fetch the created user
    const { data: user, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('email', 'test@airnet360.com')
      .single();

    if (fetchError) {
      throw fetchError;
    }

    console.log('Retrieved user from database:', user);

    // Test user update
    const { data: updatedUser, error: updateError } = await supabase
      .from('users')
      .update({
        phone_number: '+1234567890',
        role: 'admin'
      })
      .eq('email', 'test@airnet360.com')
      .select()
      .single();

    if (updateError) {
      throw updateError;
    }

    console.log('Updated user:', updatedUser);

  } catch (error) {
    console.error('Error testing users:', error);
  }
}

testUsers();
