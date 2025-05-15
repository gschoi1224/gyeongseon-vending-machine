import CoinReturnSlot from './CoinReturnSlot';
import Dispenser from './Dispenser';

export default function Footer() {
  return (
    <div className="flex gap-5 justify-center">
      <Dispenser />
      <CoinReturnSlot />
    </div>
  );
}
