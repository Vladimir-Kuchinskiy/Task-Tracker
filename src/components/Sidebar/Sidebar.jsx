import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Teams from '../../containers/Teams/Teams';
import './Sidebar.css';

class Sidebar extends Component {
  componentDidMount() {
    const { authToken, getTeams } = this.props;
    getTeams(authToken);
  }

  render() {
    return (
      <div id="sidebar-main" className="sidebar sidebar-default sidebar-separate sidebar-fixed">
        <div className="sidebar-content">
          <div className="sidebar-category sidebar-default">
            <div className="sidebar-user">
              <div className="category-content">
                <h6>{this.props.userEmail}</h6>
              </div>
            </div>
          </div>
          <div className="sidebar-category sidebar-default">
            <div className="category-content">
              <ul id="sidebar-editable-nav" className="nav flex-column">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard/boards">
                    Your Boards
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-category sidebar-default">
            <div className="category-title">
              <span>Your Teams</span>
            </div>
            <div className="category-content">
              <Teams />
            </div>
          </div>
          <div className="sidebar-category sidebar-default">
            <div className="category-content">
              <ul id="sidebar-editable-nav" className="nav flex-column">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard/invites">
                    Invites
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  authToken: PropTypes.string,
  userEmail: PropTypes.string,
  getTeams: PropTypes.func
};

export default Sidebar;
