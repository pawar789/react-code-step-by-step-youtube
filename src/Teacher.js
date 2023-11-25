import React from "react";
class Teacher extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ backgroundColor: "skyblue" }}>
        <h1>Teacher: {this.props.name}</h1>
        <h2>{this.props.email}</h2>
      </div>
    );
  }
}
export default Teacher;
