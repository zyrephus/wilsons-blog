import React from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
 
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="./" className="home-link">Wilson's Blog</Link>
            <Link to="./blogs" className="main-links">Blogs</Link>
            <Link to="/about" className="main-links">About</Link>
            <Link to="/contact" className="main-links">Contact</Link>
            <Link to="/login" className="main-links">Login</Link>
        </nav>
    );
};
 
export default Navbar;