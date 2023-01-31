import React from 'react';
import Post from '../Post/Post';


const PostList = (props) => {
    let posts =  props.newPosts.map((post) => {
        return <Post post={post}/>;
    })
    return <div id='post-list'>{posts}</div>;
}
 
export default PostList;

