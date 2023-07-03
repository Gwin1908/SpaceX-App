import React, { useEffect } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import Favorites from "./Routes/Favorites";
import Home from "./Routes/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
