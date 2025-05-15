export function LEDDisplay({ message = 'READY' }: { message?: string }) {
  return (
    <div className="w-24 h-6 bg-black text-red-500 text-sm text-center leading-6 rounded-sm shadow-inner border border-gray-800 font-orbitron font-bold">
      {message}
    </div>
  );
}
