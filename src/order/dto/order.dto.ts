import { z } from 'zod';

export class OrderDto {
  // Guest details
  first_name: string;
  last_name: string;
  email?: string; // optional but common
  phone_number?: string; // optional but useful

  // Booking details
  room_id: number | string;
  checkin: Date | string;
  checkout: Date | string;
  total_days: number;

  // Pricing details
  amount: number; // price per night or base amount
  total_amount: number; // total after multiplying by total_days, taxes, etc.
  currency?: string; // e.g. 'USD', 'EUR', 'INR'

  // Order / reservation status
  status?: 'pending' | 'confirmed' | 'cancelled' | 'checked_in' | 'checked_out';
  payment_status?: 'unpaid' | 'paid' | 'refunded';
  payment_method?: 'card' | 'cash';
  //   created_at?: Date;
  //   updated_at?: Date;
}

export const OrderSchema = z.object({
  // Guest details
  first_name: z
    .string()
    .min(2, 'First name must be at least 2 characters long'),
  last_name: z.string().min(2, 'Last name must be at least 2 characters long'),
  email: z.string().email('Invalid email address'),
  mobile: z
    .string()
    .min(10, 'Mobile number must be at least 10 digits')
    .max(15, 'Mobile number must not exceed 15 digits'),

  // Booking details
  room_id: z.union([z.string(), z.number()]),
  checkin: z.union([z.string(), z.date()]),
  checkout: z.union([z.string(), z.date()]),
  total_days: z.number().min(1, 'Total days must be at least 1'),

  // Pricing details
  amount: z.number().positive('Amount must be a positive number'),
  total_amount: z.number().positive('Total amount must be a positive number'),
  currency: z.string().optional().default('NAIRA'),

  // Order / reservation status
  status: z
    .enum(['pending', 'confirmed', 'cancelled', 'checked_in', 'checked_out'])
    .optional()
    .default('pending'),
  payment_status: z
    .enum(['unpaid', 'paid', 'refunded'])
    .optional()
    .default('unpaid'),
  payment_method: z.enum(['card', 'cash']).optional(),

  // Timestamps
  //   created_at: z.date().optional(),
  //   updated_at: z.date().optional(),
});
