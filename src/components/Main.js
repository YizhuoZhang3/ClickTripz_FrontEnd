import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Home";


export default function Main() {
  return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </div>
  );
}