import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Layout from "./components/Layout.jsx";
import Products from "./components/Products/Products.jsx";
import ProductDetail from "./components/Products/ProductDetail.jsx";
import Cart from "./components/Products/Cart.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:idProduct", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </>
  );
}
