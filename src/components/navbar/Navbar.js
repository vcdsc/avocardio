import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  useMediaQuery,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import About from './pages/About';
import logo from '../Image/Avocardio.png';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'white' }}>
        <Toolbar sx={{ color: 'brown' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={logo}
            alt="logo"
            width="70"
            height="70"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: 'brown',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography variant="h6" sx={{ color: 'brown', mr: 1 }}>
                  Avocardio
                </Typography>
              </Link>
            </Box>
          </Typography>
          {!isMobile && (
            <Button
              sx={{
                color: 'brown',
                '&:hover': {
                  color: 'white',
                  bgcolor: 'brown',
                },
              }}
              component={Link}
              to="/about"
            >
              About Us
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {isMobile ? (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <List sx={{ width: 250 }} onClick={toggleDrawer}>
            <ListItem>
              <ListItemText>
                <Typography variant="h6" sx={{ color: 'brown' }}>
                  Avocardio
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      ) : null}
    </>
  );
};

export default Navbar;
