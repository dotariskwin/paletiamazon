export interface Product {
  id: number;
  name: string;
  description: string;
  palletSize: string;
  itemCount: number;
  condition: string;
  image: string;
  category: string;
  categoryId: string;
  featured: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  comment: string;
  rating: number;
}