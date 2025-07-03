import HeaderElems from "./HeaderElems.jsx";
import HeaderSecondRow from "./HeaderSecondRow.jsx";
export default function Header() {
  return (
    <div className="grid grid-rows-[50px_70px] text-slate-50">
      <div className="bg-purple-600 grid grid-cols-2">
        <HeaderElems />
      </div>
      <div className="bg-slate-50 grid grid-cols-2">
        <HeaderSecondRow />
      </div>
    </div>
  );
}
