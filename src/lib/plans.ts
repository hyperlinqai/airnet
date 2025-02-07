import { supabase } from './supabase';

export interface Plan {
  id: string;
  name: string;
  description: string | null;
  price: number;
  features: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
  user_id: string;
}

export async function getPlans(): Promise<Plan[]> {
  try {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('Session error:', sessionError.message);
      return [];
    }

    if (!session?.user) {
      console.log('No authenticated user found');
      return [];
    }

    console.log('Fetching plans for user:', session.user.id);

    const { data, error } = await supabase
      .from('plans')
      .select('*')
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Database error:', error.message, error.details, error.hint);
      return [];
    }

    console.log('Plans fetched:', data);
    return data || [];
  } catch (error) {
    console.error('Error in getPlans:', error);
    return [];
  }
}

export async function getPlanById(id: string): Promise<Plan | null> {
  try {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('Session error:', sessionError.message);
      return null;
    }

    if (!session?.user) {
      console.log('No authenticated user found');
      return null;
    }

    console.log('Fetching plan:', id);

    const { data, error } = await supabase
      .from('plans')
      .select('*')
      .eq('id', id)
      .eq('user_id', session.user.id)
      .maybeSingle();

    if (error) {
      console.error('Database error:', error.message, error.details, error.hint);
      return null;
    }

    console.log('Plan fetched:', data);
    return data;
  } catch (error) {
    console.error('Error in getPlanById:', error);
    return null;
  }
}

export async function createPlan(plan: Omit<Plan, 'id' | 'created_at' | 'updated_at' | 'user_id'>): Promise<Plan | null> {
  try {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('Session error:', sessionError.message);
      return null;
    }

    if (!session?.user) {
      console.error('No authenticated user found');
      return null;
    }

    console.log('Creating plan for user:', session.user.id);
    console.log('Plan data:', plan);

    const { data, error } = await supabase
      .from('plans')
      .insert([
        {
          ...plan,
          user_id: session.user.id,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error.message, error.details, error.hint);
      return null;
    }

    console.log('Plan created:', data);
    return data;
  } catch (error) {
    console.error('Error in createPlan:', error);
    return null;
  }
}

export async function updatePlan(id: string, plan: Partial<Omit<Plan, 'id' | 'created_at' | 'user_id'>>): Promise<Plan | null> {
  try {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('Session error:', sessionError.message);
      return null;
    }

    if (!session?.user) {
      console.error('No authenticated user found');
      return null;
    }

    console.log('Updating plan:', id);
    console.log('Update data:', plan);

    // First check if the plan exists and belongs to the user
    const { data: existingPlan, error: checkError } = await supabase
      .from('plans')
      .select('id')
      .eq('id', id)
      .eq('user_id', session.user.id)
      .maybeSingle();

    if (checkError) {
      console.error('Error checking plan:', checkError);
      return null;
    }

    if (!existingPlan) {
      console.error('Plan not found or unauthorized');
      return null;
    }

    const { data, error } = await supabase
      .from('plans')
      .update({
        ...plan,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .eq('user_id', session.user.id)
      .select()
      .single();

    if (error) {
      console.error('Database error:', error.message, error.details, error.hint);
      return null;
    }

    console.log('Plan updated:', data);
    return data;
  } catch (error) {
    console.error('Error in updatePlan:', error);
    return null;
  }
}

export async function deletePlan(id: string): Promise<boolean> {
  try {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('Session error:', sessionError.message);
      return false;
    }

    if (!session?.user) {
      console.error('No authenticated user found');
      return false;
    }

    console.log('Deleting plan:', id);

    // First check if the plan exists and belongs to the user
    const { data: existingPlan, error: checkError } = await supabase
      .from('plans')
      .select('id')
      .eq('id', id)
      .eq('user_id', session.user.id)
      .maybeSingle();

    if (checkError) {
      console.error('Error checking plan:', checkError);
      return false;
    }

    if (!existingPlan) {
      console.error('Plan not found or unauthorized');
      return false;
    }

    const { error } = await supabase
      .from('plans')
      .delete()
      .eq('id', id)
      .eq('user_id', session.user.id);

    if (error) {
      console.error('Database error:', error.message, error.details, error.hint);
      return false;
    }

    console.log('Plan deleted successfully');
    return true;
  } catch (error) {
    console.error('Error in deletePlan:', error);
    return false;
  }
}
