import React from "react";
import "../page/cs/signin.css";
import Signform from "./Signform";
function Signin(){
    return(
    <div className="topbar">
        <div className="topbartitle">
            <span className="title">
                Thapa
            </span>
        </div>
        <div className="rightbar">
            <ul className="navbarlinks">
                <li>Home</li>
                <li>AboutMe</li>
                <li>Contact</li>
                <li>Login</li>
                <li>Register</li>
            </ul>
        </div>
    </div>
    );
}
export default Signin;