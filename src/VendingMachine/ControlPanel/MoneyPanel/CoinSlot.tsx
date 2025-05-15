export default function CoinSlot() {
  return (
    <div className="w-12 h-12 rounded-full bg-gray-400 border-2 border-gray-500 shadow-inner flex items-center justify-center">
      <div className="w-8 h-8 bg-white border border-gray-300 rounded-full shadow flex items-center justify-center relative hover:brightness-95 active:brightness-75">
        {/* 가로 선 */}
        <span className="w-4 h-0.5 bg-gray-700 absolute" />
      </div>
    </div>
  );
}
