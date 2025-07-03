import { NavLink } from "react-router-dom";
import pinkLines from "../../assets/pinkLines.svg";
import whiteLines from "../../assets/whiteLines.svg";
import pinkSquares from "../../assets/pinkSquares.svg";
import whiteSquares from "../../assets/whiteSquares.svg";
import ProductBrand from "./ProductBrand";
import { useState } from "react";
import Ratings from "./Ratings";
import ProductList from "./ProductList";
import ButtonPinkSmall from "../Home/ButtonPinkSmall";
import { PRODUCT_LIST } from "../../featuredProducts";

const productsBrand = ["Casio", "Apple", "Sony", "Nike", "Vke", "Glossiness"];
const discounts = ["20% Cashback", "5% Cashback Offer", "25% Discount Offer"];
const ratings = [5, 4, 3, 2, 1];
const categories = [
  "Watches",
  "Headphones",
  "Laptop",
  "Game Console",
  "Clothes",
  "Jewellery",
  "Perfume",
];
const prices = [
  "$0 - $150",
  "$150 - $350",
  "$350 - $500",
  "$500 - $800",
  "$800+",
];
export default function Products() {
  const [showList, setShowList] = useState(true);
  const [isActiveButton, setActiveButton] = useState("1");
  const [sortOrder, setSortOrder] = useState({
    order: "LowToHigh",
    products: PRODUCT_LIST,
  });
  function handleShowList() {
    setShowList((prevShowList) => !prevShowList);
  }
  function handleActiveButtonPage(btnNumber) {
    setActiveButton(btnNumber);
  }
  function handleOrderProducts(event) {
    const newOrder = event.target.value;
    console.log(newOrder);
    let newArray = [...PRODUCT_LIST];
    if (newOrder === "HighToLow") {
      newArray = newArray.sort((a, b) => b.newPrice - a.newPrice);
    }
    if (newOrder === "LowToHigh") {
      newArray = newArray.sort((a, b) => a.newPrice - b.newPrice);
    }
    setSortOrder({
      ...sortOrder,
      order: newOrder,
      products: newArray,
    });
  }
  return (
    <>
      <div className="my-16 flex flex-col items-center justify-center gap-6">
        <h1 className="text-slate-800 font-bold text-5xl">Products</h1>
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-500 hover:cursor-pointer" : "text-slate-800"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-red-500 hover:cursor-pointer" : "text-slate-800"
            }
          >
            Products
          </NavLink>
        </div>
      </div>
      <div className="flex gap-10 justify-end mr-44">
        <span className="flex gap-4 items-center text-slate-500">
          Per Page
          <select className="w-20 h-10 border rounded-md px-2 text-slate-700">
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </span>
        <span className="flex gap-4 items-center text-slate-500">
          Sort By
          <select
            className="w-52 h-10 border rounded-md px-2 text-slate-700"
            onChange={handleOrderProducts}
            value={sortOrder.order}
          >
            <option value="HighToLow">Price: High to Low</option>
            <option value="LowToHigh">Price: Low to High</option>
          </select>
        </span>
        <span className="flex gap-4 items-center text-slate-500">
          View
          {showList && (
            <span className="flex gap-4">
              <button onClick={handleShowList}>
                <img src={whiteSquares} />
              </button>
              <button onClick={handleShowList}>
                <img src={pinkLines} />
              </button>
            </span>
          )}
          {!showList && (
            <span className="flex gap-4">
              <button onClick={handleShowList}>
                <img src={pinkSquares} />
              </button>
              <button onClick={handleShowList}>
                <img src={whiteLines} />
              </button>
            </span>
          )}
        </span>
      </div>
      <div className="mt-10 grid grid-cols-[5rem_auto_auto_10rem] justify-center gap-32">
        <div></div>
        <div>
          <ProductBrand
            items={productsBrand}
            color="purple"
            title="Product Brand"
          />
          <ProductBrand items={discounts} color="pink" title="Discount Offer" />
          <Ratings ratings={ratings} title="Ratings" color="yellow" />
          <ProductBrand items={categories} color="pink" title="Categories" />
          <ProductBrand items={prices} color="pink" title="Price" />
        </div>
        <div>
          <ProductList isList={showList} products={sortOrder.products} />
          <span className="mt-6 flex flex-row justify-end gap-2">
            <ButtonPinkSmall
              width="2rem"
              height="2rem"
              isActive={isActiveButton === "1"}
              onHandleActivePage={() => handleActiveButtonPage("1")}
            >
              1
            </ButtonPinkSmall>
            <ButtonPinkSmall
              width="2rem"
              height="2rem"
              isActive={isActiveButton === "2"}
              onHandleActivePage={() => handleActiveButtonPage("2")}
            >
              2
            </ButtonPinkSmall>
            <ButtonPinkSmall
              width="2rem"
              height="2rem"
              isActive={isActiveButton === "3"}
              onHandleActivePage={() => handleActiveButtonPage("3")}
            >
              3
            </ButtonPinkSmall>
            <ButtonPinkSmall
              width="2rem"
              height="2rem"
              isActive={isActiveButton === "4"}
              onHandleActivePage={() => handleActiveButtonPage("4")}
            >
              4
            </ButtonPinkSmall>
          </span>
        </div>
        <div></div>
      </div>
    </>
  );
}
