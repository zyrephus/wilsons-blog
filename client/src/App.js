import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Blogs from "./pages/blogs";
import ReadBlog from "./pages/readBlog";
import About from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";
import Contact from "./pages/contact";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blog/read-blog" element={<ReadBlog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}
 
export default App;