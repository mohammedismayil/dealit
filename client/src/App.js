import "./App.css";

import React, { useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
/////