import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import "../src/components/Register.js";
import React from "react";
import "../src/components/Edit.js";
import Edit from "../src/components/Edit.js";
import Details from "./components/Details.js";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/view/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
