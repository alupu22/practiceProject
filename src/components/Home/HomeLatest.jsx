import { useState } from "react";
import { PRODUCT_LIST } from "../../featuredProducts";
import HomeLatestProduct from "./HomeLatestProduct";
import ButtonLink from "./ButtonLink";
export default function HomeLatest() {
  const latestProducts = [...PRODUCT_LIST].slice(0, 6);
  const [products, setProducts] = useState(latestProducts);
  const [activeFilter, setActiveFilter] = useState("new-arrival");
  function handleClick(buttonState) {
    const newArrary = products.reverse();
    setProducts(newArrary);

    setActiveFilter(buttonState);
  }
  return (
    <div className="grid grid-rows-[5rem_4rem_auto] items-center justify-center">
      <h1 className="m-auto text-slate-700 text-3xl font-bold">
        Latest Products
      </h1>
      <div className="flex flex-row justify-center gap-6">
        <ButtonLink
          activeFilterState={activeFilter}
          activeFilterNew="new-arrival"
          onchangeState={() => handleClick("new-arrival")}
        >
          New Arrival
        </ButtonLink>
        <ButtonLink
          activeFilterState={activeFilter}
          activeFilterNew="best-seller"
          onchangeState={() => handleClick("best-seller")}
        >
          Best Seller
        </ButtonLink>
        <ButtonLink
          activeFilterState={activeFilter}
          activeFilterNew="featured"
          onchangeState={() => handleClick("featured")}
        >
          Featured
        </ButtonLink>
        <ButtonLink
          activeFilterState={activeFilter}
          activeFilterNew="special-offer"
          onchangeState={() => handleClick("special-offer")}
        >
          Special Offer
        </ButtonLink>
      </div>
      <div className="mt-8 grid grid-rows-2 grid-cols-3 gap-10">
        {products.map((product) => (
          <HomeLatestProduct key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
}
