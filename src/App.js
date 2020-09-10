import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Nav from './Components/Nav'
import Posts from './Components/Posts'
import CreatePosts from './Components/CreatePost'
import UpdatePosts from './Components/UpdatePosts'


function App(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/inforange?Grid%20View`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setPosts(response.data.records);
    }
    getPosts();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Posts />
    </div>
  );
}

export default App;