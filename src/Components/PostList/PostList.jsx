import React from 'react';
import Post from '../Post/Post';
import './PostList.css'


const PostList = (props) => {
    let posts =  props.newPosts.map((post) => {
        return <Post post={post}/>;
    })
    return <div className='post-list'>{posts}</div>;
}
 
export default PostList;

