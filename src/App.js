import React, { useEffect, useState } from 'react';
import { Route} from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Nav from './Components/Nav'
import Posts from './Components/Posts'
import AboutMe from './Components/AboutMe'
import CreatePost from './Components/CreatePost'
import UpdatePost from './Components/DeletePost'

function App() {
  const [posts, setPosts] = useState([]);
  const [fetchPosts, setFetchPosts] = useState(false);

  const app = {
    textAlign: 'center',
    fontFamily: 'Kufam',
  }

  const newPosts= {
    border: '10px solid black',
    paddingTop: '10px',
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
    <div className='app' style={app}>
      <Nav />
      <div className='navDiv' style={newPosts}>
      <Route path="/aboutme" >
        <AboutMe />
      </Route>
      <Route path="/" exact>
      <Posts posts={ posts }/>
      </Route>
      <Route path="/createposts">
        <CreatePost setFetchPosts= { setFetchPosts }/>
      </Route>
      <UpdatePost />
      </div>
    </div>
      );
}

export default App;