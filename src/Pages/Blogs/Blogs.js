import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("./blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div style={{ backgroundColor: "#F7F7F7" }} className="text-center py-5">
            <h2 style={{ color: "#2ACB35" }} className="logo">From Blog</h2>
            <h1 style={{ fontFamily: "'Poppins', sans-serif" }} className="fw-bold mb-3">NEWS AND ARTICLES</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {blogs.map((blog) => (
                    <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>
                ))}
            </Row>
        </div>
    );
};

export default Blogs;