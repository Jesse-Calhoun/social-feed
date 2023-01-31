import React, { useState } from 'react';
import './Post.css'


const Post = (props) => {
    const [isLiked, setLikedPost] = useState(false);
    const [isDisliked, setDislikedPost] = useState(false);

    function handleLike(){
        setLikedPost(!isLiked)
    }

    function handleDislike(){
        setDislikedPost(!isDisliked)
    }
    return ( 
        <div className='flex-container' id='wrapped-post'>
            <h5>{props.post.name}</h5>
            <div>{props.post.message}</div>
            <div className='slide-right' id='toggle-buttons'>
                <button className={isLiked ? 'like-button' : ''} onClick={handleLike}>Like</button>
                <button className={isDisliked ? 'dislike-button': ''} onClick={handleDislike}>Dislike</button>
            </div>
        </div>
     );
}
 
export default Post;