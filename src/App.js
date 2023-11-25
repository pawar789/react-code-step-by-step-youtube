import "./App.css";
import React, { useState } from "react";
import Profile from "./Profile";
function App() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");
  function getFormData(e) {
    console.warn(name, tnc, interest);
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Condional Rendering !</h1>
      <Profile />
    </div>
  );
}

export default App;
