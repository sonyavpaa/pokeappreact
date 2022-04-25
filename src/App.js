import "./App.css";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import LayOut from "./pages/LayOut";

const App = () => {
  return (
    <BrowserRouter>
      <LayOut />
    </BrowserRouter>
  );
};

export default App;
