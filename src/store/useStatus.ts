import { create } from 'zustand';

export type VendingState = 'READY' | 'INSERTING' | 'WAITING' | 'DISPENSING' | 'OUT_OF_ORDER';

interface StatusStore {
  status: VendingState;
  setStatus: (next: VendingState) => void;
}

export const useStatus = create<StatusStore>((set) => ({
  status: 'READY',
  setStatus: (next) => set({ status: next }),
}));
