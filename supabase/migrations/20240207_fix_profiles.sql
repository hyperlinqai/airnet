-- Drop all possible versions of get_current_profile function
DO $$ 
BEGIN
    DROP FUNCTION IF EXISTS public.get_current_profile();
    EXCEPTION WHEN OTHERS THEN 
    NULL;
END $$;

DO $$ 
BEGIN
    DROP FUNCTION IF EXISTS public.get_current_profile(OUT id uuid, OUT full_name text, OUT email text, OUT created_at timestamp with time zone, OUT updated_at timestamp with time zone);
    EXCEPTION WHEN OTHERS THEN 
    NULL;
END $$;

DO $$ 
BEGIN
    DROP FUNCTION IF EXISTS public.get_current_profile() CASCADE;
    EXCEPTION WHEN OTHERS THEN 
    NULL;
END $$;

-- Drop existing policies
DROP POLICY IF EXISTS "Public profiles are viewable by everyone." ON profiles;
DROP POLICY IF EXISTS "Users can insert their own profile." ON profiles;
DROP POLICY IF EXISTS "Users can update own profile." ON profiles;
DROP POLICY IF EXISTS "Enable read access for all users" ON profiles;
DROP POLICY IF EXISTS "Enable insert access for authenticated users only" ON profiles;
DROP POLICY IF EXISTS "Enable update access for users based on id" ON profiles;

-- Drop existing trigger
DROP TRIGGER IF EXISTS on_profile_updated ON profiles;

-- Drop existing function
DROP FUNCTION IF EXISTS public.handle_updated_at();

-- Recreate the profiles table
DROP TABLE IF EXISTS public.profiles CASCADE;
CREATE TABLE public.profiles (
    id uuid REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    full_name text,
    email text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    CONSTRAINT profiles_email_key UNIQUE (email)
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create updated_at function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language plpgsql;

-- Create trigger for updated_at
CREATE TRIGGER on_profile_updated
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Create policies with proper checks
CREATE POLICY "Enable read access for all users"
    ON public.profiles
    FOR SELECT
    USING (true);

CREATE POLICY "Enable insert access for authenticated users only"
    ON public.profiles
    FOR INSERT
    WITH CHECK (auth.uid() = id);

CREATE POLICY "Enable update access for users based on id"
    ON public.profiles
    FOR UPDATE
    USING (auth.uid() = id);

-- Create function to get current user's profile
CREATE OR REPLACE FUNCTION public.get_current_profile()
RETURNS TABLE (
    id uuid,
    full_name text,
    email text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
)
LANGUAGE sql
SECURITY definer
SET search_path = public
STABLE
AS $$
    SELECT 
        p.id,
        p.full_name,
        p.email,
        p.created_at,
        p.updated_at
    FROM public.profiles p
    WHERE p.id = auth.uid();
$$;
