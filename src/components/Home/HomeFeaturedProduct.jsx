import { useState } from "react";
import HomeLogos from "./HomeLogos";
import { NavLink } from "react-router-dom";
export default function HomeFeaturedProduct({
  product,
  isFeatured,
  oldPrice,
  isTop,
}) {
  const [isVizible, setIsVizible] = useState(false);
  function handleMouseEnter() {
    setIsVizible((prevVisible) => !prevVisible);
  }
  function handleMouseLeave() {
    setIsVizible((prevVisible) => !prevVisible);
  }
  const shadowClassIsApplied = "shadow-md";
  let content;
  if (isTop && !isFeatured) {
    content = (
      <div>
        <img
          className="w-[16rem] h-[16rem] rounded-full shadow-md hover:shadow-xl"
          src={product.imgSrc}
          alt={product.title}
        />
        <p className="text-slate-700 font-semibold text-center mt-4">
          {product.title}
        </p>
      </div>
    );
  } else {
    content = (
      <div>
        <img
          className="w-[18rem] rounded-sm"
          src={product.imgSrc}
          alt={product.title}
        />
        <p className="text-pink-600 font-semibold text-center mt-4">
          {product.title}
        </p>
        {product.code ? (
          <p className="text-slate-500 text-center mt-6">
            Code - {product.code}
          </p>
        ) : null}
        <div className="flex justify-center items-center gap-4">
          <p className="text-slate-800 font-bold mt-3 mb-2">
            ${product.newPrice}
          </p>
          {oldPrice ? (
            <span className="text-slate-500 font-normal mt-3 mb-2 line-through">
              ${product.oldPrice}
            </span>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        isFeatured
          ? `${shadowClassIsApplied} hover:cursor-pointer hover:-translate-y-4 hover:shadow-xl relative`
          : "hover:cursor-pointer hover:-translate-y-4 relative "
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isVizible && isFeatured ? (
        <>
          <div className="absolute top-3 left-3 flex items-center justify-center gap-3">
            <HomeLogos product={product} />
          </div>
          <NavLink to={`/products/${product.id}`}>
            <button className="absolute top-44 right-20 rounded-md text-slate-50 w-28 h-10 bg-green-400 hover:bg-green-600">
              View Details
            </button>
          </NavLink>
        </>
      ) : null}
      {content}
      {isTop && isVizible ? (
        <NavLink to={`/products/${product.id}`}>
          <button className="absolute top-44 right-[4.5rem] rounded-md text-slate-50 w-28 h-10 bg-green-400 hover:bg-green-600">
            View Details
          </button>
        </NavLink>
      ) : null}
    </div>
  );
}
