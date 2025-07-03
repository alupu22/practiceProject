import Product from "./Product";
import ProductGrid from "./ProductGrid";
export default function ProductList({ isList, products }) {
  const ComponentToRender = isList ? Product : ProductGrid;
  const containerClasses = isList
    ? "flex flex-col gap-6"
    : "grid grid-cols-3 gap-6";
  return (
    <div className={containerClasses}>
      {products.map((product) => (
        <ComponentToRender key={product.id} product={product} />
      ))}
    </div>
  );
}
