import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles/TeamsSidebar.css';

const TeamsSidebar = ({ teamId, membersCount }) => {
  return (
    <div id="sidebar-main" className="sidebar sidebar-default sidebar-separate sidebar-fixed">
      <div className="sidebar-content">
        <div className="sidebar-category sidebar-default">
          <div className="category-content">
            <ul id="sidebar-editable-nav" className="nav flex-column">
              <li className="nav-item">
                <NavLink className="nav-link" to={`/dashboard/teams/${teamId}/boards`}>
                  Boards
                </NavLink>
                <NavLink className="nav-link" to={`/dashboard/teams/${teamId}/members`}>
                  Members
                  <span
                    className="badge badge-pill badge-secondary pull-right"
                    style={{ fontSize: '1em' }}
                  >
                    {membersCount}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

TeamsSidebar.propTypes = {
  teamId: PropTypes.string,
  membersCount: PropTypes.number
};

export default TeamsSidebar;
