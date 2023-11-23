import logo from "./logo.svg";
import "./App.css";
import { User } from "./User";
import Customer from "./Customer";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Customer />
      <User />
    </div>
  );
}

export default App;
