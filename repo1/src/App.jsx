import { Avatar, Box, Button, ListItem, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import Divider from '@mui/material/Divider';


const color = green[100];

export default function App() {
  return (
    <Box>
      <Box sx={{ display: "flex",justifyContent:"space-between", alignItems:"center", border: 6, backgroundColor: "ButtonFace", borderRadius: 2 }}>
        <Typography variant="h4" color={"blue"} fontStyle={"inherit"}  >Aung Ko Min Han</Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button size='large'>Profile</Button>
          <Button size='large'>Skill</Button>
          <Button size='large'>Project</Button>
          <Button size='large'>Contact</Button>
          
        </Box>
      </Box>
      <Divider fullwidth/>
      <Box sx={{display:"flex", justifyContent:"center", }}>
        <Avatar sx={{width: 200, height: 200, m:4}}/>
        </Box>
       <Box sx={{display:"flex", justifyContent:"center", mr: 70, ml: 70, }}>
         <Typography>
         <p>my name is Aung Ko Min Han. I'm a fullstack developer. I started my jurney from 2021. HTML, CSS and Javascript were learned from youtube and then containues learned professional class at Msquare and Fairway 
         </p> 
          </Typography>
       </Box>
     
      <Box>
        <ListItem><i class="bi bi-filetype-html"></i></ListItem>
      </Box>
    </Box>
  );
}
