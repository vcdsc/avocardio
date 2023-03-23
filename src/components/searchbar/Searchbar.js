
import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


export default function AppBar() {
  return (
    <Box sx={{ width:"100%" }}>
      <Skeleton animation="wave" variant="rounded" width="80%"  height={60} style={{ margin:30 }} />
    </Box>
  );
}

