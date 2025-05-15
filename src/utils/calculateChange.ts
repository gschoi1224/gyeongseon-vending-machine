interface CashUnit {
  amount: number;
  count: number;
}

interface ChangeResult {
  amount: number;
  count: number;
}

export function calculateChange(balance: number, cashbox: CashUnit[]): ChangeResult[] | null {
  const sorted = [...cashbox].sort((a, b) => b.amount - a.amount);
  const result: ChangeResult[] = [];
  let remaining = balance;

  for (const unit of sorted) {
    const usable = Math.min(unit.count, Math.floor(remaining / unit.amount));
    if (usable > 0) {
      result.push({ amount: unit.amount, count: usable });
      remaining -= usable * unit.amount;
    }
  }

  if (remaining > 0) return null; // 잔돈 부족
  return result;
}
