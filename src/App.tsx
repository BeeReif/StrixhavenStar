import { HashRouter, Route, Routes } from 'react-router-dom';
import { StudentDetails } from './components/StudentDetails';
import { LocationDetails } from './components/LocationDetails';
import { Box, Grid2 as Grid, List, ListItem, ThemeProvider } from '@mui/material';
import { theme } from './Theme';
import { ClubDetails } from './components/ClubDetails';
import { CampusDetails } from './components/CampusDetails';
import { StudentLookup } from './components/StudentLookup';
import { CampusLookup } from './components/CampusLookup';
import { LocationLookup } from './components/LocationLookup';
import { ClubLookup } from './components/ClubLookup';
import { NavBar } from './components/NavBar';
import { FacultyDetails } from './components/FacultyDetails';

function App() {

  return (
    <ThemeProvider theme={theme}>


      <HashRouter>
        <NavBar/>
        <Box>
          <Grid>
            <Routes>
              <Route path="campus" element={<CampusLookup />} />
              <Route path="student" element={<StudentLookup />} />
              <Route path="location" element={<LocationLookup />} />
              <Route path="club" element={<ClubLookup />} />
              <Route path="student/:name" element={<StudentDetails />} />
              <Route path="location/:name" element={<LocationDetails />} />
              <Route path="club/:name" element={<ClubDetails />} />
              <Route path="campus/:name" element={<CampusDetails />} />
              <Route path="faculty/:name" element={<FacultyDetails />} />

              <Route path="TODO" element={
                <List>
                  <ListItem>
                    Add 1st Years and Faculty
                  </ListItem>
                  <ListItem>
                    Styling?
                  </ListItem>
                  <ListItem>
                    Get Bios for more students
                  </ListItem>
                  <ListItem>
                    Get frequent hangout locations for more students
                  </ListItem>
                </List>
              } />
            </Routes>
          </Grid>
        </Box>
      </HashRouter>


    </ThemeProvider >

  );


}

export default App