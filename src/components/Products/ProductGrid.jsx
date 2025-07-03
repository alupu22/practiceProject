import { NavLink } from "react-router-dom";
import Rating from "./Rating";
const ratings = [5, 4, 3, 2, 1];

import HomeLogos from "../Home/HomeLogos";
export default function ProductGrid({ product }) {
  return (
    <NavLink to={`/products/${product.id}`}>
      <div className="shadow-md w-full flex flex-col gap-4 p-2 hover:shadow-lg hover:cursor-pointer">
        <img
          src={product.imgSrc}
          alt={product.title}
          className="w-60 h-44 rounded-md"
        />

        <span className="text-slate-800 font-semibold text-lg">
          {product.title}
        </span>
        <span className="flex flex-row">
          <Rating ratings={ratings} item={product.stars} />
        </span>
        <div className="flex gap-4">
          <p className="text-slate-800 font-bold ">
            ${product.newPrice.toFixed(2)}
          </p>
          <span className="text-slate-500 font-normal line-through">
            ${product.oldPrice.toFixed(2)}
          </span>
        </div>
        <p className="text-slate-500 font-medium">{product.description}</p>
        <div className="relative flex gap-6">
          <HomeLogos product={product} />
        </div>
      </div>
    </NavLink>
  );
}
