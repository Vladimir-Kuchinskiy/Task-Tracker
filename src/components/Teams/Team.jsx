import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../common/Spinner';
import BoardsDisplayer from '../common/BoardsDisplayer';
import TeamsSidebar from './TeamsSidebar';
import Members from '../../containers/Teams/Members';

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

  renderRouting = () => {
    const { team, boards, isCreator } = this.props;
    return (
      <Switch>
        <Route path="/dashboard/teams/:id/members" exact component={Members} />
        <Route
          path="/dashboard/teams/:id/boards"
          exact
          render={() => (
            <BoardsDisplayer
              title={team.name}
              boards={boards}
              teamId={team.id}
              isCreator={isCreator}
            />
          )}
        />
        <Redirect from="/dashboard/teams/:id" exact to="/dashboard/teams/:id/boards" />
        <Redirect to="/not-found" />
      </Switch>
    );
  };

  render() {
    const { loading, team, membersCount } = this.props;
    return loading ? (
      <Spinner style={{ marginLeft: '36%' }} />
    ) : (
      <div className="row boards">
        <div className="col-9">{this.renderRouting()}</div>
        <div className="col-3">
          <TeamsSidebar teamId={team.id} membersCount={membersCount} />
        </div>
      </div>
    );
  }
}

export default Team;
