import { Route, Routes } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import GuestBook from "./components/GuestBook";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5a5a8f",
    },
    secondary: {
      main: "#2bbccc",
    },
    success: {
      main: "#000000",
    },
    warning: {
      main: "#52dac8",
    },
    info: {
      main: "#6b2bcc",
    },
    error: {
      main: "#69cc2b",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <h1>Hello Andre</h1>
        <Routes>
          <Route path="/" id="home" element={<Home />} />
          <Route path="/guestbook" id="guestbook" element={<GuestBook />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
