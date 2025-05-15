import { create } from 'zustand';

export interface VendingSlot {
  slotId: string;
  position: { row: number; col: number };
  drinkId: string;
  stock: number;
}

interface VendingStore {
  slots: VendingSlot[];
  loadSlots: (data: VendingSlot[]) => void;
  decreaseStock: (slotId: string) => void;
}

export const useVending = create<VendingStore>((set) => ({
  slots: [],
  loadSlots: (data) => set({ slots: data }),
  decreaseStock: (slotId) =>
    set((state) => ({
      slots: state.slots.map((slot) =>
        slot.slotId === slotId && slot.stock > 0 ? { ...slot, stock: slot.stock - 1 } : slot
      ),
    })),
}));
