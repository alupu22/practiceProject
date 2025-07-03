import { useParams } from "react-router-dom";
import { PRODUCT_LIST } from "../../featuredProducts";
import Rating from "./Rating";
import ButtonPink from "../Home/ButtonPink";
import HomeFeaturedProducts from "../Home/HomeFeaturedProducts";
import ProductDescription from "./ProductDescription";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
const ratings = [5, 4, 3, 2, 1];

export default function ProductDetail() {
  const { idProduct } = useParams();
  const cartCtx = useContext(CartContext);
  const product = PRODUCT_LIST.find((product) => product.id === +idProduct);

  return (
    <>
      <div className="grid grid-rows-[8rem_auto]">
        <div></div>
        <div className="grid grid-cols-[10rem_auto_10rem] ">
          <div className="col-start-2 grid grid-cols-[auto_auto] justify-center items-center gap-10">
            <div className="grid grid-cols-[12rem_30rem] gap-6 items-center">
              <div className="mt-4 flex flex-col gap-4">
                {product.imgs.map((img, index) => (
                  <img className="rounded-md" key={index} src={img} />
                ))}
              </div>

              <img
                className="w-[30rem] h-[26rem] object-fit rounded-md shadow-lg"
                src={product.imgSrc}
              />
            </div>
            <div className="ml-20 flex flex-col gap-6">
              <h1 className="text-slate-800 font-bold text-3xl">
                {product.title}
              </h1>
              <span className="flex flex-row gap-2">
                <Rating ratings={ratings} item={product.stars} />
              </span>
              <span className="flex flex-row gap-4">
                <span className="text-slate-800 font-bold ">
                  ${product.newPrice.toFixed(2)}
                </span>
                <span className="text-pink-500 font-normal line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>
              </span>
              <p className="w-[28rem] font-semibold text-slate-400 mb-10">
                {product.description}
              </p>
              <ButtonPink
                width="10rem"
                height="4rem"
                onAddToCart={() => cartCtx.addItem(product)}
              >
                Add to Cart
              </ButtonPink>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProductDescription />
      </div>
      <div>
        <HomeFeaturedProducts
          isFeatured={true}
          isTop={false}
          isRelated={true}
        />
      </div>
    </>
  );
}
