import React from "react";

export default function AutoAd() {
  return (
    // <div className="">
    <div className=" relative h-28 bg-black">
      <img
        src="https://statics.olx.in/olxin/banners/hero_bg_in@1x.png"
        alt=""
        className="object-none  w-full h-full"
      ></img>
      <div className="absolute top-1/3 left-1/4 pl-24 rounded-lg flex">
        <div className="text-white w-1/3 text-xl">
          Now, Buy and Sell Cars directly with OLX Autos
        </div>
        <div className="flex content-center justify-center ml-10">
          <button className="bg-white rounded-md text-black font-semibold mx-4 py-2 px-4 h-3/4">
            Buy Car
          </button>
          <button className="bg-white rounded-md text-black font-semibold mx-4 py-2 px-4 h-3/4">
            Sell Car
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}
