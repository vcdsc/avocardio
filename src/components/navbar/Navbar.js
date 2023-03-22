import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Toolbar sx={{ color: "brown" }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <SportsMartialArtsIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "brown" }}>
          Avocardio
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Body Parts</Button>
        <Button color="inherit">Muscles</Button>
        <Button color="inherit">Equipment </Button>
        <Button color="inherit">Exercise </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
