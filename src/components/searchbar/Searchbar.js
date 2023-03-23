import React, { useState, useEffect } from 'react'
import './searchbar.css'
import API from '../../utils/ExerciseDB.js'
import { Autocomplete, TextField, Button } from '@mui/material';

const bodyPart = [
    "back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"
];


function Searchbar() {

  const [exercises, setExercises] = useState();
  const [inputField, setInputField] = useState();

  useEffect(() => {
    // console.log(inputField);

    if (inputField !== undefined) {

      API.getExercisesByBodyPart(inputField).then((res) => {
          setExercises(res[0].gifUrl);
          console.log("Body parts:");
          console.log(res)
        });
      }  
  }
  , [exercises, inputField]);
  

  return (
    <div className="searchbar">
        <Autocomplete
            disablePortal
            id="combo-box"
            options={bodyPart}
            sx={{ width: 300 }}
            // onChange={(event, value) => setInputField(value)}
            renderInput={(params) => <TextField {...params} label="Select body parts" size="small" />}
        />
        <Button className="customButton" variant="contained" onClick={() => {setInputField(document.getElementById("combo-box").value); console.log()}}
>Search</Button>
        <img src={exercises} alt="exercise gif"/>

    </div>
  )
}

export default Searchbar
