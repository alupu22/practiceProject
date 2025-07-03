import { PRODUCT_LIST } from "../../featuredProducts.js";
import HomeFeaturedProduct from "./HomeFeaturedProduct.jsx";
import paginationLogo from "../../assets/Pagination-2.png";
import paginationRound from "../../assets/pagination-round.svg";

export default function HomeFeaturedProducts({ isFeatured, isTop, isRelated }) {
  const trendingProducts = [...PRODUCT_LIST].slice(0, 4).reverse();
  const featuredProducts = [...PRODUCT_LIST].slice(0, 4);
  let title;
  let pagination;

  if (isFeatured) {
    title = "Featured Products";
    pagination = (
      <img className="m-auto" src={paginationLogo} alt="pagination" />
    );
  } else if (!isFeatured && !isTop) {
    title = "Trending Products";
    pagination = null;
  } else {
    title = "Top Categories";
    pagination = (
      <img
        className="mt-16 m-auto"
        src={paginationRound}
        alt="pagination-round"
      />
    );
  }
  if (isRelated) {
    title = "Related Products";
    pagination = null;
  }
  return (
    <div className="grid grid-rows-[10rem_auto_5rem]">
      <h1 className="m-auto text-slate-700 text-3xl font-bold">{title}</h1>
      <div className="m-auto grid grid-cols-4 gap-10">
        {isFeatured
          ? featuredProducts.map((product) => (
              <HomeFeaturedProduct
                key={product.title}
                product={product}
                isFeatured={isFeatured}
                isTop={isTop}
              />
            ))
          : trendingProducts.map((product) => (
              <HomeFeaturedProduct
                key={product.title}
                product={product}
                isFeatured={isFeatured}
                isTop={isTop}
              />
            ))}
      </div>
      {pagination}
    </div>
  );
}
