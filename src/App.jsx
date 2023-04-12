import { useState } from 'react'
import './App.css'
import Home from './Home';
import About from './About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

  
function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About />}  />
        </Routes>
     </BrowserRouter>
  );
}

export default App

