import { useEffect } from 'react';
import CurrencyList from './components/CurrencyList';
import VendingMachine from './components/VendingMachine';
import { useCashbox } from './store/useCashbox';
import { useDrinks } from './store/useDrink';
import { useVending } from './store/useVending';

function App() {
  const loadDrinks = useDrinks((s) => s.loadDrinks);
  const loadSlots = useVending((s) => s.loadSlots);
  const loadCash = useCashbox((s) => s.loadCash);

  useEffect(() => {
    async function fetchData() {
      const [drinksRes, slotsRes, cashRes] = await Promise.all([
        fetch('/data/drinks.json'),
        fetch('/data/vending.json'),
        fetch('/data/cashbox.json'),
      ]);

      const [drinks, slots, cash] = await Promise.all([
        drinksRes.json(),
        slotsRes.json(),
        cashRes.json(),
      ]);

      loadDrinks(drinks);
      loadSlots(slots);
      loadCash(cash);
    }

    fetchData().catch((err) => {
      console.error('초기 데이터 불러오기 실패:', err);
    });
  }, []);
  return (
    <main className="flex">
      <VendingMachine />
      <CurrencyList />
    </main>
  );
}

export default App;
