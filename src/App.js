import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './components/navbar/pages/About'
import Footer from './components/footer/Footer';


function App() {
  // Checking what was done in ExerciseDB.js
  // console.log(API.getBodyParts());
  // console.log(API.getExercisesByBodyPart());

  return (
    <div className="App">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
    </Router>
    </div>

  );
}

export default App;
