import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Setting from "./Setting";
import Site1 from "./Site1";
import Site2 from "./Site2";

export default function Main() {
  return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route exact path="/setting" element={<Setting/>} />
          <Route exact path="/site1" element={<Site1/>} />
          <Route exact oath="site2" element={<Site2/>} /> */}
        </Routes>
      </div>
  );
}