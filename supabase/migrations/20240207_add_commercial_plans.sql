-- Add commercial plans
DO $$
DECLARE
    admin_id uuid;
BEGIN
    -- Get admin id
    SELECT id INTO admin_id FROM auth.users WHERE email = 'admin@airnet360.com';

    -- Insert Commercial DATA Plans
    INSERT INTO plans (
        name, 
        description, 
        price, 
        original_price, 
        speed, 
        category,
        features,
        is_active,
        is_featured,
        user_id
    ) VALUES
    ('BRONZE COMMERCIAL', 'Commercial Grade 100 Mbps Internet', 1199, 1499, 100, 'COMMERCIAL', ARRAY[
      '100 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Free Static IP',
      'Free Installation',
      'Priority Support',
      'Business Grade SLA',
      '24/7 Technical Support'
    ], true, false, admin_id),

    ('SILVER COMMERCIAL', 'Commercial Grade 150 Mbps Internet', 2399, 2999, 150, 'COMMERCIAL', ARRAY[
      '150 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Free Static IP',
      'Free Installation',
      'Priority Support',
      'Business Grade SLA',
      '24/7 Technical Support'
    ], true, false, admin_id),

    ('GOLD COMMERCIAL', 'Commercial Grade 250 Mbps Internet', 3999, 4999, 250, 'COMMERCIAL', ARRAY[
      '250 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Free Static IP',
      'Free Installation',
      'Premium Support',
      'Business Grade SLA',
      '24/7 Technical Support'
    ], true, false, admin_id),

    ('DIAMOND COMMERCIAL', 'Commercial Grade 300 Mbps Internet', 7199, 8999, 300, 'COMMERCIAL', ARRAY[
      '300 Mbps Speed',
      'Unlimited Data',
      '12 Months Plan',
      'Free Static IP',
      'Free Installation',
      'Premium Support',
      'Business Grade SLA',
      '24/7 Technical Support'
    ], true, false, admin_id);
END $$;
