import React from "react";
import { Container, Typography, Avatar, Box, Fab } from "@mui/material";

function About() {
  return (
    <Box>
      <Container id="about">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box>
            <Avatar
              sx={{
                width: 200,
                height: 200,
                mt: 10,
                mb: 1,
                transition: "transform 0.2s, background-color 0.2s",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  transform: "scale(1.1)",
                },
              }}
              src="profilePhoto.jpg"
            />
          </Box>

          <Box>
            <b>Aung Ko Min Han</b>
          </Box>
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1">
            Hi, I'm a developer passionate about creating dynamic web
            applications. My name is Aung Ko Min Han. I'm a fullstack developer.
            I started my jurney from 2021. HTML, CSS and Javascript were learned
            from youtube and then containues learned professional class
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
