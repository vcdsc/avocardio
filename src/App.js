
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/ExerciseDB.js";

import Navbar from './components/navbar/Navbar';
import Searchbar from "./components/searchbar/Searchbar";


function App() {
  // Checking what was done in ExerciseDB.js
  // console.log(API.getBodyParts());
  // console.log(API.getExercisesByBodyPart());

  return (
    <div className="App">
      <Navbar />
      <Searchbar />

    </div>
  );
}

export default App;
