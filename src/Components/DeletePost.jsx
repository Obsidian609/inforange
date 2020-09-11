import React from 'react';
import axios from 'axios';
import CreatePost from './CreatePost'

function UpdatePost(props) {
  const { fetchPosts, setFetchPosts, post} = props;

  const handleDelete = async () => {
    const airTableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/inforange/${post}`
    await axios.delete(airTableURL, { 
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
    });
    setFetchPosts(!fetchPosts);
}

  return (
    <div>
        <CreatePost 
            fetchPosts={fetchPosts}
            setFetchPosts={setFetchPosts}
            post={post}
        />
     <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}

export default UpdatePost;