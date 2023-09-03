import React from "react";
// import logo from "../page/img/logo.png";
import "../page/cs/login.css";
// import{Link} from "react-router-dom";
import Navbar from "./Navbar"; 
// import Welcome from "./Welcome";
// import Signin from "./Signin";
import Signform from "./Signform";
import Signup from "./Signup";
import Contact from "./Contact";
function Login(){
    return(
    <>
    <Navbar/>
    <Signup/>
    </>
    );
}
export default Login;