import { useEffect, useState } from 'react';
import { useChangeReturn } from '../../../store/useChangeReturn';
import { getCurrencyImage } from '../../../utils/getCurrencyImage';

export default function ReturningCoin() {
  const queue = useChangeReturn((s) => s.queue);
  const remove = useChangeReturn((s) => s.remove);
  const [current, setCurrent] = useState(() => queue.find((u) => u.type === 'coin'));

  useEffect(() => {
    if (!current) {
      const next = queue.find((u) => u.type === 'coin');
      if (next) setCurrent(next);
    }
  }, [queue, current]);

  const handleEnd = () => {
    if (current) {
      remove(current.id);
      setCurrent(undefined);
    }
  };

  if (!current) return null;

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-20 overflow-visible">
      <img
        key={current.id}
        src={getCurrencyImage(current.amount)}
        alt={`${current.amount}`}
        className="absolute animate-coinFall w-10 h-10"
        onAnimationEnd={handleEnd}
      />
    </div>
  );
}
