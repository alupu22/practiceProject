export default function ButtonPinkSmall({
  children,
  width,
  height,
  isActive,
  onHandleActivePage,
}) {
  return (
    <>
      {isActive && (
        <button
          onClick={onHandleActivePage}
          className={`rounded-md bg-pink-500 text-slate-50 text-bold hover:bg-pink-700`}
          style={{ width: width, height: height }}
        >
          {children}
        </button>
      )}
      {!isActive && (
        <button
          onClick={onHandleActivePage}
          className={`rounded-md text-slate-800 text-bold hover:bg-pink-500 hover:text-slate-50`}
          style={{ width: width, height: height }}
        >
          {children}
        </button>
      )}
    </>
  );
}
