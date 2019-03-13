import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../common/Button';
import NewTeamForm from './NewTeamForm';

class Teams extends Component {
  state = { addTeamClicked: false };

  toggleClick = () => {
    this.setState({ addTeamClicked: !this.state.addTeamClicked });
  };

  renderHr = id => {
    const { teams } = this.props;
    return id === teams[teams.length - 1].id && <hr />;
  };

  renderTeamsList = () => {
    const { teams } = this.props;
    return teams.map(({ id, name }) => (
      <React.Fragment key={id}>
        <li className="nav-item">
          <NavLink className="nav-link" to={`/dashboard/teams/${id}`}>
            {name}
          </NavLink>
          {this.renderHr(id)}
        </li>
      </React.Fragment>
    ));
  };

  renderAddTeamButton = () => {
    return (
      <li className="nav-item">
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
