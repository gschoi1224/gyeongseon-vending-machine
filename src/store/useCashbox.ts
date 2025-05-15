import { create } from 'zustand';

export interface CashUnit {
  amount: number;
  type: 'coin' | 'bill';
  count: number;
}

interface CashboxStore {
  cash: CashUnit[];
  loadCash: (data: CashUnit[]) => void;
  increment: (amount: number) => void;
  decrement: (amount: number) => void;
  insert: (amount: number) => void;
}

export const useCashbox = create<CashboxStore>((set) => ({
  cash: [],
  loadCash: (data) => set({ cash: data }),
  increment: (amount) =>
    set((state) => ({
      cash: state.cash.map((unit) =>
        unit.amount === amount ? { ...unit, count: unit.count + 1 } : unit
      ),
    })),
  decrement: (amount) =>
    set((state) => ({
      cash: state.cash.map((unit) =>
        unit.amount === amount && unit.count > 0 ? { ...unit, count: unit.count - 1 } : unit
      ),
    })),
  insert: (amount: number) =>
    set((state) => ({
      cash: state.cash.map((unit) =>
        unit.amount === amount ? { ...unit, count: unit.count + 1 } : unit
      ),
    })),
}));
