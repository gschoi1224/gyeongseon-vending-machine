// DrinkItem.tsx
interface DrinkItemProps {
  label: string;
  imgSrc?: string;
  isLast?: boolean;
  isFirst?: boolean;
}

export default function DrinkItem({ label, imgSrc, isLast, isFirst }: DrinkItemProps) {
  return (
    <li className="flex flex-col items-center w-full">
      {/* 음료 이미지 */}
      <div className="w-full flex-1 flex items-center justify-center">
        {imgSrc ? (
          <img src={imgSrc} alt={label} className="h-20 object-contain" />
        ) : (
          <span className="text-xs text-gray-400">EMPTY</span>
        )}
      </div>

      {/* 라벨 (가격/이름) */}
      <div className="py-3 px-4 w-full h-5 bg-main-100 flex items-center justify-center">
        <div className="w-full bg-white text-center text-xs text-black">{label}</div>
      </div>

      {/* 선택 버튼 칸 */}
      <div
        className={`w-full h-6 flex items-center justify-center
          ${isLast ? 'bg-gradient-to-r from-white to-gray-300' : ''}
          ${isFirst ? 'bg-gradient-to-l from-white to-gray-300' : ''}`}
      >
        <div className="w-12 h-3.5 bg-black rounded-full relative">
          <div className="w-2 h-2 bg-red-600 rounded-full absolute left-1 top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </li>
  );
}
