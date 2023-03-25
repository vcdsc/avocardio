import React, { useState, useEffect } from 'react'
import Searchbar from '../components/searchbar/Searchbar'
import Exercisecard from '../components/exercisecard/Exercisecard'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import API from '../utils/ExerciseDB.js'

const bodyPart = [
    "back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"
];


function Home() {

    const [exercises, setExercises] = useState([]);
    const [inputField, setInputField] = useState();
  
    useEffect(() => {
      // console.log(inputField);
  
      if (inputField !== undefined) {
  
        API.getExercisesByBodyPart(inputField).then((res) => {
            setExercises(res); 
            console.log("Body parts:");
            console.log(res)
          });
        }  
    }
    , [inputField]);

    const handleClick = () => {
        setInputField(document.getElementById("combo-box").value); 
    }

  return (
    <div>
        <Searchbar handleClick={handleClick}/>
        
        <Grid container  wrap="nowrap"  columnGap={'5%'} 
            style={{
                width: '100%',
                columnGap: '5%',
                height: '600px',
                height: 'calc(100vh - 25px)',
                display: 'flex',
                position: 'relative',
                alignItems: 'center', 
                justifyContent: 'space-evenly',   
                padding: '5rem',   
        
              }}>
              
            <Box sx={{ width:"100%"}}> 

                {exercises.map( exercise => (

                <Exercisecard {...exercise}/>
                    ))
                    }
              
            </Box>
            
        </Grid>
    
    </div>
  )
}

export default Home