import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import { TempContext } from "./Helper";

function App() {
  const [celcius, setCelcius] = useState(false);
  return (
    <div>
      <div className="App container border rounded shadow p-3 mb-5 mt-4 bg-body rounded p-4 weatherApp">
        <TempContext.Provider value={{ celcius, setCelcius }}>
          <Weather defaultCity="New York" />
        </TempContext.Provider>
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
