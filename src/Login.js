import React, { useState } from "react";
function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  function loginHandle(e) {
    if (user.length < 3 || password.length < 3) {
      alert("type correct values");
    } else {
      alert("all good");
    }
    e.preventDefault();
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }
  function passHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }
  return (
    <div>
      <h1>Login Component</h1>
      <form onSubmit={loginHandle}>
        <input type="text" placeholder="Enter user id" onChange={userHandler} />
        {userErr ? <span>invailid user</span> : ""}
        <br /> <br />
        <input
          type="password"
          placeholder="Enter password"
          onChange={passHandler}
        />{" "}
        {passErr ? <span>invailid pass</span> : ""}
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
