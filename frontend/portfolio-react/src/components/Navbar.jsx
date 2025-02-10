import React from "react";
import "../App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

function Navbar() {
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="x1">
          <Toolbar disableGutters>
            <Box>
              <p>Navbar on top baby</p>
              <a href="/guestbook">
                <p>Guestbook</p>
              </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
