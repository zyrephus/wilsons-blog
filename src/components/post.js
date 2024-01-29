import React from "react";
import './post.css';
import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
 
const Post = () => {
    return (
        <div className="post">
            <h2 className="title">Blog Post Title</h2>
            <p className="date">January 28, 2024</p>
            <div className="description">
                <p>
                    This is the content of the blog post. It can be a summary or the full content,
                    depending on your design. You can also include images, links, and other HTML elements
                    as needed.
                </p>
            </div>
            <Stack spacing={2} direction="row">
                <Link to="/blogs/blog-title">
                    <Button variant="contained" sx={{ width: '125px', height: '40px', fontSize: '12px'}}>
                        READ MORE
                    </Button>
                </Link>
            </Stack>
        </div>
    );
};
 
export default Post;