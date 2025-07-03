export default function ButtonPink({ children, width, height, onAddToCart }) {
  return (
    <>
      <button
        onClick={onAddToCart}
        className={`rounded-md bg-pink-500 text-slate-50 text-bold hover:bg-pink-700`}
        style={{ width: width, height: height }}
      >
        {children}
      </button>
    </>
  );
}
