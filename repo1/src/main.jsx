import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { green, red } from '@mui/material/colors';

const color = green[100];
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Box >
    <CssBaseline/>
    <App />
    </Box>
  </StrictMode>,
)
