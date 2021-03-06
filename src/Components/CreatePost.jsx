import React, { useState } from 'react';
import axios from 'axios';

function CreatePost(props) {
  const { fetchPosts, setFetchPosts } = props
  const [title, setTitle] = useState('')
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('Anonymous');

  const posts = {
    display: 'flex',
    margin: '0 auto',
    marginTop: '5px',
    marginBottom: '15px',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

  const createPost = async (fields) => {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/inforange`;
    const response = await axios.post(airtableURL, {fields: fields}, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    setFetchPosts(response)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      title: title,
      text: text,
      author: author,
    }
    createPost(fields);
    setFetchPosts(prevFetch => !prevFetch)
  }
//
  const handleDelete = async () => {
    const airTableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/inforange/`
    await axios.delete(airTableURL, { 
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
    });
    setFetchPosts(!fetchPosts);
}
//
  return (
    <div>
     <form onSubmit={(e) => handleSubmit(e)}>
     <label htmlFor="title">Title</label>
       <input style={posts} id="title" value={ title } 
       onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="text">Post</label>
       <input style={posts} id="text" value={ text } 
       onChange={(e) => setText(e.target.value)} />
        <label htmlFor="author">Author</label>
       <input style={posts} id="author" value={ author } 
       onChange={(e) => setAuthor(e.target.value)}/>
       <button type="submit">Submit Post</button>
       <button onClick={handleDelete}>Delete Post</button>

     </form>
    </div>
  )
}

export default CreatePost;