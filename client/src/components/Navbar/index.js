import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css';
 
function Navbar(props) {
    return (
        <nav className="nav">
            <Link to="./" className="home-link">Wilson's Blog</Link>
            <ul>
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