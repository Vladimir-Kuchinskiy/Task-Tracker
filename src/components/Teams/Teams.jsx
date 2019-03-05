import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../common/Button';
import NewTeamForm from './NewTeamForm';

class Teams extends Component {
  state = { addTeamClicked: false };

  toggleClick = () => {
    this.setState({ addTeamClicked: !this.state.addTeamClicked });
  };

  renderTeamsList = () => {
    return this.props.teams.map(({ id, name }) => (
      <li className="nav-item" key={id}>
        <NavLink className="nav-link" to={`/dashboard/teams/${id}`}>
          {name}
        </NavLink>
      </li>
    ));
  };

  renderAddTeamButton = () => {
    return (
      <li className="nav-item">
        <hr />
        {this.state.addTeamClicked ? (
          <NewTeamForm onClose={this.toggleClick} />
        ) : (
          <Button classes="btn add-team d-flex" onClick={this.toggleClick} title="Add a team..." />
        )}
      </li>
    );
  };

  render() {
    return (
      <ul id="sidebar-editable-nav" className="nav flex-column">
        {this.renderTeamsList()}
        {this.renderAddTeamButton()}
      </ul>
    );
  }
}

export default Teams;
