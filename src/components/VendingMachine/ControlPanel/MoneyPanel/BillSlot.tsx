import { ReturningBill } from './ReturningBill';

export function BillSlot() {
  return (
    <div className="relative w-24 h-6 bg-black rounded-sm border border-gray-300 shadow-inner flex items-center justify-center text-[10px] text-white">
      지폐투입구
      <ReturningBill />
    </div>
  );
}
