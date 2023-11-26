import "./App.css";
import React, { useState } from "react";
import Render from "./Render";
function App() {
  const [name, setName] = useState("aman");
  return (
    <div>
      <Render name={name} />
      {/* <button onClick={() => setName("pawar")}>Update me</button> */}
    </div>
  );
}

export default App;
