import React, { useState } from 'react';


const Post = (props) => {
    return ( 
        <div id='wrapped-post'>
            <div>{props.post.name}</div>
            <div>{props.post.message}</div>
            <div id='toggle-buttons'>
                <button>Like</button>
                <button>Dislike</button>
            </div>
        </div>
     );
}
 
export default Post;