
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/ExerciseDB.js";

import Navbar from './components/navbar/Navbar';
import Home from './components/navbar/pages/Home'
import BodyParts from './components/navbar/pages/Body Parts'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  // Checking what was done in ExerciseDB.js
  // console.log(API.getBodyParts());
  // console.log(API.getExercisesByBodyPart());

  return (
    <Router>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home name= {"Avocario"} title={"Avocario"}/>}/>
        <Route path="/BodyParts" element= {<BodyParts/>}/>

        

      </Routes>
    
    </div>

    </Router>
    
  );
}

export default App;
