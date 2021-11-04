import "./App.css";
import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
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
    </div>
  );
}

export default App;
