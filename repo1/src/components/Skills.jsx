// src/components/Skills.js
import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';

const skills = [
  {
    category: 'Languages',
    icon: <CodeIcon color="primary" />,
    items: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: <LibraryBooksIcon color="secondary" />,
    items: ['React', 'Node.js', 'Express', 'MUI', "bootstrap"],
  },
  {
    category: 'Tools',
    icon: <BuildIcon color="action" />,
    items: ['Git', 'GitHub', 'VS Code'],
  },
  {
    category: 'Soft Skills',
    icon: <PeopleIcon color="disabled" />,
    items: ['Problem Solving', 'Communication', 'Teamwork'],
  },
];

function Skills() {
  return (
    <Container id="skills" sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{
            "&:hover": {
              transform: "scale(1.2)",
            },}}>
            <Paper elevation={3} sx={{ padding: 2, borderRadius: 3, }}>
              <Box display="flex" alignItems="center" mb={1}>
                {skill.icon}
                <Typography variant="h6" sx={{ ml: 1 }}>
                  {skill.category}
                </Typography>
              </Box>
              <Box component="ul" sx={{ paddingLeft: 2 }}>
                {skill.items.map((item, idx) => (
                  <li key={idx}>
                    <Typography variant="body1">{item}</Typography>
                  </li>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills;
