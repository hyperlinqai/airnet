export interface Plan {
  id: number;
  name: string;
  speed: string;
  price: number;
  original_price: number;
  features: string[];
  popular: boolean;
  color: string;
  created_at?: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}