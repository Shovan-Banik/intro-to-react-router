import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title}=post;
    const navigate=useNavigate();
    const handleNavigation=()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <p>Id: {id}</p>
            <h4>Title: {title}</h4>
            <Link to={`/post/${id}`}>Show details</Link>
            <Link to={`/post/${id}`}><button className='show-btn'>Show post details</button></Link>
            <button onClick={handleNavigation}>button handling</button>
        </div>
    );
};

export default Post;