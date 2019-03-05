import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Sidebar from '../containers/Sidebar';
import Boards from '../containers/Boards';
import Team from '../containers/Team';

const Dashboard = () => {
  return (
    <div className="container-fluid boards">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-9 offset-1">
          <Switch>
            <Route path="/dashboard/teams/:id" component={Team} />
            <Route path="/dashboard/boards" component={Boards} />
            <Redirect from="/" exact to="/dashboard/boards" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
