import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: "white" }}>
            <Toolbar sx={{ color: "brown" }}>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <SportsMartialArtsIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "brown", display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginLeft: '5px' }}>Avocardio</span>
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/bodyparts">Body Parts</Button>
                {/*<Button color="inherit" component={Link} to="/muscles">Muscles</Button>*/}
                {/*<Button color="inherit" component={Link} to="/equipment">Equipment </Button>*/}
                {/*<Button color="inherit" component={Link} to="/exercise">Exercise </Button>*/}

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
