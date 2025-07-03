export default function ButtonLink({
  activeFilterState,
  activeFilterNew,
  onchangeState,
  children,
  isDetail,
}) {
  return (
    <>
      {!isDetail && (
        <button
          className={
            activeFilterState === activeFilterNew
              ? "text-red-600"
              : "text-slate-700"
          }
          onClick={onchangeState}
        >
          {children}
        </button>
      )}
      {isDetail && (
        <button
          className={
            activeFilterState === activeFilterNew
              ? "text-slate-800 underline font-bold text-xl"
              : "text-slate-800 font-bold text-xl"
          }
          onClick={onchangeState}
        >
          {children}
        </button>
      )}
    </>
  );
}
