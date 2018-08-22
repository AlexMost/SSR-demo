import React from 'react';
import PostList from './Speakers';
import { getPosts } from '../shared/api';

class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  async componentDidMount() {
      const posts = await getPosts();
      this.setState({ posts });
  }

  render() {
    if (!this.state.posts.length) {
      return "Loading ...";
    }
    return (
      <main className="content">
        <h1>Speakers</h1>
        <PostList posts={this.state.posts}/>
      </main>
    );
  }
}

export default App;
