import React from 'react';
import { BrowserRouter, Switch, Route, StaticRouter } from 'react-router-dom';
import SpeakersList from './SpeakersList';
import Speaker from './Speaker';
import { Store } from './Store';

const isNode = typeof window === 'undefined';

const Router = isNode ? StaticRouter : BrowserRouter;

const App = (props) => (
  <Store posts={props.posts}>
    <Router location={props.location}>
      <Switch>
        <Route path="/" exact component={SpeakersList}/>
        <Route path="/speaker/:id" exact component={Speaker}/>
      </Switch>
    </Router>
  </Store>
);

export default App;
