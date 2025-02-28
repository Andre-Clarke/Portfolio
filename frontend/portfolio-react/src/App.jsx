import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  deepPurple,
  amber,
  deepOrange,
  blue,
  lightGreen,
} from "@mui/material/colors";
import "./App.css";
import GuestBook from "./components/GuestBook";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[300],
    },
    secondary: {
      main: lightGreen[300],
    },
    success: {
      main: blue[200],
    },
    warning: {
      main: deepOrange[200],
    },
    info: {
      main: amber[200],
    },
    error: {
      main: deepOrange[600],
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            id="home "
            element={
              <>
                {<Home />}
                {<AboutMe />}
                {<Skills />}
                {<Projects />}
                {<Contact />}

              </>
            }
          />
          <Route path="/aboutme" id='aboutme'element={<AboutMe />} />
          <Route path="/guestbook" element={<GuestBook />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
