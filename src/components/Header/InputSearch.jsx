import loopLogo from "../../assets/lupa.svg";
export default function InputSearch({
  placeholder,
  isText,
  textButton,
  idInput,
}) {
  let width;
  let btnWidth;
  let flexEvenly;
  if (isText) {
    width = "w-[20rem]";
    btnWidth = "w-20";
    flexEvenly = "";
  } else {
    width = "w-[30rem]";
    btnWidth = "w-10";
    flexEvenly = "justify-evenly";
  }
  return (
    <div className={`flex ${flexEvenly} items-center`}>
      <div className={`${width} h-[3rem] relative flex items-center`}>
        <input
          name="inputSearch"
          id={idInput}
          className="w-full h-full border border-slate-400 rounded-lg px-3 focus:outline-none text-slate-800"
          placeholder={placeholder}
        />
        <button
          className={`absolute right-3 h-9 ${btnWidth} bg-pink-500 rounded-md flex justify-center text-slate-100 items-center hover:cursor-pointer hover:bg-pink-600`}
        >
          {!isText && <img className="w-5 h-5" src={loopLogo} alt="lupa"></img>}
          {isText && <span>{textButton}</span>}
        </button>
      </div>
    </div>
  );
}
