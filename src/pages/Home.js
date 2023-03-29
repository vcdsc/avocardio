import React, { useState, useEffect } from "react";
import Searchbar from "../components/searchbar/Searchbar";
import Exercisecard from "../components/exercisecard/Exercisecard";
import Grid from "@mui/material/Grid";
import API from "../utils/ExerciseDB.js";

// body parts options
const bodyParts = [
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];

const bodyPartsObj = bodyParts.map((bodyPart) => {
  return {
    type: "Body parts",
    name: bodyPart,
  };
});

// equipments options
const equipments = [
  "assisted",
  "band",
  "barbell",
  "body weight",
  "bosu ball",
  "cable",
  "dumbbell",
  "elliptical machine",
  "ez barbell",
  "hammer",
  "kettlebell",
  "leverage machine",
  "medicine ball",
  "olympic barbell",
  "resistance band",
  "roller",
  "rope",
  "skierg machine",
  "sled machine",
  "smith machine",
  "stability ball",
  "stationary bike",
  "stepmill machine",
  "tire",
  "trap bar",
  "upper body ergometer",
  "weighted",
  "wheel roller",
];

const equipmentsObj = equipments.map((equipment) => {
  return {
    type: "Equipments",
    name: equipment,
  };
});

// muscles options
const muscles = [
  "abductors",
  "abs",
  "adductors",
  "biceps",
  "calves",
  "cardiovascular system",
  "delts",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "levator scapulae",
  "pectorals",
  "quads",
  "serratus anterior",
  "spine",
  "traps",
  "triceps",
  "upper back",
];

const musclesObj = muscles.map((muscle) => {
  return {
    type: "Target muscle",
    name: muscle,
  };
});

// concatenate content of all objects
const options = [...bodyPartsObj, ...equipmentsObj, ...musclesObj];

// generates random motivational quotes
const randomQuotes = () => {

  const quotes =["Don't be a couch potato, be an avo-cardio enthusiast!", 
  "Sweat now, guac later. Let Avocardio be your fitness partner in crime!", 
  "Avocardio: where the guac is extra, but so is your energy!", 
  "They say an apple a day keeps the doctor away, but with Avocardio, you'll be able to outrun them too!"];
  
  return quotes[Math.floor(Math.random()*quotes.length)];
}

function Home() {

  const [quote, setQuote] = useState(randomQuotes);
  const [exercises, setExercises] = useState([]);
  const [inputField, setInputField] = useState();

  useEffect(() => {

    // if there is a searched item
    if (inputField !== undefined) {
      // const search = inputField.replace(" ", "%");

      // stores the API call function taking the endpoint name as argument
      const APICall = (endpoint) => {
        API.getExercises(`${endpoint}=${inputField}`).then((res) => {
          setExercises(res);
        });
      };

      // if the item searched is part of the body parts list
      if (bodyParts.includes(inputField)) {
        // uses the body parts endpoint
        APICall("bodyPart");
      }

      // if the item searched is part of the body parts list
      else if (equipments.includes(inputField)) {
        // uses the equipment endpoint
        APICall("equipment");
      }

      // if the item searched is part of the muscle list
      else if (muscles.includes(inputField)) {
        // uses the target muscle endpoint
        APICall("target");
      }
    }
  }, [inputField]);

  // update input field state when the search button is clicked
  const handleClick = () => {
    setQuote("")
    setInputField(document.getElementById("combo-box").value);
  };

  // update input field state when the enter key is pressed
  const handleEnter = (e) => {
    // if the enter key is pressed
    if (e.key === "enter" || e.keyCode === 13) {
      setInputField(document.getElementById("combo-box").value);
    }
  };

  // Renders motivational quotes if no exercises searched
  if (quote !== "") {
    return (
      <div style={{flexGrow: 1, display: "flex", flexDirection: "column",}}>
        <Searchbar
        handleClick={handleClick}
        handleEnter={handleEnter}
        options={options} 
        />
        <div id="quote"
        style={{ textAlign: "center", alignItems: "center", display: "flex", flexDirection: "column", margin: "auto", color: "#618161", padding: "0px 10px 0px 10px", fontSize: "30px", fontWeight: "bold", fontStyle: "italic",            
      }}
        >
          <p style={{ padding: "0px 80px"}}>
          {quote}
          </p>
        </div>
      </div> 
    )

  }

  else {
  return (
    <div style={{flexGrow: 1}}>
      <Searchbar
        handleClick={handleClick}
        handleEnter={handleEnter}
        options={options}
      />

      <Grid
        container
        // wrap="nowrap"
        columnGap={"2%"}
        rowGap={"2%"}
        sx={{
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
        style={{
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        {exercises.map((exercise) => (
          <Exercisecard {...exercise} key={exercise.id} />
        ))}
 
      </Grid>
    </div>
  );
}
}

export default Home;
