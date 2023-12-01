import "./App.css";
import React, { useState, useEffect } from "react";
import Render from "./Render";
import Student from "./Student";
import { User } from "./User";
import "./style.css";
import style from "./custom.module.css";
import { Button, Table } from "react-bootstrap";
function App() {
  // const student = ["Anil", "Sidhu", "Sam", "Peter"];
  const users = [
    {
      name: "anil",
      email: "anil@gmail.com",
      contact: "111",
    },
    {
      name: "sidhu",
      email: "sidhu@gmail.com",
      contact: "1111",
    },
    {
      name: "peter",
      email: "peter@gmail.com",
      contact: "222",
    },
  ];

  return (
    <div className="App">
      <h1>List with Bootstrap table</h1>
      <Table striped>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>contact</td>
          </tr>
          {users.map((item, i) =>
            item.contact === "111" ? (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
