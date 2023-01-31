import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList'



function App() {
  
  const [posts, setPosts] = useState([{name: 'Jesse Calhoun', message: 'My daughter is learning to hold a pen and write letters and numbers.'}])
  
  function addNewPost(post){
    
    let tempPosts = [...posts, post];
    
    setPosts(tempPosts)
  }
  
  return (
    <div className='body'>
      <h3>SocialFeed</h3>
      <CreatePostForm addNewPost={addNewPost}/>
      <PostList newPosts={posts}/>
    </div>
  );
}

export default App;
