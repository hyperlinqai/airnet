import { supabase } from './supabase';

export interface Profile {
  id: string;
  full_name: string | null;
  email: string | null;
  created_at: string;
  updated_at: string;
}

export async function getCurrentProfile(): Promise<Profile | null> {
  try {
    // First get the current user
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('Session error:', sessionError.message);
      return null;
    }

    if (!session?.user) {
      console.log('No authenticated user found');
      return null;
    }

    console.log('Current user:', session.user.id);

    // Then get their profile
    const { data, error } = await supabase
      .from('profiles')
      .select('id, full_name, email, created_at, updated_at')
      .eq('id', session.user.id)
      .maybeSingle();

    if (error) {
      console.error('Database error:', error.message, error.details, error.hint);
      return null;
    }

    if (!data) {
      console.log('No profile found, creating one...');
      // Create a new profile
      const newProfile = await createProfile({
        full_name: session.user.user_metadata?.full_name || '',
        email: session.user.email,
      });

      if (!newProfile) {
        console.error('Failed to create new profile');
        return null;
      }

      return newProfile;
    }

    console.log('Profile found:', data);
    return data;
  } catch (error) {
    console.error('Error in getCurrentProfile:', error);
    return null;
  }
}

export async function updateProfile(profile: Partial<Profile>): Promise<Profile | null> {
  try {
    // First get the current user
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('Session error:', sessionError.message);
      return null;
    }

    if (!session?.user) {
      console.error('No authenticated user found');
      return null;
    }

    console.log('Updating profile for user:', session.user.id);
    console.log('Update data:', profile);

    // Check if profile exists
    const { data: existingProfile, error: checkError } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', session.user.id)
      .maybeSingle();

    if (checkError) {
      console.error('Error checking profile:', checkError);
      return null;
    }

    if (!existingProfile) {
      console.log('No profile found, creating one...');
      return createProfile(profile);
    }

    // Update existing profile
    const { data, error } = await supabase
      .from('profiles')
      .update({
        ...profile,
        updated_at: new Date().toISOString(),
      })
      .eq('id', session.user.id)
      .select('id, full_name, email, created_at, updated_at')
      .single();

    if (error) {
      console.error('Database error:', error.message, error.details, error.hint);
      return null;
    }

    console.log('Profile updated:', data);
    return data;
  } catch (error) {
    console.error('Error in updateProfile:', error);
    return null;
  }
}

export async function createProfile(profile: Partial<Profile>): Promise<Profile | null> {
  try {
    // First get the current user
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('Session error:', sessionError.message);
      return null;
    }

    if (!session?.user) {
      console.error('No authenticated user found');
      return null;
    }

    console.log('Creating profile for user:', session.user.id);
    console.log('Profile data:', profile);

    // Create new profile
    const { data, error } = await supabase
      .from('profiles')
      .insert([
        {
          id: session.user.id,
          full_name: profile.full_name || '',
          email: profile.email || session.user.email,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select('id, full_name, email, created_at, updated_at')
      .single();

    if (error) {
      console.error('Database error:', error.message, error.details, error.hint);
      return null;
    }

    console.log('Profile created:', data);
    return data;
  } catch (error) {
    console.error('Error in createProfile:', error);
    return null;
  }
}
