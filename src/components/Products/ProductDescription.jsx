import { useState } from "react";
import bifaLogo from "../../assets/bifa.svg";
import ButtonLink from "../Home/ButtonLink";
export default function ProductDescription() {
  const [activeFilter, setActiveFilter] = useState("description");
  function handleClick(buttonState) {
    setActiveFilter(buttonState);
  }
  return (
    <div className="bg-violet-50 mt-14 grid grid-cols-[15rem_auto_15rem]">
      <div></div>
      <div>
        <div className="mt-10 flex flex-row gap-10 justify-start items-center">
          <ButtonLink
            activeFilterState={activeFilter}
            activeFilterNew="description"
            onchangeState={() => handleClick("description")}
            isDetail={true}
          >
            Description
          </ButtonLink>
          <ButtonLink
            activeFilterState={activeFilter}
            activeFilterNew="info"
            onchangeState={() => handleClick("info")}
            isDetail={true}
          >
            Additional Info
          </ButtonLink>
          <ButtonLink
            activeFilterState={activeFilter}
            activeFilterNew="reviews"
            onchangeState={() => handleClick("reviews")}
            isDetail={true}
          >
            Reviews
          </ButtonLink>
          <ButtonLink
            activeFilterState={activeFilter}
            activeFilterNew="video"
            onchangeState={() => handleClick("video")}
            isDetail={true}
          >
            Video
          </ButtonLink>
        </div>
        <h2 className="mt-10 text-slate-800 font-bold text-xl">
          Various tempor.
        </h2>
        <p className="text-slate-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam
          dolor. In dignissim lectus sed nisl tempor, ac porttitor libero
          consectetur. Pellentesque diam dolor, tincidunt nec ante congue,
          tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis
          ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec
          ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula
          nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis
          nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus,
          congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus
        </p>
        <h2 className="mt-10 text-slate-800 font-bold text-xl">More details</h2>
        <div className="flex flex-col gap-2 mb-10">
          <span className="flex flex-row gap-4 mt-4">
            <img className="w-6 h-6" src={bifaLogo} alt="bifa" />
            <span className="text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
              quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
              libero consectetur.
            </span>
          </span>
          <span className="flex flex-row gap-4">
            <img className="w-6 h-6" src={bifaLogo} alt="bifa" />
            <span className="text-slate-500">
              Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac
              porttitor libero consectetur. Pellentesque diam dolor, tincidunt
              nec ante.
            </span>
          </span>
          <span className="flex flex-row gap-4">
            <img className="w-6 h-6" src={bifaLogo} alt="bifa" />
            <span className="text-slate-500">
              Pellentesque diam dolor, tincidunt nec ante congue, tincidunt
              facilisis tortor.
            </span>
          </span>
          <span className="flex flex-row gap-4">
            <img className="w-6 h-6" src={bifaLogo} alt="bifa" />
            <span className="text-slate-500">
              Mauris vitae massa molestie, sagittis ligula vel, egestas massa.
              Phasellus quis sodales augue. Donec nec ultricies diam.
            </span>
          </span>
          <span className="flex flex-row gap-4">
            <img className="w-6 h-6" src={bifaLogo} alt="bifa" />
            <span className="text-slate-500">
              Phasellus quis sodales augue. Integer feugiat odio ut dictum
              viverra.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
