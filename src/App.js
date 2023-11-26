import "./App.css";
import React, { useState } from "react";
import Render from "./Render";
import Student from "./Student";
function App() {
  const [data, setData] = useState("Aman");
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={() => setData("Pawar")}>Update Data</button>
    </div>
  );
}

export default App;
