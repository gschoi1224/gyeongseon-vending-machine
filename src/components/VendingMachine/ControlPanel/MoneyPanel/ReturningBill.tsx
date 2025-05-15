import { useEffect, useState } from 'react';
import { useChangeReturn } from '../../../../store/useChangeReturn';
import { getCurrencyImage } from '../../../../utils/getCurrencyImage';

export function ReturningBill() {
  const queue = useChangeReturn((s) => s.queue);
  const remove = useChangeReturn((s) => s.remove);
  const [current, setCurrent] = useState(queue.find((u) => u.type === 'bill'));

  useEffect(() => {
    // 다음 지폐를 꺼냄 (현재 없고 queue가 남아있을 때만)
    if (!current) {
      const next = queue.find((u) => u.type === 'bill');
      if (next) setCurrent(next);
    }
  }, [queue, current]);

  const handleAnimationEnd = () => {
    if (current) {
      remove(current.id);
      setCurrent(undefined);
    }
  };

  if (!current) return null;

  return (
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-20 overflow-visible z-50 flex justify-center">
      <img
        key={current.id}
        src={getCurrencyImage(current.amount)}
        alt={`${current.amount}`}
        className="absolute w-12 h-8 animate-billFall rotate-90"
        onAnimationEnd={handleAnimationEnd}
      />
    </div>
  );
}
