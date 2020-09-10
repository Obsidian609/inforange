import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Nav from './Components/Nav'
import Posts from './Components/Posts'
import AboutMe from './Components/AboutMe'
import CreatePost from './Components/CreatePost'
import UpdatePost from './Components/UpdatePost'


function App(props) {
  const [posts, setPosts] = useState([]);
  const [fetchPosts, setFetchPosts] = useState(false);
  useEffect(() => {
    const getPosts = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/inforange`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setPosts(response.data.records);
    }
    getPosts();
  }, [fetchPosts]);

  return (
    <div className="App">
      <Nav />
      <Route path="/AboutMe" >
        <AboutMe />
      </Route>
      <Route path="/" exact>
      <Posts posts={ posts }/>
      </Route>
      <Route path="/CreatePosts">
        <CreatePost />
      </Route>
    </div>
      );
}

export default App;