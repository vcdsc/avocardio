import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import GithubButton from './Buttons/GithubButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Divider from '@mui/material/Divider';
// import { blueGrey } from '@mui/material/colors';

// ------------------------- Creator ---------------------------------------- //
const Creator = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
   lineHeight: '60px',
   textAlign: 'center',
   color: theme.palette.text.secondary,
   padding:10,
   margin:20,
   backgroundColor:'aliceblue',
    minHeight: '80px',
    minWidth:'60px'
   
   
   }));

  
  const lightTheme = createTheme({ palette: { mode: 'light' } });
// ------------------------------ Footer ----------------------------------------------------------------
  export default function Footer() {
    return (
      <div>
        

      {[lightTheme,].map((theme, index) => (
        
          
          <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          backgroundColor="aliceblue"
          borderTop={{color:"#009720",  xs: 1, sm: 2, md: 4 }} 
                 
            >

        <ThemeProvider theme={theme}>
        <Creator elevation={12} >
            <Stack 
            divider={<Divider color='#009720' orientation="hotizontal" flexItem />}>
            <GithubButton>
            <FontAwesomeIcon icon="fab fa-github" size="lg" /> GitHub
            </GithubButton >
            <Box>GitHub: W-JK</Box>
            <Box>Wojciech J. Koloska</Box>
            </Stack>            
         
        </Creator>
           
                   
          </ThemeProvider>
        </Stack>
      ))}













      </div>
    );
  }

