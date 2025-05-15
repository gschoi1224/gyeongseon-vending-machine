import { currencies } from '../data/currency';

export function getCurrencyImage(amount: number): string {
  return currencies.find((c) => c.amount === amount)?.image ?? '';
}
