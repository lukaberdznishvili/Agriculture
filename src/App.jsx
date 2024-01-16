import React from "react";
import Navbar from "./Navbar";
import { Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Service from "./pages/Service";
import ReHome from "./pages/ReHome";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Shop" element={<Shop />}></Route>
      <Route path="/Service" element={<Service />}></Route>
      <Route path="/ReHome" element={<ReHome />}></Route>
</Routes>
    </div>
  );
}

export default App;
