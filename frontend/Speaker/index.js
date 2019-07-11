import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { withStore } from '../Store';
import style from './style.css';

const Speaker = withStore(withRouter(({ match, posts }) => {
  const idParam = match.params.id;
  const post = posts.find(({ id }) => id === idParam);
  return (
    <main className="content">
      <Link to="/">{"< Back"}</Link>
      <h1>{post.talkTitle}</h1>
      <img className={style.avatar} src={post.avatar}/>
      <p>{post.talkDescr}</p>
      <Link to="/">{"< Back"}</Link>
    </main>
  );
}));

export default Speaker;
