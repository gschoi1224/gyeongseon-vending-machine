import { useDrinks } from '../../../store/useDrink';
import { useStatus } from '../../../store/useStatus';
import dispenseDrink from '../../../utils/dispenseDrink';

// DrinkItem.tsx
interface DrinkItemProps {
  drinkId: string;
  isLast?: boolean;
  isFirst?: boolean;
  stock: number;
  slotId: string;
}

export default function DrinkItem({ drinkId, stock, slotId, isLast, isFirst }: DrinkItemProps) {
  const drink = useDrinks((s) => s.getDrinkById(drinkId));
  const status = useStatus((s) => s.status);
  if (!drink) {
    return null;
  }
  return (
    <li className="flex flex-col items-center w-full">
      <div className="w-full flex-1 flex items-center justify-center">
        {drink?.image && stock > 0 ? (
          <img src={drink.image} alt={drink?.name} className="h-20 object-contain" />
        ) : (
          <span className="text-xs text-gray-400">{drink?.name}</span>
        )}
      </div>

      <div className="py-3 px-4 w-full h-5 bg-main-100 flex items-center justify-center">
        <div className="w-full bg-white text-center text-xs text-black">₩{drink?.price}</div>
      </div>

      <div
        className={`w-full h-4 flex items-center justify-center
          ${isLast ? 'bg-gradient-to-r from-white to-gray-300' : ''}
          ${isFirst ? 'bg-gradient-to-l from-white to-gray-300' : ''}`}
      >
        <button
          className="w-12 h-3.5 bg-black rounded-full relative cursor-pointer"
          onClick={() => {
            dispenseDrink(slotId);
          }}
        >
          <div
            className={`w-2 h-2 rounded-full absolute left-1 top-1/2 -translate-y-1/2 ${status === 'READY' && stock > 0 ? 'bg-red-500' : 'bg-white'}`}
          />
        </button>
      </div>
    </li>
  );
}
