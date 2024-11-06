// src/components/EducationBackground.js
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const educationData = [
  {
    institution: 'University of East Yangon',
    degree: 'Bachelor of Arts (BA) English',
    years: '2014 - 2018',
    description: 'Graduating with a Bachelor of Arts in English equips individuals with strong skills in critical analysis, creative and professional writing, research, and communication, developed through in-depth study of literature, language, and cultural contexts—preparing them for versatile careers across media, education, and communication fields.',
  },
  {
    institution: 'Msquare Programming',
    degree: 'Full-Stack Web Development Program',
    years: '2021 - 2022',
    description: 'An intensive program covering modern web technologies, including React, Node.js,Typescript, Next.js,Prisma and PostgreSQL.',
  },
  {
    institution: 'FairWay Technology',
    degree: 'Full-Stack Web Development Program',
    years: '2024(July) - 2024(October)',
    description: 'An intensive program covering modern web technologies, including React, ReactNative, Node.js, Next.js,Prisma and PostgreSQL.',
  }
];

const EducationBackground = () => {
  return (
    <Grid id="educationBackground" container spacing={3} style={{ padding: '20px' }}>
      {educationData.map((education, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} >
          <Card elevation={3} sx={{ height: '100%', borderRadius: 10,   transition: "transform 0.2s, background-color 0.2s",
          "&:hover": {
            backgroundColor: "primary",
            transform: "scale(1.1)",
          } }}>
            <CardContent>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <SchoolIcon color="primary" fontSize="large" />
                </Grid>
                <Grid item>
                  <Typography variant="h6" component="div" color="primary">
                    {education.institution}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {education.degree}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {education.years}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
                {education.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EducationBackground;
