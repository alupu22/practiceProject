import subscribeBg from "../../assets/bg-subscribe.png";
import ButtonPink from "./ButtonPink";
export default function HomeSubscribe() {
  return (
    <div className="mt-[5rem] flex flex-col justify-center items-center relative">
      <img src={subscribeBg} alt="bg-subscribe" />
      <div className="absolute mt-10">
        <h1 className=" text-slate-700 font-bold text-3xl w-[35rem] text-center">
          Get Latest Update By Subscribe 0ur Newsletter
        </h1>
        <div className="text-center mt-10">
          <ButtonPink width="10rem" height="4rem" isActive={true}>
            Subscribe
          </ButtonPink>
        </div>
      </div>
    </div>
  );
}
