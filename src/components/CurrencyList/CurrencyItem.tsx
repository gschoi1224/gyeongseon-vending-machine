import type { CurrencyType } from '../../data/currency';

export interface CurrencyItemProps {
  amount: number;
  type: CurrencyType;
  image: string;
}

export default function CurrencyItem({ amount, type, image }: CurrencyItemProps) {
  const sizeClasses = type === 'coin' ? 'w-15 h-15' : 'w-30 h-20';

  return (
    <img
      src={image}
      alt={`${amount}원`}
      className={`object-contain cursor-grab transition-opacity duration-200 ${sizeClasses}`}
      draggable={false}
    />
  );
}
