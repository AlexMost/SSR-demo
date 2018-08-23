import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SpeakersList from './SpeakersList';
import Speaker from './Speaker';
import { Store } from './Store';

const App = (props) => (
  <Store>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SpeakersList}/>
        <Route path="/speaker/:id" exact component={Speaker}/>
      </Switch>
    </BrowserRouter>
  </Store>
);

export default App;
