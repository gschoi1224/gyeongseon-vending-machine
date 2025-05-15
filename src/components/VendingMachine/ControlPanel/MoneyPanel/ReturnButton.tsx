import { useBalance } from '../../../../store/useBalance';
import { useCashbox } from '../../../../store/useCashbox';
import { useChangeReturn } from '../../../../store/useChangeReturn';
import { calculateChange } from '../../../../utils/calculateChange';

export default function ReturnButton() {
  const handleReturn = () => {
    const balance = useBalance.getState().amount;
    const cashbox = useCashbox.getState().cash;
    const change = calculateChange(balance, cashbox);

    if (!change || change.length === 0) {
      console.warn('거스름돈을 줄 수 없습니다');
      return;
    }

    change.forEach(({ amount, count }) => {
      for (let i = 0; i < count; i++) {
        useCashbox.getState().decrement(amount);
        useChangeReturn.getState().push({
          amount,
          type: amount <= 500 ? 'coin' : 'bill',
        });
      }
    });

    useBalance.getState().reset();
  };
  return (
    <button
      onClick={handleReturn}
      className={`w-5 h-5 rounded-full border-gray-500 border-2 bg-red-500 cursor-pointer`}
    ></button>
  );
}
