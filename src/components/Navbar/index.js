import React from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
 
const Navbar = () => {
    return (
        <div id="navbar">
            <Link to="./">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};
 
export default Navbar;