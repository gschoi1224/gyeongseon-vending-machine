import { useBalance } from '../store/useBalance';
import { useDispense } from '../store/useDispense';
import { useDrinks } from '../store/useDrink';
import { useStatus } from '../store/useStatus';
import { useVending } from '../store/useVending';
import { useCard } from '../store/useCard';

export default function dispenseDrink(slotId: string) {
  const { slots, decreaseStock } = useVending.getState();
  const { getDrinkById } = useDrinks.getState();
  const { amount, decrease } = useBalance.getState();
  const { setStatus, setMessage } = useStatus.getState();

  const slot = slots.find((s) => s.slotId === slotId);
  if (!slot) return;

  const drink = getDrinkById(slot.drinkId);
  if (!drink) return;

  if (slot.stock <= 0) {
    setStatus('EMPTY');
    setTimeout(() => {
      setStatus('READY');
    }, 2000);
    return;
  }

  const { inserted } = useCard.getState();

  if (amount < drink.price && !inserted) {
    const short = drink.price - amount;
    setStatus('INSUFFICIENT');
    setMessage(`-₩${short}`);

    setTimeout(() => {
      setStatus('READY');
    }, 2000);

    return;
  }

  setStatus('DISPENSING');
  if (amount >= drink.price) {
    decrease(drink.price);
  }
  decreaseStock(slotId);

  useDispense.getState().trigger(drink.image);

  setTimeout(() => {
    setStatus('READY');
    useDispense.getState().clear();
  }, 2000);
}
