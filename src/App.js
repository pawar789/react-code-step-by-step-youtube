import "./App.css";
import React, { useState } from "react";
import Student from "./Student";
import Teacher from "./Teacher";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "aman",
    };
  }
  updateName() {}
  render() {
    return (
      <div className="App">
        <h1>Props!</h1>
        <Teacher name={this.state.name} email="anit@test.com" />
        <button onClick={() => this.setState({ name: "aman pawar" })}>
          Update name
        </button>
      </div>
    );
  }
}

export default App;
