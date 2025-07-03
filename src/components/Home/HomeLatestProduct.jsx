import { useState } from "react";
import HomeLogos from "./HomeLogos";
export default function HomeLatestProduct({ product }) {
  const [isVizible, setIsVizible] = useState(false);
  function handleMouseEnter() {
    setIsVizible((prevVisible) => !prevVisible);
  }
  function handleMouseLeave() {
    setIsVizible((prevVisible) => !prevVisible);
  }
  return (
    <div
      className="relative hover:cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isVizible ? (
        <div className="absolute bottom-12 left-3 flex flex-col gap-3">
          <HomeLogos product={product} />
        </div>
      ) : null}
      <img
        className="rounded-md w-[23rem] h-[17rem]"
        src={product.imgSrc}
        alt="title"
      />
      <div className="mt-2 flex flex-row justify-between">
        <span className="text-slate-700 font-medium">{product.title}</span>
        <span>
          <span className="text-slate-700 font-semibold px-2">
            ${product.oldPrice.toFixed(2)}
          </span>
          <span className="text-red-600 font-normal">
            ${product.newPrice.toFixed(2)}
          </span>
        </span>
      </div>
    </div>
  );
}
