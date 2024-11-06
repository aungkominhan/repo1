// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, textAlign: 'center', bgcolor: 'background.default' }}>
      <Typography variant="body2" color="text.secondary">
        &copy; 2024 My Portfolio
      </Typography>
    </Box>
  );
}

export default Footer;
