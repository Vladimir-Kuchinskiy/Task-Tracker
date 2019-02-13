import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 className="navbar-brand">Task Tracker</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-item nav-link" to="/boards">
                Boards
              </NavLink>
            </li>
          </ul>
          <NavLink className="btn btn-outline-success my-2 my-sm-0" to="/login">
            Sign in
          </NavLink>
          <NavLink className="btn btn-outline-primary my-2 my-sm-0" to="/register">
            Sign up
          </NavLink>
          {/* <React.Fragment>
            <NavLink className="nav-item " to="/profile">
              Username
            </NavLink>
            <NavLink className="nav-item nav-link" to="/logout">
              Logout
            </NavLink>
          </React.Fragment> */}
        </div>
      </nav>
    );
  }
}

export default NavBar;
