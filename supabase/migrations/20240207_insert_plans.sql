-- Add new columns to plans table
ALTER TABLE plans ADD COLUMN IF NOT EXISTS category TEXT NOT NULL DEFAULT 'DATA';
ALTER TABLE plans ADD COLUMN IF NOT EXISTS speed INTEGER NOT NULL DEFAULT 0;
ALTER TABLE plans ADD COLUMN IF NOT EXISTS duration_months INTEGER NOT NULL DEFAULT 12;
ALTER TABLE plans ADD COLUMN IF NOT EXISTS ott_apps BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE plans ADD COLUMN IF NOT EXISTS iptv_channels BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE plans ADD COLUMN IF NOT EXISTS extra_days INTEGER NOT NULL DEFAULT 0;
ALTER TABLE plans ADD COLUMN IF NOT EXISTS original_price INTEGER;
ALTER TABLE plans ADD COLUMN IF NOT EXISTS is_featured BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE plans ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT true;

-- Make user_id nullable temporarily for seeding data
ALTER TABLE plans ALTER COLUMN user_id DROP NOT NULL;

-- Create admin user if not exists
DO $$
DECLARE
    admin_id uuid;
BEGIN
    -- Generate a UUID for admin
    admin_id := gen_random_uuid();
    
    -- Insert admin user if not exists
    INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, role)
    SELECT 
        admin_id,
        'admin@airnet360.com',
        crypt('admin123', gen_salt('bf')),
        NOW(),
        'admin'
    WHERE NOT EXISTS (
        SELECT 1 FROM auth.users WHERE email = 'admin@airnet360.com'
    );

    -- Get admin id if it already exists
    IF NOT FOUND THEN
        SELECT id INTO admin_id FROM auth.users WHERE email = 'admin@airnet360.com';
    END IF;

    -- Clear existing plans
    DELETE FROM plans;

    -- Insert DATA Plans
    INSERT INTO plans (name, description, price, original_price, speed, category, features, is_active, is_featured, user_id) VALUES
    ('START UP', '50 Mbps High-Speed Internet', 399, 499, 50, 'DATA', ARRAY[
      '50 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Free Installation',
      'Dedicated Support'
    ], true, true, admin_id),

    ('BRONZE', '100 Mbps High-Speed Internet', 559, 699, 100, 'DATA', ARRAY[
      '100 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Free Installation',
      'Dedicated Support'
    ], true, true, admin_id),

    ('SILVER', '150 Mbps High-Speed Internet', 719, 899, 150, 'DATA', ARRAY[
      '150 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Free Installation',
      'Dedicated Support'
    ], true, true, admin_id),

    ('GOLD', '250 Mbps High-Speed Internet', 1039, 1299, 250, 'DATA', ARRAY[
      '250 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Free Installation',
      'Priority Support'
    ], true, false, admin_id),

    ('DIAMOND', '300 Mbps High-Speed Internet', 1199, 1499, 300, 'DATA', ARRAY[
      '300 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Free Installation',
      'Priority Support'
    ], true, false, admin_id),

    ('SAPPHIRE', '500 Mbps High-Speed Internet', 1999, 2499, 500, 'DATA', ARRAY[
      '500 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Free Installation',
      'Premium Support'
    ], true, false, admin_id);

    -- Insert OTT Plans
    INSERT INTO plans (name, description, price, original_price, speed, category, ott_apps, extra_days, features, is_active, is_featured, user_id) VALUES
    ('SPARK', 'OTT Bundle with 50 Mbps', 599, 699, 50, 'OTT', true, 30, ARRAY[
      '50 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Popular OTT Apps Access',
      '30 Days Extra',
      'Free Installation'
    ], true, false, admin_id),

    ('SPARK+', 'Enhanced OTT Bundle with 50 Mbps', 649, 749, 50, 'OTT', true, 30, ARRAY[
      '50 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Premium OTT Apps Access',
      '30 Days Extra',
      'Free Installation'
    ], true, false, admin_id),

    ('ENTERTAINMENT', 'Complete Entertainment Pack with 125 Mbps', 799, 899, 125, 'OTT', true, 30, ARRAY[
      '125 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Premium OTT Apps Access',
      '30 Days Extra',
      'Free Installation'
    ], true, false, admin_id),

    ('ENTERTAINMENT+', 'Premium Entertainment Pack with 150 Mbps', 999, 1099, 150, 'OTT', true, 30, ARRAY[
      '150 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Premium OTT Apps Access',
      '30 Days Extra',
      'Free Installation'
    ], true, false, admin_id),

    ('BONANZA', 'Ultimate Entertainment Pack with 200 Mbps', 1099, 1199, 200, 'OTT', true, 30, ARRAY[
      '200 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Premium OTT Apps Access',
      '30 Days Extra',
      'Free Installation'
    ], true, false, admin_id);

    -- Insert IPTV Plans
    INSERT INTO plans (name, description, price, original_price, speed, category, iptv_channels, features, is_active, is_featured, user_id) VALUES
    ('SPARK+TV', 'IPTV Bundle with 50 Mbps', 669, 769, 50, 'IPTV', true, ARRAY[
      '50 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Hindi HD + FTA Channels',
      'Free Installation',
      'Dedicated Support'
    ], true, false, admin_id);
END $$;

-- Make user_id not null again
ALTER TABLE plans ALTER COLUMN user_id SET NOT NULL;
