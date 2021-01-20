import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Page } from './components';
import { WelcomeScreen, SwapiFetcher, SwapiResults } from './views';

export const RootRouter: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Page title="Welcome screen" View={WelcomeScreen} />
    </Route>

    <Route exact path="/swapi-fetcher">
      <Page title="Star Wars Fetcher" View={SwapiFetcher} isProtected />
    </Route>

    <Route exact path="/swapi-results">
      <Page title="Star Wars Results" View={SwapiResults} isProtected />
    </Route>

    <Route exact path="/swapi-results/:id">
      <Page title="Star Wars Results" View={SwapiResults} isProtected />
    </Route>
  </Switch>
);
