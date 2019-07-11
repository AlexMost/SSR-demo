import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Switch, Route, StaticRouter } from 'react-router-dom';
import { Store } from './Store';
const SpeakersList = loadable(() => import('./SpeakersList'));
const Speaker = loadable(() => import('./Speaker'));

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
