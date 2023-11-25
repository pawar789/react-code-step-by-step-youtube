import "./App.css";
import React, { useState } from "react";
import Student from "./Student";
function App() {
  const [name, setName] = useState("Aman P");
  function updateName() {
    setName("rjt pawar");
  }
  return (
    <div className="App">
      <Student name={name} />
      <button onClick={() => updateName()}>Update name</button>
    </div>
  );
}

export default App;
