import * as React from 'react';
import Exercisecard from '../exercisecard/Exercisecard'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import './cardscontainer.css'

export default function CardContainer() {
    return (
      <Grid container  wrap="nowrap"  columnGap={'5%'} 
      sx = {{ flexDirection: {lg:'row', md:'row', sm:'column'},
      marginTop: {lg:'1%', md:'5%', sm:'10%'}
      }}
      
      style={{
        width: '100%',
        columnGap: '5%',
        height: '600px',
        height: 'calc(100vh - 25px)',
        display: 'flex',
        position: 'relative',
        alignItems: 'center', /* long cards: align-items: normal */
        justifyContent: 'space-evenly',   
        padding: '5rem',   
        
         }}   
         >
              
        <Box 
        // sx={{ width:"100%"}}
        > 
        <Exercisecard/>
          {/*  <Skeleton animation="wave" variant="rounded" width="90%"  height={60} style={{ margin:30 }} /> */}
              
        </Box>

      </Grid>

    
    );
  }

  

  