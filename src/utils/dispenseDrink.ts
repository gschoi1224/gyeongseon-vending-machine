import { useBalance } from '../store/useBalance';
import { useDispense } from '../store/useDispense';
import { useDrinks } from '../store/useDrink';
import { useStatus } from '../store/useStatus';
import { useVending } from '../store/useVending';

export default function dispenseDrink(slotId: string) {
  const { slots, decreaseStock } = useVending.getState();
  const { getDrinkById } = useDrinks.getState();
  const { amount, decrease } = useBalance.getState();
  const { setStatus, setMessage } = useStatus.getState();

  const slot = slots.find((s) => s.slotId === slotId);
  if (!slot) return;

  const drink = getDrinkById(slot.drinkId);
  if (!drink) return;

  if (slot.stock <= 0) return;

  if (amount < drink.price) {
    const short = drink.price - amount;
    setStatus('INSUFFICIENT');
    setMessage(`-₩${short}`);

    setTimeout(() => {
      setStatus('READY');
    }, 2000);

    return;
  }

  // 상태 변경 및 재고/잔액 처리
  setStatus('DISPENSING');
  decrease(drink.price);
  decreaseStock(slotId);

  useDispense.getState().trigger(drink.image);

  setTimeout(() => {
    setStatus('READY');
    useDispense.getState().clear();
  }, 2000);
}
