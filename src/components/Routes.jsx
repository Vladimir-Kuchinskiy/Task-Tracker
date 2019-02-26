import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Auth from '../containers/Auth';
import Logout from '../containers/Logout';
import Board from '../containers/Board';
import Boards from '../containers/Boards';
import NotFound from './NotFound';

const Routes = ({ isSignedIn }) => {
  const routes = isSignedIn ? (
    <Switch>
      <Route path="/logout" component={Logout} />
      <Route path="/boards/:id" component={Board} />
      <Route path="/boards" component={Boards} />
      <Route path="/not-found" component={NotFound} />
      <Redirect from="/" exact to="/boards" />
      <Route path="/auth" component={Auth} />
      <Redirect to="/not-found" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/not-found" component={NotFound} />
      <Redirect from="/" exact to="/auth" />
      <Redirect to="/not-found" />
    </Switch>
  );
  return routes;
};

export default Routes;
