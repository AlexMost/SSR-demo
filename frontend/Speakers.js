import React from 'react';
import Speaker from './Speaker';

const Speakers = (props) => {
    return (
        <ul>
            { props.posts.map((post) => <Speaker key={post.id} {...post} />)}
        </ul>
    )
}

export default Speakers;
