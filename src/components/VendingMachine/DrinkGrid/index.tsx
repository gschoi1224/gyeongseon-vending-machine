import { useVending } from '../../../store/useVending';
import DrinkItem from './DrinkItem';

export default function DrinkGrid() {
  const slots = useVending((s) => s.slots);

  return (
    <ul
      className={`bg-white w-full h-96 rounded-2xl border-10 border-main-100 
    grid grid-rows-3 grid-cols-4 `}
    >
      {slots.map((slot, i) => (
        <DrinkItem
          key={slot.slotId}
          drinkId={slot.drinkId}
          isLast={i % 4 === 3}
          isFirst={i % 4 === 0}
          stock={slot.stock}
          slotId={slot.slotId}
        />
      ))}
    </ul>
  );
}
