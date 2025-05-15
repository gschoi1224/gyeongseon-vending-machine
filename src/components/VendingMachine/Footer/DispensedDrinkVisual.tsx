import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useDispense } from '../../../store/useDispense';

export function DispensedDrinkVisual() {
  const { image, show } = useDispense();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [show]);

  if (!image) return null;
  return (
    <img
      src={image}
      alt="dispensed drink"
      className={clsx(
        'absolute left-1/2 bottom-16 w-16 h-16 object-contain transform origin-bottom',
        'rotate-[270deg]',
        'transition-transform duration-300 ease-[cubic-bezier(0.3, 1.5, 0.4, 1)]',
        visible ? 'translate-y-12 scale-125 opacity-100' : 'translate-y-0 scale-50 opacity-0'
      )}
      style={{ zIndex: 50 }}
    />
  );
}
