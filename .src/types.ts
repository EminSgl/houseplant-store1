import { PlantCategory } from './data/categories';

export interface Plant {
  id: string;
  name: string;
  price: number;
  image: string;
  category: PlantCategory;
  description: string;
}

export interface CartItem {
  plant: Plant;
  quantity: number;
}