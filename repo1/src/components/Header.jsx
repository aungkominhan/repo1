// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Portfolio
        </Typography>
        <Button color="inherit" href="#about">About</Button>
        <Button color="inherit" href="#educationBackground">Education</Button>
        <Button color="inherit" href="#skills">Skills</Button>
        <Button color="inherit" href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
