import React from 'react';
import Post from './Post'

function Posts(props) {  

  return (
    <div className="App">
        { props.posts.map((post) => <Post post={post} />) }
    </div>
  );
}

export default Posts;