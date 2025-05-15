import { useBalance } from '../../../store/useBalance';
import { useStatus } from '../../../store/useStatus';

export function LEDDisplay() {
  const status = useStatus((s) => s.status);
  const message = useStatus((s) => s.message);
  const amount = useBalance((s) => s.amount);

  let displayText = '';

  if (status !== 'READY') {
    // READY가 아닐 경우 무조건 메시지 우선
    displayText = message;
  } else if (amount > 0) {
    // READY 상태이면서 금액이 있으면 금액 표시
    displayText = `₩${amount}`;
  } else {
    // READY 상태이고 금액도 없음
    displayText = 'READY';
  }

  return (
    <div className="w-24 h-6 bg-black text-red-500 text-sm text-center leading-6 rounded-sm shadow-inner border border-gray-800 font-orbitron font-bold">
      {displayText}
    </div>
  );
}
