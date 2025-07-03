import { NavLink } from "react-router-dom";
import InputSearch from "./InputSearch";
export default function HeaderSecondRow() {
  return (
    <>
      <div className="flex justify-evenly items-center">
        <h1 className="text-slate-800 font-extrabold text-3xl">Hekto</h1>
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
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-red-500 hover:cursor-pointer" : "text-slate-800"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-red-500 hover:cursor-pointer" : "text-slate-800"
          }
        >
          Contact
        </NavLink>
      </div>
      <InputSearch
        placeholder="Search"
        isText={false}
        textButton=""
        idInput="input-search"
      />
    </>
  );
}
