-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own plans" ON plans;
DROP POLICY IF EXISTS "Users can create their own plans" ON plans;
DROP POLICY IF EXISTS "Users can update their own plans" ON plans;
DROP POLICY IF EXISTS "Users can delete their own plans" ON plans;

-- Drop trigger if exists
DROP TRIGGER IF EXISTS update_plans_updated_at ON plans;

-- Drop function if exists
DROP FUNCTION IF EXISTS update_updated_at_column();

-- Drop table if exists
DROP TABLE IF EXISTS plans;

-- Create plans table
CREATE TABLE plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL DEFAULT 0,
    features TEXT[] NOT NULL DEFAULT '{}',
    is_active BOOLEAN NOT NULL DEFAULT true,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add RLS policies
ALTER TABLE plans ENABLE ROW LEVEL SECURITY;

-- Policy for selecting plans
CREATE POLICY "Users can view their own plans"
    ON plans FOR SELECT
    USING (auth.uid() = user_id);

-- Policy for inserting plans
CREATE POLICY "Users can create their own plans"
    ON plans FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Policy for updating plans
CREATE POLICY "Users can update their own plans"
    ON plans FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Policy for deleting plans
CREATE POLICY "Users can delete their own plans"
    ON plans FOR DELETE
    USING (auth.uid() = user_id);

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_plans_updated_at
    BEFORE UPDATE ON plans
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
