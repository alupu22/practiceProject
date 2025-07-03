import lampaLogo from "../../assets/lamp.png";
import castiLogo from "../../assets/casti.png";
import discountLogo from "../../assets/Discount.png";
import paginationLogo from "../../assets/Pagination.png";
import ButtonPink from "./ButtonPink.jsx";
export default function HomeFirst() {
  return (
    <div className="bg-violet-100 h-[80vh] grid grid-rows-2 gap-[20rem]">
      <div className="grid grid-cols-3 justify-center">
        <img className="w-[25rem]" src={lampaLogo} alt="lampa" />
        <div className="mt-20 grid grid-rows-[4rem_6rem_11rem_5rem] items-center justify-start">
          <p className="text-red-600 text-bold">
            Best Headphones For Your Life...
          </p>
          <h1 className="text-slate-800 text-5xl">
            New Trendy Collection Headphones
          </h1>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            repellendus odit dolorum eius exercitationem ab sint voluptate.
            Quaerat iste necessitatibus tempore? Exercitationem necessitatibus
            in fugiat modi, tenetur ex iste illum.
          </p>
          <ButtonPink width="10rem" height="4rem" isActive={true}>
            Shop Now
          </ButtonPink>
        </div>
        <div className="mt-4 mr-6 relative">
          <img src={castiLogo} alt="casti" />
          <img
            className="absolute right-3 top-5"
            src={discountLogo}
            alt="discount"
          />
        </div>
      </div>
      <img className="m-auto" src={paginationLogo} alt="pagination" />
    </div>
  );
}
