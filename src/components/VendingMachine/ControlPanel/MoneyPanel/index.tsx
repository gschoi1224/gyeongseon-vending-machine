import { LEDDisplay } from '../LEDDisplay';
import { BillSlot } from './BillSlot';
import { CardSlot } from './CardSlot';
import CoinSlot from './CoinSlot';
import ReturnButton from './ReturnButton';

export default function MoneyPanel() {
  return (
    <div className="h-30 flex justify-between bg-main-100 p-2 rounded-lg rounded-br-[100px] rounded-tr-[50px] flex-1">
      {/* 좌측 영역 */}
      <div className="flex flex-col items-center justify-between">
        <LEDDisplay />
        <BillSlot />
        <CardSlot />
      </div>
      {/* 우측 영역 */}
      <div className="flex justify-between">
        <ReturnButton />
        <CoinSlot />
      </div>
    </div>
  );
}
