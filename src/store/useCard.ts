import { create } from 'zustand';

interface CardState {
  inserted: boolean;
  toggle: () => void;
  eject: () => void;
}

export const useCard = create<CardState>((set) => ({
  inserted: false,
  toggle: () => set((s) => ({ inserted: !s.inserted })),
  eject: () => set({ inserted: false }),
}));
