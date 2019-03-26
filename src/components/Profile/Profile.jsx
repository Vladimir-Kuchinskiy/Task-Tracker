import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import ProfileInfo from '../../containers/Profile/ProfileInfo';
import Membership from './Membership';
import SecondarySidebar from '../common/SecondarySidebar';

class Profile extends Component {
  renderRouting = () => {
    return (
      <Switch>
        <Route path="/dashboard/profile/info" exact component={ProfileInfo} />
        <Route path="/dashboard/profile/membership" exact component={Membership} />
        <Redirect from="/dashboard/profile" exact to="/dashboard/profile/info" />
        <Redirect to="/not-found" />
      </Switch>
    );
  };

  getLinks = () => {
    return [
      <NavLink className="nav-link" to="/dashboard/profile/info">
        Profile info
      </NavLink>,
      <NavLink className="nav-link" to="/dashboard/profile/membership">
        Membership
      </NavLink>
    ];
  };

  render() {
    return (
      <div className="row">
        <div className="col-9">{this.renderRouting()}</div>
        <div className="col-3">
          <SecondarySidebar links={this.getLinks()} />
        </div>
      </div>
    );
  }
}

export default Profile;
