interface CashUnit {
  amount: number;
  count: number;
}

interface ChangeResult {
  amount: number;
  count: number;
}

interface ChangeOutput {
  change: ChangeResult[]; // 반환 가능한 화폐
  unreturned: number; // 반환 못한 금액
}

export default function calculateChangeWithRemainder(
  balance: number,
  cashbox: CashUnit[]
): ChangeOutput {
  const sorted = [...cashbox].sort((a, b) => b.amount - a.amount);
  const result: ChangeResult[] = [];
  let remaining = balance;

  for (const unit of sorted) {
    const usable = Math.min(unit.count, Math.floor(remaining / unit.amount));
    console.log(unit, usable, remaining);
    if (usable > 0) {
      result.push({ amount: unit.amount, count: usable });
      remaining -= usable * unit.amount;
    }
  }

  return {
    change: result,
    unreturned: remaining,
  };
}
