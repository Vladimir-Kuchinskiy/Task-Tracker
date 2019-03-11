import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles/TeamsSidebar.css';

const TeamsSidebar = ({ teamId }) => {
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
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsSidebar;