import bifaLogo from "../../assets/bifa.svg";
import ButtonPink from "./ButtonPink";
export default function HomeDiscountElem({ product }) {
  return (
    <div className="grid grid-cols-2 items-center justify-center gap-10">
      <div>
        <h1 className=" text-slate-700 text-3xl font-bold mb-8">
          {product.discount}% Discount Of All Products
        </h1>
        <h3 className="text-red-500 font-semibold text-xl mb-6">
          {product.type}
        </h3>
        <p className="w-[30rem] text-slate-500 text-lg mb-6">
          {product.description}
        </p>
        <ul className="grid grid-cols-2 text-slate-500 text-lg mb-6">
          {product.properties.map((property, index) => {
            return (
              <div
                className="flex flex-row items-center gap-2 mb-4"
                key={index}
              >
                <img className="w-6 h-6" src={bifaLogo} alt="bifa" />
                <li className="list-none">{property}</li>
              </div>
            );
          })}
        </ul>
        <ButtonPink width="10rem" height="4rem" isActive={true}>
          Shop Now
        </ButtonPink>
      </div>
      <div>
        <img
          className="ml-10 w-[35rem] h-[35rem] object-contain"
          src={product.imgSrc}
          alt={product.productTitle}
        />
      </div>
    </div>
  );
}
