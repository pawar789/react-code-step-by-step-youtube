import "./App.css";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "aman",
    };
  }
  apple() {
    // alert("apple");
    this.setState({data:"aman pawar"});
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}>Update data</button>
      </div>
    );
  }
}

export default App;
