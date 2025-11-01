export interface IRoom {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  capacity: number;
  bedType: string;
  amenities: string[];
  available: boolean;
  images: string[];
}
