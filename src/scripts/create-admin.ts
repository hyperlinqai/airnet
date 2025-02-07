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

async function createAdminUser() {
  try {
    // Create admin user in auth
    const { data: authUser, error: signUpError } = await supabase.auth.signUp({
      email: 'airnet360@gmail.com',
      password: 'admin123456', // You should change this password after first login
      options: {
        data: {
          full_name: 'Tehseen khan',
          email_verified: true,
          phone_number: '8823831234'
        }
      }
    });

    if (signUpError) {
      throw signUpError;
    }

    console.log('Created auth user:', authUser);

    // Wait for the trigger to create the user profile
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Update user profile with admin role and additional details
    const { data: updatedUser, error: updateError } = await supabase
      .from('users')
      .update({
        role: 'admin',
        phone_number: '8823831234',
        email_verified: true,
        full_name: 'Tehseen khan'
      })
      .eq('email', 'airnet360@gmail.com')
      .select()
      .single();

    if (updateError) {
      throw updateError;
    }

    console.log('Created admin user:', updatedUser);

  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

createAdminUser();
