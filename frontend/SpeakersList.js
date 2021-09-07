import React from 'react';
import SpeakersListItem from './SpeakersListItem';
import { withStore } from './Store';

const Speakers = withStore(({ posts, loading }) => {
    if (loading) return "Loading ..."
    return (
        <main className="content">
            <h1>Speakers</h1>
            <ul>
                { posts.map((post) => <SpeakersListItem key={post.id} {...post} /> ) }
            </ul>
            <ul>
                { posts.map((post) => <SpeakersListItem key={post.id} {...post} /> ) }
            </ul>
            <ul>
                { posts.map((post) => <SpeakersListItem key={post.id} {...post} /> ) }
            </ul>
            <ul>
                { posts.map((post) => <SpeakersListItem key={post.id} {...post} /> ) }
            </ul>
            <ul>
                { posts.map((post) => <SpeakersListItem key={post.id} {...post} /> ) }
            </ul>
            <ul>
                { posts.map((post) => <SpeakersListItem key={post.id} {...post} /> ) }
            </ul>
            <ul>
                { posts.map((post) => <SpeakersListItem key={post.id} {...post} /> ) }
            </ul>
            <ul>
                { posts.map((post) => <SpeakersListItem key={post.id} {...post} /> ) }
            </ul>
            <ul>
                { posts.map((post) => <SpeakersListItem key={post.id} {...post} /> ) }
            </ul>
            <ul>
                { posts.map((post) => <SpeakersListItem key={post.id} {...post} /> ) }
            </ul>
        </main>
    )
});

export default Speakers;
