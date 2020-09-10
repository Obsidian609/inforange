import React, { useState } from 'react';

function CreatePost(props) {
  const [title, setTitle] = useState('')
  const [text, setText] = useState ('');
  const [author, setAuthor] = useState ('Anonymous');

  return (
    <div className="App" className="createpost">
     <form>
     <label htmlFor="title">Title</label>
       <input value={ title } 
       onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="title">Post</label>
       <input value={ text } 
       onChange={(e) => setText(e.target.value)} />
        <label htmlFor="title">Author</label>
       <input value={ author } 
       onChange={(e) => setAuthor(e.target.value)}/>
       <button type="submit">Submit Post</button>
     </form>
    </div>
  )
}

export default CreatePost;