import CurrencyList from './components/CurrencyList';
import VendingMachine from './components/VendingMachine';

function App() {
  return (
    <main className="flex">
      <VendingMachine />
      <CurrencyList />
    </main>
  );
}

export default App;
