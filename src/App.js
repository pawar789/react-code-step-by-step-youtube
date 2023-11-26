import "./App.css";
import React, { useState } from "react";
import Render from "./Render";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }
  componentDidUpdate(preProps, preState, snapshot) {
    console.log("componentDidUpdate", preState.count, this.state.count);
    if (preState.count === this.state.count) {
      alert("data is already same");
    }
  }
  render() {
    // console.log("render");
    return (
      <div>
        <h1>Component Did Update {this.state.count}</h1>
        <button onClick={() => this.setState({ count: 1 })}>Update Name</button>
      </div>
    );
  }
}

export default App;
