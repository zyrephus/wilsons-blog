import React from "react";
 
const Post = () => {
    return (
        <div className="post">
            <h2>Blog Post Title</h2>
            <p>Date: January 28, 2024</p>
            <p>Author: Wilson</p>
            <div className="post-content">
                <p>
                    This is the content of the blog post. It can be a summary or the full content,
                    depending on your design. You can also include images, links, and other HTML elements
                    as needed.
                </p>
                {/* Add more content as needed */}
            </div>
            <button>Read More</button> {/* Optional: for linking to full post */}
        </div>
    );
};
 
export default Post;