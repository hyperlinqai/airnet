-- Create plans table if it doesn't exist
CREATE TABLE IF NOT EXISTS plans (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    speed VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    original_price DECIMAL(10,2) NOT NULL,
    features TEXT[] NOT NULL,
    popular BOOLEAN DEFAULT false,
    color VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample plans if table is empty
INSERT INTO plans (name, speed, price, original_price, features, popular, color)
SELECT * FROM (VALUES
    (
        'Basic Plan',
        '10 Mbps',
        29.99,
        39.99,
        ARRAY['10 Mbps Download Speed', 'Unlimited Data', '24/7 Customer Support', 'Basic Router Included'],
        false,
        'blue-500'
    ),
    (
        'Standard Plan',
        '50 Mbps',
        49.99,
        59.99,
        ARRAY['50 Mbps Download Speed', 'Unlimited Data', '24/7 Priority Support', 'Advanced Router Included', 'Free Installation'],
        true,
        'purple-500'
    ),
    (
        'Premium Plan',
        '100 Mbps',
        79.99,
        99.99,
        ARRAY['100 Mbps Download Speed', 'Unlimited Data', '24/7 VIP Support', 'Premium Router Included', 'Free Installation', 'Static IP Address', 'Network Security Suite'],
        false,
        'pink-500'
    )
) AS v (name, speed, price, original_price, features, popular, color)
WHERE NOT EXISTS (SELECT 1 FROM plans LIMIT 1);
