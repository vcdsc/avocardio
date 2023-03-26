import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GifModal from '../modal/GifModal.js'
// import avocatio from '../../assets/images/avocatio.jpg';

// nice to have - skeleton
// import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';
// import Stack from '@mui/material/Stack';

export default function Exercisecard(props) {

  const [open, setOpen] = useState(false);
  
  const handleOpen = (e) => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    <Card 
    sx={{  justifyContent:'center',margin:'5%',maxWidth:'200px', maxHeight:'400px'}}
    >
      <CardMedia
        // sx={{ height: 400 }}
        component="img"
        image={props.gifUrl}
        title={props.name}
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
        {props.name}
        </Typography>

        {/* <Typography variant="body2" color="text.secondary">
          Short exercise description if we like to 
        </Typography> */}

      </CardContent>

      <CardActions>
        {/*<Button size="small">Share</Button> */}
        <Button size="small" cursor="pointer" onClick={handleOpen}>Learn More</Button>
      </CardActions>
    </Card>
    <GifModal open={open} handleClose={handleClose}/>
    </div>
  );
}