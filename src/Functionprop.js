function Functionprops(props) {
  console.log(props);
  return (
    <div>
      <h1>Function prop Component</h1>
      <button onClick={props.data}>
        call data function from function prop component
      </button>
    </div>
  );
}

export default Functionprops;
