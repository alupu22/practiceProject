import Rating from "./Rating";
import HomeLogos from "../Home/HomeLogos";
import { NavLink } from "react-router-dom";
const ratings = [5, 4, 3, 2, 1];
export default function Product({ product }) {
  return (
    <NavLink to={`/products/${product.id}`}>
      <div className="shadow-md w-full flex flex-row gap-4 hover:shadow-lg hover:cursor-pointer p-4">
        <img src={product.imgSrc} alt={product.title} className="w-64" />
        <div className="m-2">
          <div className="flex flex-row justify-between">
            <span className="text-slate-800 font-bold text-xl">
              {product.title}
            </span>
            <span className="flex gap-2">
              <Rating ratings={ratings} item={product.stars} />
            </span>
          </div>
          <div className="my-2 flex gap-4">
            <p className="text-slate-800 font-bold ">
              ${product.newPrice.toFixed(2)}
            </p>
            <span className="text-slate-500 font-normal line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          </div>
          <p className="my-2 text-slate-500 font-medium">
            {product.description}
          </p>
          <div className="mt-6 relative flex gap-6">
            <HomeLogos />
          </div>
        </div>
      </div>
    </NavLink>
  );
}
