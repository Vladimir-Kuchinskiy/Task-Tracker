import React from 'react';
import { NavLink } from 'react-router-dom';
import { Session } from '../Auth';

// TODO: Refactor to reactstrap
const NavBar = ({ isSignedIn, authToken }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="navbar-brand">Task Tracker</h1>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {isSignedIn && (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-item nav-link" to="/boards">
                Boards
              </NavLink>
            </li>
          </ul>
        )}
        <ul className="navbar-nav mr-auto" />
        {isSignedIn ? (
          <React.Fragment>
            <Session authToken={authToken} />
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
};

export default NavBar;
