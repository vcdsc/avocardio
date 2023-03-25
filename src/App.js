import "./App.css";

import Navbar from './components/navbar/Navbar';
// import Searchbar from './components/searchbar/Searchbar'
// import CardContainer from './components/exercisecardcontainer/cardcontainer'
import Home from './pages/Home';
import Footer from './components/footer/Footer';


function App() {
  // Checking what was done in ExerciseDB.js
  // console.log(API.getBodyParts());
  // console.log(API.getExercisesByBodyPart());

  return (
    <div className="App">
      <Navbar />
      <Home />

      {/* <Searchbar />
      <CardContainer/>   */}
      <Footer/> 

    </div>
  );
}

export default App;
