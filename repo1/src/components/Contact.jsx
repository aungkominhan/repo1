// src/components/Contact.js
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
function Contact() {
  return (
    <Container id="contact">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Contact
        </Typography>
    <List sx={{ width: '100%', maxWidth: 360,}}>
      <ListItem>
        <AccountCircleIcon/>
        <ListItemText primary="Aung Ko Min Han" sx={{ml: 2}} />
      </ListItem>
      <ListItem>
        <PhoneIphoneIcon/>
        <ListItemText primary="09791721255"  sx={{ml: 2}} />
      </ListItem>
      <ListItem>
        <HomeIcon/>
        <ListItemText primary="No(277), Thuriya street, West quarter, Kyauk Tan Township, Yangon" sx={{ml: 2}} />
      </ListItem>
    </List>
        <Typography variant="body1">
          <EmailIcon sx={{ mr: 1 }} />
          You can reach me at{' '}
          <Link href="mailto:eithawtar1210@gmail.com" color="primary">
            sayakey1210@gamil.com
          </Link>
          

        </Typography>
      </Box>
    </Container>
  );
}

export default Contact;
