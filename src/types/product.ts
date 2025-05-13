
export interface ProductType {
  id: number;
  name: string;
  description: string;
  detailedDescription?: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
  ingredients?: string[];
  benefits?: string[];
  usage?: string;
}
