import React from 'react';

const Post = (props) => {

    const postDiv = {
        margin: '25px',
        border: '5px double black',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    }

    return (
        <div style={postDiv}>
            <p>{props.post.fields.title}</p>
            <p>{props.post.fields.text}</p>
            <p>{props.post.fields.author}</p>
        </div>
    );
};

export default Post;