function User(props) {
  const data = "Anil Sidhu";
  return (
    <div>
      <h2>User Component: {props.name}</h2>
      <button onClick={() => props.alert(data)}>Click Me</button>
    </div>
  );
}

export default User;
