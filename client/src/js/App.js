import React from "react";
import {Routes, Route} from "react-router-dom";
import Signform from "./Signform";
import Contact from './Contact';
import Navbar from './Navbar';
import Signup from './Signup';
import About from "./About";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Signup/>}/>
      <Route exact path="/Signform" element={<Signform/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/About" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
