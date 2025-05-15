import { DispensedDrinkVisual } from './DispensedDrinkVisual';

export default function Dispenser() {
  return (
    <div className="w-[220px] h-[60px] bg-gradient-to-br from-gray-800 to-gray-700 rounded-md border border-gray-500 shadow-inner relative overflow-hidden">
      <div className="absolute inset-1 bg-gray-900 rounded-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]" />
      <DispensedDrinkVisual />
    </div>
  );
}
