import clsx from 'clsx';
import { useCard } from '../../store/useCard';

export function CardSelector() {
  const { inserted, toggle } = useCard();

  return (
    <li>
      <button onClick={toggle}>
        <img
          src="/currency/card.png"
          alt="카드"
          className={clsx(
            'w-40 cursor-pointer transition-transform duration-200',
            inserted && 'brightness-75'
          )}
        />
      </button>
    </li>
  );
}
