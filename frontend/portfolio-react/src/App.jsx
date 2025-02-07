import { Route, Routes } from "react-router";
import "./App.css";
import GuestBook from "./components/GuestBook";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1>Hello Andre</h1>
      <Routes>
        <Route path="/" id="home" element={<Home />} />
        <Route path="/guestbook" id="guestbook" element={<GuestBook />} />
      </Routes>
    </>
  );
}

export default App;
