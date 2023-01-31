import React, { useState } from 'react';
import './CreatePostForm.css'

const CreatePostForm = (props) => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            message: message
        };
        console.log(newPost)
        props.addNewPost(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}></input>
            </div>
            <div>
                <label>Post</label>
                <input type='text' value={message} onChange={(event) => setMessage(event.target.value)}></input>
                <button className='create-button' type='submit'>Create</button>
            </div>
        </form>
     );
}
 
export default CreatePostForm;