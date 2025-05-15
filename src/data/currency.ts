export type CurrencyType = 'coin' | 'bill';

export interface Currency {
  amount: number; // 금액
  type: CurrencyType; // coin or bill
  image: string; // 이미지 경로
  enabled?: boolean; // (선택) 투입 가능 여부
}

export const currencies: Currency[] = [
  { amount: 50, type: 'coin', image: '/currency/50.png' },
  { amount: 100, type: 'coin', image: '/currency/100.png' },
  { amount: 500, type: 'coin', image: '/currency/500.png' },
  { amount: 1000, type: 'bill', image: '/currency/1000.jpeg' },
  { amount: 5000, type: 'bill', image: '/currency/5000.jpeg' },
  { amount: 10000, type: 'bill', image: '/currency/10000.jpeg' },
  { amount: 50000, type: 'bill', image: '/currency/50000.jpeg' },
];

export const ALLOWED_CURRENCIES = [100, 500, 1000, 5000, 10000];
