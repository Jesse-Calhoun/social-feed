import React from 'react';


const PostList = (props) => {
    return (
            <form>
                {props.newPosts.map((post, index) => {
                    return (
                        <div key={index} >
                            <div>{post.name}</div>
                            <div>{post.post}</div>
                            <button>Like</button>
                            <button>Dislike</button>
                        </div>
                    );
                })}
            </form>
     );
}
 
export default PostList;

