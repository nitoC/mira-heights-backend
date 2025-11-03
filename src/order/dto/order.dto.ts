import { z } from 'zod';

export class OrderDto {
  // Guest details
  full_name: string;
  email: string; // optional but common
  phone?: string; // optional but useful

  // Booking details
  room: string;
  checkin: Date | string;
  checkout: Date | string;
  // Pricing details
  amount: number; // price per night or base amount
  total_amount: number; // total after multiplying by total_days, taxes, etc.
  currency?: string;

  // Order / reservation status 'success' | 'cancelled' | 'pending' | 'error';
  status?: 'pending' | 'confirmed' | 'cancelled' | 'checked_in' | 'checked_out';
  payment_status?: 'unpaid' | 'paid' | 'refunded' | 'processing';
  // payment_method?: 'card' | 'cash';
  created_at?: Date;
  updated_at?: Date;
}

export const OrderSchema = z.object({
  // Guest details
  full_name: z.string().min(2, 'First name must be at least 2 characters long'),
  // last_name: z.string().min(2, 'Last name must be at least 2 characters long'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .min(10, 'Mobile number must be at least 10 digits')
    .max(15, 'Mobile number must not exceed 15 digits'),

  // Booking details
  room: z.union([z.string()]),
  checkin: z.union([z.string(), z.date()]),
  checkout: z.union([z.string(), z.date()]),
  // total_days: z.number().min(1, 'Total days must be at least 1'),

  // Pricing details
  amount: z.number().positive('Amount must be a positive number'),
  total_amount: z.number().positive('Total amount must be a positive number'),
  currency: z.string().optional().default('NAIRA'),

  // Order / reservation status
  status: z
    .enum([
      'pending',
      'confirmed',
      'cancelled',
      'checked_in',
      'checked_out',
      'error',
    ])
    .optional()
    .default('pending'),
  payment_status: z
    .enum(['unpaid', 'paid', 'refunded', 'processing'])
    .optional()
    .default('unpaid'),
  // payment_method: z.enum(['card', 'cash']).optional(),

  // Timestamps
  //   created_at: z.date().optional(),
  //   updated_at: z.date().optional(),
});
