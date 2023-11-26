import "./App.css";
import React, { useState, useEffect } from "react";
import Render from "./Render";
import Student from "./Student";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("use effect");
  });
  return (
    <div className="App">
      <h1>useEffect in React: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
}

export default App;
