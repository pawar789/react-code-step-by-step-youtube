import "./App.css";
import React, { useState } from "react";
import Render from "./Render";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate", this.state.count);
    if (this.state.count > 5 && this.state.count < 10) {
      return true;
    }
  }
  render() {
    return (
      <div>
        <h1>Should Component Update {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update Count
        </button>
      </div>
    );
  }
}

export default App;
