import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Parent from "./Parent";

function App() {
  return (
    <div>
      <div className="App container border rounded shadow p-3 mb-5 mt-4 bg-body rounded p-4 weatherApp">
        <Container>
          <Parent />
        </Container>
      </div>
      <div className="me">
        {" "}
        <a
          href="https://github.com/apilynb/react-weather"
          target="_blank"
          rel="noreferrer"
          className="gitHubLink"
        >
          Open Source Code
        </a>{" "}
        by Apilyn Bonny
      </div>
    </div>
  );
}

export default App;
