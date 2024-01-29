import React from "react";
import { Link } from 'react-router-dom';
 
const ReadBlog = () => {
    return (
        <div>
            <h1>Blog Title</h1>
            <Link to="../blogs">
                <button>Return to Blogs</button>
            </Link>
        </div>
    );
};
 
export default ReadBlog;