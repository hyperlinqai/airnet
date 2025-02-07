-- Add is_featured column to plans table
ALTER TABLE plans ADD COLUMN IF NOT EXISTS is_featured BOOLEAN DEFAULT false;

-- Update existing plans to set some as featured
UPDATE plans 
SET is_featured = true 
WHERE id IN (
    SELECT id 
    FROM plans 
    ORDER BY price ASC 
    LIMIT 3
);
