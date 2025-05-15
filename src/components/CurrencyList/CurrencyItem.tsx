import { ALLOWED_CURRENCIES, type CurrencyType } from '../../data/currency';
import { useBalance } from '../../store/useBalance';
import { useCashbox } from '../../store/useCashbox';
import { useStatus } from '../../store/useStatus';

export interface CurrencyItemProps {
  amount: number;
  type: CurrencyType;
  image: string;
}

export default function CurrencyItem({ amount, type, image }: CurrencyItemProps) {
  const sizeClasses = type === 'coin' ? 'w-15 h-15' : 'w-30 h-20';
  const { status, setStatus } = useStatus();

  function handleInsert() {
    if (status !== 'READY') return;
    if (!ALLOWED_CURRENCIES.includes(amount)) {
      setStatus('INVALID');
      setTimeout(() => setStatus('READY'), 2000);
      return;
    }
    useBalance.getState().increase(amount);
    useCashbox.getState().insert(amount);
  }

  return (
    <button onClick={handleInsert}>
      <img
        src={image}
        alt={`${amount}원`}
        className={`object-contain cursor-pointer transition-opacity duration-200 ${sizeClasses}`}
        draggable={false}
      />
    </button>
  );
}
