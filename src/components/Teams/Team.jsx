import React, { Component } from 'react';
import Spinner from '../common/Spinner';

class Team extends Component {
  componentDidMount() {
    const { authToken, match, getTeam } = this.props;
    getTeam(match.params.id, authToken);
  }

  componentDidUpdate({ match: { params } }) {
    const { authToken, match, getTeam } = this.props;
    if (params.id !== match.params.id) {
      getTeam(match.params.id, authToken);
    }
  }

  render() {
    const { loading, team } = this.props;
    return loading ? (
      <Spinner style={{ marginLeft: '36%' }} />
    ) : (
      <div>Team name is: {team.name}</div>
    );
  }
}

export default Team;
