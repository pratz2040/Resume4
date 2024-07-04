import React from "react";
import { Container, Grid, Box } from "@mui/material";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Portfolio/Portfolio";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Resume from "./pages/Resume/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container className="top_60">
        <Box mt={8}>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              style={{ padding: "5px" }} // Add padding to the Grid item
            >
              <Box mb={2}>
                <Profile />
              </Box>
            </Grid>
            <Grid
              item
              xs
              style={{
                paddingLeft: "20px",
                
              }}
            >  
              <Box mb={2}>
                <Header />
                <div className="main_content container_shadow">
                <Routes>
                  <Route path="/Resume" element={<Resume />} />
                  <Route path="/Portfolio" element={<Portfolio />} />
                </Routes>

                </div>

                
                <Footer />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
