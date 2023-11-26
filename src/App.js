import "./App.css";
import React, { useState, useEffect } from "react";
import Render from "./Render";
import Student from "./Student";
import { User } from "./User";
function App() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  return (
    <div className="App">
      <User data={data} count={count} />
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setData(data + 1)}>Update data</button>
    </div>
  );
}

export default App;
