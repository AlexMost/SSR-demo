import React from 'react';
import { getPosts } from '../shared/api';

const StoreContext = React.createContext({
  loading: false,
  posts: [],
});


export class Store extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { posts: this.props.posts || [] };
  }

  async componentDidMount() {
    if (this.state.posts.length) return;
    this.setState({ loading: true });
    const posts = await getPosts();
    this.setState({ posts, loading: false });
  }

  render() {
    const posts = this.state.posts;
    const loading = this.state.loading;
    return (
      <StoreContext.Provider value={{ posts, loading }}>
        { this.props.children}
      </StoreContext.Provider>
    )
  }
};

export const withStore = (Component) => (props) => {
  return (
    <StoreContext.Consumer>
      {
        (ctx) => <Component {...Object.assign({}, ctx, props)} />
      }
    </StoreContext.Consumer>
  )
}