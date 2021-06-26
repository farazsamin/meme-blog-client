import axios from 'axios';
import BlogPost from '../BlogPost/BlogPost'
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/blogs').then((response) => {
            setBlogs(response.data)
        })
    }, [])
    return (
        <div>
            {
                blogs.map(name => <BlogPost name={name}></BlogPost>)
            }
        </div>
    );
};

export default Home;