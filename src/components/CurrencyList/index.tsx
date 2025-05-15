import { currencies } from '../../data/currency';
import { CardSelector } from './CardSelector';
import CurrencyItem from './CurrencyItem';

export default function CurrencyList() {
  return (
    <ul className="w-[500px] h-[800px] flex flex-col justify-center items-center">
      {currencies.map((cur) => (
        <CurrencyItem key={cur.amount} amount={cur.amount} type={cur.type} image={cur.image} />
      ))}
      <CardSelector />
    </ul>
  );
}
