import HomeFirst from "./HomeFirst";
import HomeFeaturedProducts from "./HomeFeaturedProducts";
import HomeLatest from "./HomeLatest";
import HomeUnique from "./HomeUnique";
import HomeDiscount from "./HomeDiscount";
import HomeSubscribe from "./HomeSubscribe";
import HomeBlogs from "./HomeBlogs";
export default function Home() {
  return (
    <>
      <HomeFirst />
      <HomeFeaturedProducts isFeatured={true} isTop={false} />
      <HomeLatest />
      <HomeUnique />
      <HomeFeaturedProducts isFeatured={false} isTop={false} />
      <HomeDiscount />
      <HomeFeaturedProducts isFeatured={false} isTop={true} />
      <HomeSubscribe />
      <HomeBlogs />
    </>
  );
}
