import Ad from './Ad';
import MoneyPanel from './MoneyPanel';

export default function ControlPanel() {
  return (
    <div className="flex w-full h-40 justify-between gap-5">
      <Ad />
      <MoneyPanel />
    </div>
  );
}
