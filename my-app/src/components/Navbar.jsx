import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import imagem from '../assets/img/home_white_24dp.svg';
//import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
            <Link to="/">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <img src={imagem} alt=""/>
                </IconButton>
            </Link>
          
          <Typography variant="h6" color="inherit" component="div">
            Doguitos
          </Typography>
            <ul >
                <li><Link to="/"><Button color="inherit">
          home
        </Button></Link></li>
                <li><Link to="/sobre"><Button color="inherit">
          sobre
        </Button></Link></li>
            </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
