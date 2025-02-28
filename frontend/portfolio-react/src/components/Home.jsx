import Page from "./Page";
import React from "react";
import "../App.css";
import AboutMe from "./AboutMe";
import { Box } from "@mui/material";

function Home() {
  return (
    <>
      <Page variant="primary.dark">
        <Box>
          <h3>Welcome to the Home Page yo</h3>
        </Box>
      </Page>
    </>
  );
}
export default Home;
