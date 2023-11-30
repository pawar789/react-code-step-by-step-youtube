import "./App.css";
import React, { useState, useEffect } from "react";
import Render from "./Render";
import Student from "./Student";
import { User } from "./User";
import "./style.css";
import style from './custom.module.css';
function App() {
  return (
    <div className="App">
      <h1 className="primary">Style type 1 in React Js</h1>
      <h1 style={{color:'red',backgroundColor:'blue'}}>Style type 2 in React Js</h1>
      <h1 className={style.success }>Style type 2 in React Js</h1>
    </div>
  );
}

export default App;
