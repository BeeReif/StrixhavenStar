import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { StudentDetails } from './components/StudentDetails';
import { LocationDetails } from './components/LocationDetails';
import { Box, Grid2 as Grid, ThemeProvider } from '@mui/material';
import { theme } from './Theme';
import { ClubDetails } from './components/ClubDetails';
import { CampusDetails } from './components/CampusDetails';
import { StudentLookup } from './components/StudentLookup';
import { CampusLookup } from './components/CampusLookup';
import { LocationLookup } from './components/LocationLookup';
import { ClubLookup } from './components/ClubLookup';
import { NavBar } from './components/NavBar';
import { FacultyDetails } from './components/FacultyDetails';
import { IssuesDetails } from './components/IssuesDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FacultyLookup } from './components/FacultyLookup';

function App() {

    const queryClient = new QueryClient()

  return (
    <ThemeProvider theme={theme}>


      <HashRouter>
        <NavBar/>
        <Box>
          <Grid>
            <Routes>
              <Route path="/" element={<Navigate to="student" />} />
              <Route path="campus" element={<CampusLookup />} />
              <Route path="student" element={<StudentLookup />} />
              <Route path="location" element={<LocationLookup />} />
              <Route path="club" element={<ClubLookup />} />
              <Route path="student/:name" element={<StudentDetails />} />
              <Route path="location/:name" element={<LocationDetails />} />
              <Route path="club/:name" element={<ClubDetails />} />
              <Route path="campus/:name" element={<CampusDetails />} />
              <Route path="faculty" element={<FacultyLookup />} />
              <Route path="faculty/:name" element={<FacultyDetails />} />

              <Route path="issues" element={
                <QueryClientProvider client={queryClient}>
                <IssuesDetails/>
                </QueryClientProvider>
              } />
            </Routes>
          </Grid>
        </Box>
      </HashRouter>


    </ThemeProvider >

  );


}

export default App