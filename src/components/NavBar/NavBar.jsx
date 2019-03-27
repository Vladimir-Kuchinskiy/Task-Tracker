import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';

import { Session } from '../Auth';

const history = createBrowserHistory();

// TODO: Refactor to reactstrap
class NavBar extends Component {
  componentDidMount() {
    const { authToken, getProfile } = this.props;
    if (!history.location.pathname.includes('profile')) getProfile(authToken);
  }

  render() {
    const { isSignedIn, email } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 className="navbar-brand">Task Tracker</h1>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {isSignedIn && (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-item nav-link" to="/dashboard/boards">
                  Boards
                </NavLink>
              </li>
            </ul>
          )}
          <ul className="navbar-nav mr-auto" />
          {isSignedIn ? (
            <React.Fragment>
              <Session userEmail={email} />
              <NavLink className="btn btn-outline-success ml-2 my-sm-0" to="/logout">
                Sign Out
              </NavLink>
            </React.Fragment>
          ) : (
            <NavLink className="btn btn-outline-success ml-2 my-sm-0" to="/auth">
              Sign in
            </NavLink>
          )}
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired
};

export default NavBar;
