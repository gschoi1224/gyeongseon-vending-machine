import { create } from 'zustand';

export type VendingState =
  | 'READY'
  | 'INVALID'
  | 'WAITING'
  | 'DISPENSING'
  | 'OUT_OF_ORDER'
  | 'INSUFFICIENT'
  | 'RETURNING'
  | 'EMPTY';

interface StatusStore {
  status: VendingState;
  message: string;
  setStatus: (next: VendingState) => void;
  setMessage: (msg: string) => void;
}

const statusMessageMap: Record<VendingState, string> = {
  READY: 'READY',
  WAITING: 'WAIT',
  DISPENSING: 'THANKS',
  OUT_OF_ORDER: 'ERROR',
  INVALID: 'INVALID',
  INSUFFICIENT: 'INSUFF',
  RETURNING: 'RETURN',
  EMPTY: 'EMPTY',
};

export const useStatus = create<StatusStore>((set) => ({
  status: 'READY',
  message: statusMessageMap.READY,
  setStatus: (next) =>
    set(() => ({
      status: next,
      message: statusMessageMap[next],
    })),
  setMessage: (msg) => set({ message: msg }),
}));
