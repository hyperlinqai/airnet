import { Plan } from '@/lib/db/schema';

export const mockPlans: Plan[] = [
  {
    id: 1,
    name: 'Basic Plan',
    speed: '30 Mbps',
    price: 599,
    original_price: 799,
    features: [
      'Unlimited Data',
      'Free Installation',
      '24/7 Support',
      'No Contract Required'
    ],
    popular: false,
    color: 'from-blue-500 to-blue-600',
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Standard Plan',
    speed: '100 Mbps',
    price: 999,
    original_price: 1299,
    features: [
      'Unlimited Data',
      'Free Installation',
      'Free WiFi Router',
      '24/7 Priority Support',
      'No Contract Required'
    ],
    popular: true,
    color: 'from-purple-500 to-purple-600',
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    name: 'Premium Plan',
    speed: '300 Mbps',
    price: 1499,
    original_price: 1999,
    features: [
      'Unlimited Data',
      'Free Installation',
      'Premium WiFi Router',
      '24/7 Priority Support',
      'Static IP Address',
      'No Contract Required'
    ],
    popular: false,
    color: 'from-green-500 to-green-600',
    created_at: new Date().toISOString()
  }
];
