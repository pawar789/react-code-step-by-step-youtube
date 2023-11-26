import "./App.css";
import React, { useState } from "react";
import Render from "./Render";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "aman",
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    // this.setState({ name: "pawar" })
    return (
      <div>
        <h1>
          Component Did Mount <span>{this.state.name}</span>
        </h1>
        <button onClick={() => this.setState({ name: "pawar" })}>
          Update Name
        </button>
      </div>
    );
  }
}

export default App;
