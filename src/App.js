import "./App.css";
import React, { useState } from "react";
import Render from "./Render";
import Student from "./Student";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.show ? <Student /> : <h1>Child Component Removed</h1>}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Child Button
        </button>
      </div>
    );
  }
}

export default App;
