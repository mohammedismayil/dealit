import "./App.css";
import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import Categories from "./Components/Categories";
import AutoAd from "./Components/AutoAd";
import HomeProductLists from "./Components/HomeProductLists";
function App() {
  const [mounted, setMounted] = useState(false);
  if (!mounted) {
    // Code for componentWillMount here
    // This code is called only one time before intial render

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  useEffect(() => {
    setMounted(false);
  }, []);
  return (
    <div className="">
      <Header></Header>
      <Categories></Categories>
      <AutoAd></AutoAd>
      <div>Fresh Recommendations</div>
      <HomeProductLists></HomeProductLists>
    </div>
  );
}

export default App;
/////