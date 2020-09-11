import React, { useState } from 'react';
import axios from 'axios';

function CreatePost(props) {
  const{setFetchPosts} = props
  const [title, setTitle] = useState('')
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('Anonymous');

  const posts = {
    display: 'flex',
    margin: '20px 530px',
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
    props.setFetchPosts(!props.fetchPosts);
        setTitle('')
        setText('')
        setAuthor('')
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
     </form>
    </div>
  )
}

export default CreatePost;