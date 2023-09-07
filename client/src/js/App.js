import React from "react";
import {Routes, Route} from "react-router-dom";
import Signform from "./Signform";
import Contact from './Contact';
import Navbar from './Navbar';
import Signup from './Signup';
import About from "./About";
import Logout from "./Logout";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Signup/>}/>
      <Route exact path="/Signform" element={<Signform/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/Logout" element={<Logout/>}/>
      </Routes>
    </>
  );
}

export default App;
