import DrinkItem from './DrinkItem';

export default function DrinkGrid() {
  return (
    <ul
      className={`bg-white w-full h-96 rounded-2xl border-10 border-main-100 
    grid grid-rows-3 grid-cols-4 `}
    >
      {Array(12)
        .fill(0)
        .map((rowIndex, i) => (
          <DrinkItem key={rowIndex} label="코카콜라" isLast={i % 4 === 3} isFirst={i % 4 === 0} />
        ))}
    </ul>
  );
}
