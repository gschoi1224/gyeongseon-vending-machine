import { useEffect } from 'react';
import { useBalance } from '../../../../store/useBalance';
import { useCashbox } from '../../../../store/useCashbox';
import { useStatus } from '../../../../store/useStatus';
import calculateChangeWithRemainder from '../../../../utils/calculateChange';
import { useChangeReturn } from '../../../../store/useChangeReturn';

export default function ReturnButton() {
  const queue = useChangeReturn((s) => s.queue);
  const { setStatus, setMessage } = useStatus.getState();
  const handleReturn = () => {
    const balance = useBalance.getState().amount;

    if (balance <= 0) {
      console.warn('반환할 금액이 없습니다');
      setStatus('EMPTY');
      setTimeout(() => {
        setStatus('READY');
      }, 2000);
      return;
    }

    const cashbox = useCashbox.getState().cash;
    const { change, unreturned } = calculateChangeWithRemainder(balance, cashbox);

    if (unreturned > 0) {
      console.warn('거스름돈이 부족합니다.');
      setStatus('INSUFFICIENT');
      setMessage('NOCHNG');
      setTimeout(() => {
        setStatus('READY');
      }, 2000);
      return;
    }

    setStatus('RETURNING');
    change?.forEach(({ amount, count }) => {
      for (let i = 0; i < count; i++) {
        useCashbox.getState().decrement(amount);
        useChangeReturn.getState().push({
          amount,
          type: amount <= 500 ? 'coin' : 'bill',
        });
      }
    });

    useBalance.getState().decrease(balance - unreturned);
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
