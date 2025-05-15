import { create } from 'zustand';

export interface ReturnedUnit {
  id: string;
  amount: number;
  type: 'coin' | 'bill';
}

interface ReturnStore {
  queue: ReturnedUnit[];
  push: (unit: Omit<ReturnedUnit, 'id'>) => void;
  remove: (id: string) => void;
  reset: () => void;
}

export const useChangeReturn = create<ReturnStore>((set) => ({
  queue: [],
  push: (unit) =>
    set((state) => ({
      queue: [...state.queue, { ...unit, id: crypto.randomUUID() }],
    })),
  remove: (id) =>
    set((state) => ({
      queue: state.queue.filter((u) => u.id !== id),
    })),
  reset: () => set({ queue: [] }),
}));
