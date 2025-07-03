import InputSearch from "./Header/InputSearch";
import fbLogo from "../assets/facebook.svg";
import twitterLogo from "../assets/twitter.svg";
import instaLogo from "../assets/insta.svg";
export default function Footer() {
  const classParagraph =
    "text-lg text-slate-400 my-4 hover:text-purple-300 hover:cursor-pointer";
  return (
    <div className="mt-10">
      <div className="grid grid-rows-[auto_3.5rem] bg-purple-50">
        <div className="my-20 grid grid-cols-[25rem_20rem_20rem_20rem] justify-center gap-10">
          <div className="ml-24 w-[20rem]">
            <h1 className="text-slate-800 font-extrabold text-3xl mb-6">
              Hekto
            </h1>
            <InputSearch
              placeholder="Enter Email Address"
              isText={true}
              textButton="Sign Up"
              idInput="email-address"
            />
            <p className=" text-slate-400 my-6">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
          <div className="ml-20">
            <h2 className="font-bold text-slate-800 text-xl">Categories</h2>
            <p className={classParagraph}>Laptops & Computers</p>
            <p className={classParagraph}>Cameras & Photography</p>
            <p className={classParagraph}>Smart Phones & Tablets</p>
            <p className={classParagraph}>Video Games & Games</p>
            <p className={classParagraph}>Waterproof Headphones</p>
          </div>
          <div className="ml-12">
            <h2 className="font-bold text-slate-800 text-xl">Customer Care</h2>
            <p className={classParagraph}>My Account</p>
            <p className={classParagraph}>Discount</p>
            <p className={classParagraph}>Returns</p>
            <p className={classParagraph}>Orders History</p>
            <p className={classParagraph}>Order Tracking</p>
          </div>
          <div>
            <h2 className="font-bold text-slate-800 text-xl">Pages</h2>
            <p className={classParagraph}>Blog</p>
            <p className={classParagraph}>Browse the Shop</p>
            <p className={classParagraph}>Category</p>
            <p className={classParagraph}>Pre-Built Pages</p>
            <p className={classParagraph}>Visual Composer Elements</p>
          </div>
        </div>
        <div className=" bg-purple-200">
          <div className="max-w-7xl mx-auto my-4 flex justify-between">
            <span className="text-slate-500">
              ©Webecy - All Rights Reserved
            </span>
            <span className="flex flex-row gap-4">
              <img src={fbLogo} alt="facebook" />
              <img src={twitterLogo} alt="twitter" />
              <img src={instaLogo} alt="insta" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
