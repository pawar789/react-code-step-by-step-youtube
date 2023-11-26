import "./App.css";
import React, { useState } from "react";
import Profile from "./Profile";
import Login from "./Login";
import Functionprops from "./Functionprop";
import Members from "./Members";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "aman",
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
