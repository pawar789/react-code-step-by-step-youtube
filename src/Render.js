import React from "react";

class Render extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "aman@test.com",
    };
  }
  render() {
    console.log("render", this.state.email);
    return (
      <div>
        <h1>Render Component {this.state.email}</h1>
        <button onClick={() => this.setState({ email: "pawar@test.com" })}>
          Update email
        </button>
      </div>
    );
  }
}
export default Render;
