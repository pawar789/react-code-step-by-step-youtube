import "./App.css";
import User1 from "./User1";
import React, { Fragment } from "react";
import { Table } from "react-bootstrap";
import Cols from "./Cols";
function App() {
  return (
    <div>
      <h1>React Fragment</h1>
      <table>
        <tbody>
          <tr>
            <Cols />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
