import { useContext } from "react";
import CartContext from "../../store/CartContext";
export default function CartTotal({ subTotal, total, shippingFee }) {
  const cartCtx = useContext(CartContext);
  return (
    <div className="flex flex-col gap-2 w-[19rem]">
      <div className="flex flex-col gap-4 w-[19rem] h-[18rem] bg-violet-50 rounded-md p-4">
        <div className="flex flex-row justify-between">
          <span className="text-slate-800 font-bold text-xl">Subtotal</span>
          <span className="text-slate-800 font-bold text-xl">
            ${subTotal.toFixed(2)}
          </span>
        </div>
        <div className="w-full h-px bg-slate-300"></div>
        <div className="flex flex-row justify-between">
          <span className="text-slate-800 font-bold text-xl">Total</span>
          <span className="text-slate-800 font-bold text-xl">
            ${total.toFixed(2)}
          </span>
        </div>
        <div className="w-full h-px bg-slate-300"></div>
        <div className="flex flex-row justify-between">
          <span className="text-slate-500 font-medium">Shipping Fee</span>
          <span className="text-slate-500 font-medium">
            ${shippingFee.toFixed(2)}
          </span>
        </div>
        <button className="my-4 rounded-md bg-pink-500 text-slate-50 font-bold hover:bg-pink-700 h-14 w-full">
          Proceed to Checkout
        </button>
      </div>
      <button
        onClick={() => cartCtx.clearCart()}
        className="my-4 rounded-md  text-pink-500 hover:border h-14 w-full"
      >
        Clear Cart
      </button>
    </div>
  );
}
