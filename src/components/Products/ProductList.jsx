import Product from "./Product";
import ProductGrid from "./ProductGrid";
export default function ProductList({ isList, products }) {
  return (
    <>
      {isList && (
        <div className="flex flex-col gap-6">
          {products.map((product) => (
            <Product key={product.title} product={product} />
          ))}
        </div>
      )}
      {!isList && (
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductGrid key={product.title} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
