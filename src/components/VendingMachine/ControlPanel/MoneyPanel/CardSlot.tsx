import clsx from 'clsx';
import { useCard } from '../../../../store/useCard';

export function CardSlot() {
  const { inserted } = useCard();

  return (
    <div className="relative w-20 h-6 bg-gray-700 rounded-md">
      <img
        src="/currency/card.png"
        alt="카드"
        className={clsx(
          'absolute w-20 object-contain transition-all duration-500',
          'left-1/2 -translate-x-1/2',
          'shadow-[0_2px_6px_rgba(0,0,0,0.5)]',
          'transform perspective-500',
          'rotate-z-90 rotate-x-65',
          inserted ? 'translate-y-0 ' : 'translate-y-5 opacity-0'
        )}
      />
    </div>
  );
}
