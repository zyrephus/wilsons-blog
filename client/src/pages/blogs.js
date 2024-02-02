import React from "react";
import Post from "../components/post";
import '../App.css';
 
const Blogs = () => {
    return (
        <div>
            <h1 className="blogs-title">Latest Blogs</h1>
            <hr />
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </div>
    );
};
 
export default Blogs;