import "./App.css";
import { useState } from "react";
function App() {
  const [data, setData] = useState("Aman");
  function updateData() {
    setData("aman pawar");
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Update data</button>
    </div>
  );
}

export default App;
