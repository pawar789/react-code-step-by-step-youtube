import "./App.css";
import React, { useState } from "react";
import Profile from "./Profile";
import Login from "./Login";
import Functionprops from "./Functionprop";
import Members from "./Members";
function App() {
  function getData() {
    console.log("hello");
    alert("hello from app");
  }
  return (
    <div className="App">
      <h1>Pass Function as Props</h1>
      <Functionprops data={getData} />
      <Members data={getData} />
    </div>
  );
}

export default App;
