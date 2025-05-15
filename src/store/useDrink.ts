import { create } from 'zustand';

export interface Drink {
  id: string;
  name: string;
  price: number;
  image: string;
  type: 'coffee' | 'water' | 'soda';
}

interface DrinkStore {
  drinks: Drink[];
  loadDrinks: (data: Drink[]) => void;
  getDrinkById: (id: string) => Drink | undefined;
}

export const useDrinks = create<DrinkStore>((set, get) => ({
  drinks: [],
  loadDrinks: (data) => set({ drinks: data }),
  getDrinkById: (id: string) => get().drinks.find((drink) => drink.id === id),
}));
