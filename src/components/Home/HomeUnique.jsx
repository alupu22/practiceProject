import chairLogo from "../../assets/chair.png";
import chairBg from "../../assets/chairBg.png";
import ButtonPink from "./ButtonPink.jsx";
export default function HomeUnique() {
  return (
    <div className="mt-20 bg-violet-50 grid grid-cols-2 justify-center items-center">
      <div className="relative w-full h-[40rem] flex items-center justify-center">
        <img className="absolute z-20" src={chairLogo} alt="chair" />
        <img className="absolute z-10" src={chairBg} alt="chair-bg" />
      </div>
      <div>
        <h1 className="text-slate-700 font-bold text-3xl mb-10 w-[30rem]">
          Unique Features of Latest & Trending Products
        </h1>
        <p className="text-slate-500 mb-2">
          <span className="inline-block rounded-full bg-red-600 w-2 h-2 mr-4" />
          All frames constructed with hardwood solids and laminates
        </p>
        <p className="text-slate-500 mb-2">
          <span className="inline-block rounded-full bg-violet-700 w-2 h-2 mr-4" />
          Reinforced with double wood dowels, glue, screw - nails corner{" "}
        </p>
        <p className="text-slate-500 mb-2">
          <span className="inline-block rounded-full bg-green-500 w-2 h-2 mr-4" />
          Arms, backs and seats are structurally reinforced
        </p>
        <p className="mt-10 flex items-center gap-3">
          <ButtonPink width="10rem" height="4rem" isActive={true}>
            Add to Cart
          </ButtonPink>
          <span className="inline-block w-28 font-light text-slate-500">
            B&B Italian Sofa $32.00
          </span>
        </p>
      </div>
    </div>
  );
}
