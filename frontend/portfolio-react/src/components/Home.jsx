import Page from "./Page";
import React from "react";
import "../App.css";
import AboutMe from "./AboutMe";

function Home() {
  return (
    <>
      <Page variant="primary.dark">
        <a href="/aboutme">
          <p>Welcome to the Home Page yo</p>
        </a>
      </Page>

    </>
  );
}
export default Home;
