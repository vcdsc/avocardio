import React from 'react'
import './searchbar.css'
import { Autocomplete, TextField, Button } from '@mui/material';


const bodyPart = [
    "back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"
];


function Searchbar({handleClick}) {

  console.log(handleClick)

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
        <Button className="customButton" variant="contained" onClick={handleClick}
>Search</Button>

    </div>
  )
}

export default Searchbar
