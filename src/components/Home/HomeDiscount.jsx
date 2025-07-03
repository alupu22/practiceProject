import ButtonLink from "./ButtonLink";
import { useState } from "react";
import { DISCOUNT_ITEMS } from "../../featuredProducts";
import HomeDiscountElem from "./HomeDiscountElem";
export default function HomeDiscount() {
  const [activeFilter, setActiveFilter] = useState("headphones");
  const [discountItems, setDiscountItems] = useState(DISCOUNT_ITEMS[0]);
  function handleClick(buttonState, itemIndex) {
    setActiveFilter(buttonState);
    setDiscountItems(DISCOUNT_ITEMS[itemIndex]);
  }
  return (
    <div className="grid grid-rows-[5rem_4rem_auto] justify-center items-center">
      <h1 className=" m-auto text-slate-700 text-3xl font-bold">
        Discount Item
      </h1>

      <div className="flex flex-row justify-center gap-14">
        <ButtonLink
          activeFilterState={activeFilter}
          activeFilterNew="headphones"
          onchangeState={() => handleClick("headphones", 0)}
        >
          Headphones
        </ButtonLink>
        <ButtonLink
          activeFilterState={activeFilter}
          activeFilterNew="laptop"
          onchangeState={() => handleClick("laptop", 1)}
        >
          Laptop
        </ButtonLink>
        <ButtonLink
          activeFilterState={activeFilter}
          activeFilterNew="other"
          onchangeState={() => handleClick("other", 2)}
        >
          Other
        </ButtonLink>
      </div>
      <div>
        <HomeDiscountElem product={discountItems} />
      </div>
    </div>
  );
}
