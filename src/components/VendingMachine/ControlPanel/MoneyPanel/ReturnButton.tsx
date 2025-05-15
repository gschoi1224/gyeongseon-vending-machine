import { useEffect } from 'react';
import { useBalance } from '../../../../store/useBalance';
import { useCashbox } from '../../../../store/useCashbox';
import { useStatus } from '../../../../store/useStatus';
import { calculateChange } from '../../../../utils/calculateChange';
import { useChangeReturn } from '../../../../store/useChangeReturn';

export default function ReturnButton() {
  const queue = useChangeReturn((s) => s.queue);
  const { setStatus } = useStatus.getState();
  const handleReturn = () => {
    const balance = useBalance.getState().amount;
    const cashbox = useCashbox.getState().cash;
    const change = calculateChange(balance, cashbox);

    if (!change || change.length === 0) {
      console.warn('거스름돈을 줄 수 없습니다');
      return;
    }

    setStatus('RETURNING');
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

  useEffect(() => {
    if (queue.length === 0) {
      // 지연 후 상태 복구
      const timeout = setTimeout(() => {
        setStatus('READY');
      }, 300); // 큐가 다 빠졌는지 확인한 후 딜레이

      return () => clearTimeout(timeout);
    }
  }, [queue]);

  return (
    <button
      onClick={handleReturn}
      className={`w-5 h-5 rounded-full border-gray-500 border-2 bg-red-500 cursor-pointer`}
    ></button>
  );
}
