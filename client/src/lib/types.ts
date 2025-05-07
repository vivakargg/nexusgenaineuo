export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface PaymentIntentRequest {
  planId: string;
  amount: number | null;
  currency: string;
}

export interface SubscriptionRequest {
  planId: string;
  customerId?: string;
}

export interface LeadEntry {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: Date;
}

export interface PaymentIntent {
  id: string;
  clientSecret: string;
  amount: number;
  currency: string;
  status: string;
  created: Date;
}
