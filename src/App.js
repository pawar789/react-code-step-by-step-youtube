import "./App.css";

function App() {
  let myName = "aman pawar";
  function apple() {
    myName = "rjt";
    alert(myName);
  }
  return (
    <div className="App">
      <h1>{myName}</h1>
      <button onClick={apple}>Click me!</button>
    </div>
  );
}

export default App;
