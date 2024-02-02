import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo.png';
 
function Navbar() {
    return (
        <nav className="nav">
            <ul id = "one">
                <li><img src={logo} alt="Logo" className="logo"/></li>
                <li><Link to="./" className="home-link">GramQuest</Link></li>
            </ul>
            <ul id = "two">
                <li><Link to="./blogs" className="main-links">Blogs</Link></li>
                <li><Link to="/about" className="main-links">About</Link></li>
                <li><Link to="/contact" className="main-links">Contact</Link></li>
                <li>
                    <input type="text" placeholder="Search..." className="search-bar"/>
                </li>
                <li><Link to="/login" className="main-links">Login</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;