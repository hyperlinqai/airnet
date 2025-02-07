export type UserRole = 'user' | 'admin';

export interface User {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  role: UserRole;
  phone_number: string | null;
  email_verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserUpdate {
  full_name?: string;
  avatar_url?: string;
  phone_number?: string;
  role?: UserRole;
  email_verified?: boolean;
}
