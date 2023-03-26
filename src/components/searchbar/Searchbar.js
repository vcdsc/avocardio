import React from 'react'
import './searchbar.css'
import { Autocomplete, TextField, Button, } from '@mui/material'


function Searchbar({ handleClick, handleEnter, options }) {

  return (
    <div className="searchbar">
        <Autocomplete
            disablePortal
            id="combo-box"
            options={options}
            groupBy={(option) => option.type}
            getOptionLabel={(option) => option.name}
            sx={{ width: 450,}}
            // onChange={(event, value) => setInputField(value)}
            renderInput={(params) => <TextField {...params} id="inputField" label="Search by body part, target muscle or equipment" onKeyUp={handleEnter} size="small" />}
            
        />
        <Button className="customButton" variant="contained" onClick={handleClick}>Search</Button>

    </div>
  )
}

export default Searchbar
