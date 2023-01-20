import React, { FC } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./app.scss";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./components/MainComponent/MainComponent";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="navbar">
          <NavBar />
        </div>

        <MainComponent />
      </div>
    </BrowserRouter>
  );
};

export default App;
