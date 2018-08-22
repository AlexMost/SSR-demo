import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SpeakersList from './SpeakersList';
import Speaker from './Speaker';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SpeakersList}/>
      <Route path="/speaker/:id" exact component={Speaker}/>
    </Switch>
  </BrowserRouter>
);

export default App;
