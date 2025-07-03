import { useContext } from "react";
import CartContext from "../../store/CartContext";
export default function CartItem({ product }) {
  const cartCtx = useContext(CartContext);
  const totalProduct = product.newPrice * product.quantity;
  return (
    <div className="flex flex-row justify-between items-center">
      <span className="flex flex-row">
        <img
          className="w-40 rounded-md"
          src={product.imgSrc}
          alt={product.title}
        />
        <span className="flex flex-col justify-center gap-2 p-4">
          <span className="text-slate-800 font-bold">{product.title}</span>
          <span>${product.newPrice.toFixed(2)}</span>
        </span>
      </span>
      <span className="border w-28 h-10 rounded-md flex flex-row justify-evenly items-center">
        <button onClick={() => cartCtx.removeItem(product.id)}>-</button>
        <span>{product.quantity}</span>
        <button onClick={() => cartCtx.addItem(product)}>+</button>
      </span>
      <span>${totalProduct.toFixed(2)}</span>
    </div>
  );
}
