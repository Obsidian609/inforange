import React, { useEffect, useState } from 'react';
import { Route} from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Nav from './Components/Nav'
import Posts from './Components/Posts'
import AboutMe from './Components/AboutMe'
import CreatePost from './Components/CreatePost'
// import DeletePost from './Components/DeletePost'

function App() {
  const [posts, setPosts] = useState([]);
  const [fetchPosts, setFetchPosts] = useState(false);

  const app = {
    textAlign: 'center',
    fontFamily: 'Kufam',
  }

  const newPosts= {
    border: '10px solid black',
  }

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
    <div style={app}>
      <Nav />
      <Route path="/aboutme" >
        <AboutMe />
      </Route>
      <Route path="/" exact>
      <Posts posts={ posts }/>
      </Route>
      <Route path="/createposts">
        <CreatePost  setFetchPosts= { setFetchPosts }/>
      </Route>
    </div>
      );
}

export default App;