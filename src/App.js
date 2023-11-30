import "./App.css";
import React, { useState, useEffect } from "react";
import Render from "./Render";
import Student from "./Student";
import { User } from "./User";
import "./style.css";
import style from "./custom.module.css";
import { Button } from "react-bootstrap";
function App() {
  // const student = ["Anil", "Sidhu", "Sam", "Peter"];
  const students = [
    {
      name: "anil",
      email: "anil@gmail.com",
      contact: 888,
    },
    {
      name: "sidhu",
      email: "sidhu@gmail.com",
      contact: 1111,
    },
    {
      name: "peter",
      email: "peter@gmail.com",
      contact: 2222,
    },
  ];

  return (
    <div className="App">
      <h1>Handle Array With List</h1>
      <table border="1">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>

        {students.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.contact}</td>
            <td></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
