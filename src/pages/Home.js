import React, { useState, useEffect } from 'react'
import Searchbar from '../components/searchbar/Searchbar'
import Exercisecard from '../components/exercisecard/Exercisecard'
import Grid from '@mui/material/Grid'
import API from '../utils/ExerciseDB.js'

// body parts options
const bodyParts = [
  "back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"
    ]

const bodyPartsObj = bodyParts.map((bodyPart) => { 
  return {
    type: "Body parts", 
    name: bodyPart
    };
  })

// equipments options
const equipments = [
  "assisted", "band", "barbell", "body weight", "bosu ball", "cable", "dumbbell", "elliptical machine",
  "ez barbell", "hammer", "kettlebell", "leverage machine", "medicine ball", "olympic barbell", "resistance band", 
  "roller", "rope", "skierg machine", "sled machine", "smith machine", "stability ball", "stationary bike",
  "stepmill machine", "tire", "trap bar", "upper body ergometer", "weighted", "wheel roller"
  ]

const equipmentsObj = equipments.map((equipment) => { 
  return {
    type: "Equipments", 
    name: equipment
    };
  })  

// muscles options
const muscles = [ 
  "abductors", "abs", "adductors", "biceps", "calves", "cardiovascular system", "delts", "forearms", "glutes",
  "hamstrings", "lats", "levator scapulae", "pectorals", "quads", "serratus anterior", "spine", "traps", "triceps",
  "upper back"
]    

const musclesObj = muscles.map((muscle) => { 
  return {
    type: "Target muscle", 
    name: muscle
    };
  })  

// concatenate content of all objects 
const options = [...bodyPartsObj, ...equipmentsObj, ...musclesObj]


function Home() {

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
      }
      
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
  }
  , [inputField]);

  // update input field state when the search button is clicked
  const handleClick = () => {
    setInputField(document.getElementById("combo-box").value); 
  }

  // update input field state when the enter key is pressed
  const handleEnter = (e) => {
    // if the enter key is pressed
    if (e.key === "enter" || e.keyCode === 13) {
      setInputField(document.getElementById("combo-box").value); 
    }
  }

  return (
    <div>
        <Searchbar 
          handleClick={handleClick}
          handleEnter={handleEnter} 
          options={options}
        />
        
        <Grid container  wrap="nowrap"  columnGap={'5%'} 
            style={{
                width: '100%',
                columnGap: '5%',
                height: '600px',
                // height: 'calc(100vh - 25px)',
                display: 'flex',
                position: 'relative',
                alignItems: 'center', 
                justifyContent: 'space-evenly',   
                padding: '5rem',   
         }}>
              
          {exercises.map(exercise => (

            <Exercisecard {...exercise}/>
            ))
          }

        </Grid>

    </div>
  )
}

export default Home