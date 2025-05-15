import { create } from 'zustand';

interface BalanceStore {
  amount: number;
  increase: (value: number) => void;
  decrease: (value: number) => void;
  reset: () => void;
}

export const useBalance = create<BalanceStore>((set) => ({
  amount: 0,
  increase: (value) => set((state) => ({ amount: state.amount + value })),
  decrease: (value) => set((state) => ({ amount: state.amount - value })),
  reset: () => set({ amount: 0 }),
}));
