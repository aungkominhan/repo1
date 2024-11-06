import { Box, Button, ListItem, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import EducationBackground from "./components/EducationBackground";

const color = green[100];

export default function App() {
  return (
    <Box>
      <Header />
      <Divider fullwidth />
    
      <Box sx={{ display: "flex", justifyContent: "center", mr: 70, ml: 70 }}>
        <About/>
      </Box>
      <EducationBackground/>
      <Skills/>
       <Contact/>
  
        <Footer/>
      
    </Box>
  );
}
