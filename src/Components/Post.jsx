import React from 'react';

const Post = (props) => {
    return (
        <div>
            <p>{props.post.fields.title} {props.post.fields.text} {props.post.fields.author}</p>
        </div>
    );
};

export default Post;