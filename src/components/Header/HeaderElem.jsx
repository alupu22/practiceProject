import { useContext, useEffect } from "react";
import CartContext from "../../store/CartContext";
import { NavLink } from "react-router-dom";
export default function HeaderElem({ imgSrc, textlabel, isCart }) {
  const cartCtx = useContext(CartContext);

  return (
    <span className="flex flex-row hover:cursor-pointer hover:text-slate-200 relative">
      <img className="w-5 mr-2 z-0" src={imgSrc}></img>
      {textlabel}{" "}
      {isCart && (
        <NavLink to="/cart">
          <span className="absolute bottom-2 right-0 z-10 w-5 bg-red-600 rounded-full h-5 flex items-center justify-center text-white">
            {cartCtx.items.length}
          </span>
        </NavLink>
      )}
    </span>
  );
}
