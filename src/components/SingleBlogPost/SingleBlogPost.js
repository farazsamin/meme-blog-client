import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlogPost = ()=> {
    const [blogs, setBlogs] = useState([]);

    let {_id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:5000/single-blog/${_id}`).then((response) => {
            setBlogs(response.data[0])
            // setLoading(false)
        })
    }, [])
    console.log(blogs)
    const {blogTitle,blogContent,imageUrl} = blogs;

    const handleDeleteBlog =(id)=>{
        axios.delete(`http://localhost:5000/delete/${id}`, {
        })
    }
    return (
        <div>  
         <span >{blogTitle}</span>
         <button  class="ml-5"onClick={()=>handleDeleteBlog(_id)}>Delete</button>
         <img src={imageUrl} alt="" />
         <p>{blogContent}</p>
         
           
        </div>
    );
};

export default SingleBlogPost;