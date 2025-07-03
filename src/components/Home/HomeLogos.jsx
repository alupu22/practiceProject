import heartSmall from "../../assets/heart_small.svg";
import cartSmall from "../../assets/cart_small.svg";
import plusSign from "../../assets/plus.svg";

export default function HomeLogos({ product }) {
  return (
    <>
      <button>
        <img
          src={cartSmall}
          alt="cart-small"
          className="hover:bg-purple-100 hover:rounded-full p-1 hover:cursor-pointer"
        />
      </button>
      <img
        src={heartSmall}
        alt="heart-small"
        className="hover:bg-purple-100 hover:rounded-full p-1 hover:cursor-pointer"
      />
      <img
        src={plusSign}
        alt="plus-sign"
        className="hover:bg-purple-100 hover:rounded-full p-1 hover:cursor-pointer"
      />
    </>
  );
}
