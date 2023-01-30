import React from 'react';


const Post = (props) => {
    return ( 
        <div >
            <table>
                <tbody>
                {props.feedPosts.map((post) => {
                    return (
                    <tr>
                        <div>
                        <td>{post.name}</td>
                        </div>
                        <div>
                        <td>{post.post}</td>
                        </div>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
        </div>
     );
}
 
export default Post;