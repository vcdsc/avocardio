import logo from "./logo.svg";
import "./App.css";
import API from "./utils/ExerciseDB.js";

function App() {
  // Checking what was done in ExerciseDB.js
  // console.log(API.getBodyParts());
  // console.log(API.getExercisesByBodyPart());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
