import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BlogDetail = () => {
    const { blogId } = useParams();
    console.log(blogId);
    const [blogDetails, setBlogDetails] = useState([]);
    const [singleBlog, setSingleBlog] = useState([]);
    console.log(blogDetails, singleBlog);

    // data loaded
    useEffect(() => {
        fetch("/blogs.json")
            .then(res => res.json())
            .then(data => setBlogDetails(data))
    }, [])

    // data loaded after calling and set depandency
    useEffect(() => {
        const foundBlog = blogDetails.find(blog => blog.id === blogId);
        setSingleBlog(foundBlog);
    }, [blogDetails, blogId])
    return (
        <div>
            <div className='my-5'>
                <Card className='mx-auto login-card'>
                    <Card.Img variant="top" src={singleBlog?.img} />
                    <Card.Body>
                        <Card.Title>Category: {singleBlog?.category}</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}><b>About:</b> {singleBlog?.about}</Card.Text>
                        <Button as={Link} to='/blog' className="btn-grad mx-5">Back</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default BlogDetail;