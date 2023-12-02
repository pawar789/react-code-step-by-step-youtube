import "./App.css";
import User1 from "./User1";
import React from "react";
import { Table } from "react-bootstrap";
function App() {
  const users = [
    {
      name: "Anil",
      email: "anil@test.com",
      address: "Betul",
    },
    {
      name: "Burce",
      email: "bruce@test.com",
      address: "Bhopal",
    },
    {
      name: "Peter",
      email: "peter@test.com",
      address: "Indore",
    },
    {
      name: "Sam",
      email: "sam@test.com",
      address: "Sarni",
    },
  ];
  return (
    <div className="App">
      <h1>Reuse Component with List</h1>
      {users.map((item, i) => (
        <User1 data={item} />
      ))}
    </div>
  );
}

export default App;
