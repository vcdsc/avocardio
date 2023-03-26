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
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import { Link } from 'react-router-dom';
import About from './pages/About';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar sx={{ color: "brown" }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'block', sm: 'none' } }} onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ display: { xs: 'none', sm: 'block' } }}>
            <SportsMartialArtsIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "brown",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginLeft: "5px" }}>Avocardio</span>
          </Typography>
          {!isMobile && (
            <Button color="inherit" component={Link} to="/About">
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
                <Typography variant="h6" sx={{ color: "brown" }}>
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
