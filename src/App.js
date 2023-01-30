import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import Post from './Components/Post/Post';




function App() {
  const [posts, setPosts] = useState([{name: 'Jesse Calhoun', post: 'My daughter is learning to hold a pen and write letters and numbers.'}])
  return (
    <div >
      <h3>SocialFeed</h3>
      <CreatePostForm/>
      <Post feedPosts={posts}/>
    </div>
  );
}

export default App;
