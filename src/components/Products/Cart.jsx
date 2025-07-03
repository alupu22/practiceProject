import { useContext } from "react";
import CartContext from "../../store/CartContext";
import emptyLogo from "../../assets/emptyCart.png";
import { NavLink } from "react-router-dom";
import CartTotal from "./CartTotal";
import CartItem from "./CartItem";
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.newPrice,
    0
  );
  const totalPrice = cartTotal + Number(cartCtx.shipingFee);
  console.log(totalPrice);
  console.log(cartTotal);
  console.log("shipping", cartCtx.shipingFee);
  return (
    <>
      {cartCtx.items.length <= 0 && (
        <div className="flex flex-col justify-center items-center gap-6">
          <img
            className="w-[24rem] h-[20rem]"
            src={emptyLogo}
            alt="empty cart"
          />
          <p className="text-2xl font-bold text-slate-800">
            Your Cart Is Empty
          </p>
          <NavLink to="/products">
            <button className="my-2 rounded-md bg-pink-500 text-slate-50 font-bold hover:bg-pink-700 h-12 w-36">
              Start Shopping
            </button>
          </NavLink>
        </div>
      )}
      {cartCtx.items.length > 0 && (
        <div className="mt-20 grid grid-cols-[10rem_40rem_auto_10rem] justify-center gap-20">
          <div></div>
          <div className="flex flex-col gap-2">
            {cartCtx.items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>
          <CartTotal
            subTotal={cartTotal}
            total={totalPrice}
            shippingFee={cartCtx.shipingFee}
          />
          <div></div>
        </div>
      )}
    </>
  );
}
