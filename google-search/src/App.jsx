import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./components/Home";
import { Result } from "./components/Result";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/result" element={<Result/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
