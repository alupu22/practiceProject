import { BLOGS } from "../../featuredProducts";
import HomeBlog from "./HomeBlog";
export default function HomeBlogs() {
  return (
    <div className="my-10 grid grid-rows-[5rem_auto] items-center justify-center">
      <h1 className="m-auto text-slate-700 text-3xl font-bold">Latest Blog</h1>
      <div className="mt-12 grid grid-cols-[25rem_25rem_25rem] items-center justify-center gap-10">
        {BLOGS.map((blog, index) => (
          <HomeBlog key={index} product={blog} />
        ))}
      </div>
    </div>
  );
}
