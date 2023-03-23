import * as React from 'react';
import Exercisecard from '../exercisecard/Exercisecard'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function CardContainer() {
    return (
      <Grid container wrap="nowrap" width="90%" style={{ margin:30 }}  >
              
        <Box sx={{ width:"100%" }}>        
          <Exercisecard/>
          {/*  <Skeleton animation="wave" variant="rounded" width="90%"  height={60} style={{ margin:30 }} /> */}
        </Box>
      
        <Box sx={{ width:"100%" }}>
          <Exercisecard/>
          {/*  <Skeleton animation="wave" variant="rounded" width="90%"  height={60} style={{ margin:30 }} /> */}
        </Box>

        <Box sx={{ width:"100%" }}>           
          <Exercisecard/>
          {/*  <Skeleton animation="wave" variant="rounded" width="90%"  height={60} style={{ margin:30 }} /> */}
        </Box>


      </Grid>

    
    );
  }

  

  