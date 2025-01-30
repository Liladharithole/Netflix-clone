import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Player from "./pages/Player/Player";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/player/:id" element={<Player></Player>} />
      </Routes>
    </div>
  );
};

export default App;
