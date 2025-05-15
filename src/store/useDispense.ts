import { create } from 'zustand';

interface DispenseState {
  image?: string;
  show: boolean;
  trigger: (image: string) => void;
  clear: () => void;
}

export const useDispense = create<DispenseState>((set) => ({
  image: undefined,
  show: false,
  trigger: (image) => set({ image, show: true }),
  clear: () => set({ image: undefined, show: false }),
}));
