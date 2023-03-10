import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../css/App.scss";
import Home from "./Home";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}