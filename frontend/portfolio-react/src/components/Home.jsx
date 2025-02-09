import { ClassNames } from "@emotion/react";
import React from "react";
import "../App.css";
import { Box, Container } from "@mui/material";

function Home() {
  return (
    <>
      <Container sx={{ height: "100vh" }}>
        <a href="/">
          <p>Welcome to the Home Page yo</p>
        </a>
      </Container>
      <Container sx={{ height: "100vh" }}>
        <a href="/guestbook">
          <p>This is the guest book yo</p>
        </a>
      </Container>
    </>
  );
}
export default Home;
