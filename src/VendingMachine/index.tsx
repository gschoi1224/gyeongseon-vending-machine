import ControlPanel from './ControlPanel';
import DrinkGrid from './DrinkGrid';
import Footer from './Footer';

export default function VendingMachine() {
  return (
    <div className="flex flex-col justify-between items-center bg-main-500 w-[500px] h-[800px] rounded-lg p-10">
      <DrinkGrid />
      <ControlPanel />
      <Footer />
    </div>
  );
}
