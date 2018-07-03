import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Root from './root';
import UserPage from './user-page';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Root} />
      <Route path="/logged-in" component={UserPage} />
    </Switch>
  );
};

export default Routes;
