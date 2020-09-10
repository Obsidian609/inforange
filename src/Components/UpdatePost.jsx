import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';

function UpdatePost(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/inforange?Grid%20View`;
      const response = await axios.put(airtableURL, {
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
     
    </div>
  );
}

export default UpdatePost;

proud of
whats left - another Component, css and media queries
