import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import avocatio from '../../assets/images/avocatio.jpg';

// nice to have - skeleton
// import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';
// import Stack from '@mui/material/Stack';

export default function Exercisecard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        component="img"
        image={avocatio}
        title="avocatio"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          Exercise Name 
        </Typography>

        {/* <Typography variant="body2" color="text.secondary">
          Short exercise description if we like to 
        </Typography> */}

      </CardContent>

      <CardActions>
        {/*<Button size="small">Share</Button> */}
        <Button size="small" cursor="pointer" >Learn More</Button>
      </CardActions>
    </Card>
  );
}