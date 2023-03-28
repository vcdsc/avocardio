import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/navbar/Navbar';
// import Searchbar from './components/searchbar/Searchbar'
// import CardContainer from './components/exercisecardcontainer/cardcontainer'
import Home from './pages/Home';
import About from './components/navbar/pages/About'
import Footer from './components/footer/Footer';





function App() {
  // Checking what was done in ExerciseDB.js
  // console.log(API.getBodyParts());
  // console.log(API.getExercisesByBodyPart());

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
