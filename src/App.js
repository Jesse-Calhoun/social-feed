import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList'
import './Apps.css'



function App() {
  
  const [posts, setPosts] = useState([{name: 'Jesse Calhoun', message: 'My daughter is learning to hold a pen and write letters and numbers.'}])
  
  function addNewPost(post){
    
    let tempPosts = [...posts, post];
    
    setPosts(tempPosts)
  }
  
  return (
    <div >
      <header>
        <h3>Social
          <large className='text-muted'>Feed</large></h3>
      </header>
      <CreatePostForm addNewPost={addNewPost}/>
      <PostList newPosts={posts}/>
    </div>
  );
}

export default App;
