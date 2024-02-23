import "./App.css";
import User1 from "./User1";
import React, { Fragment } from "react";
import { Table } from "react-bootstrap";
import Cols from "./Cols";
import User from "./User";
function App() {
  let data = "Anil Sidhu";
  function parentAlert(data) {
    alert("data from parent is :" + data);
  }
  return (
    <div className="App">
      <h1>Lifting State Up</h1>
      <User alert={parentAlert} />
    </div>
  );
}

export default App;
