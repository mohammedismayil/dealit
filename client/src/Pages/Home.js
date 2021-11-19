import React from "react";
import Categories from "../Components/Categories";
import AutoAd from "../Components/AutoAd";
import HomeProductLists from "../Components/HomeProductLists";
import Header from "../Components/Header";
export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <Categories></Categories>
      <AutoAd></AutoAd>
      <div className="font-bold text-lg">Fresh Recommendations</div>
      <HomeProductLists></HomeProductLists>
    </div>
  );
}
