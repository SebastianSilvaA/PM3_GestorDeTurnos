import React from 'react';
import Navbar from "./components/primary/Navbar"
import Home from "./views/home"
import Misturnos from "./views/Misturnos"
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"
import Schedule from "./views/Schedule"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Misturnos />} />
        <Route path="/appointments" element={<Schedule />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
