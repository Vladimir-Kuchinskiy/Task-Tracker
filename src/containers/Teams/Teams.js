import { connect } from 'react-redux';

import { getTeams } from '../../actions/teamsActions';
import Teams from '../../components/Teams/Teams';

const mapStateToProps = ({ auth, teams, profile: { membership } }) => {
  return {
    teams: Object.values(teams.teams),
    loading: teams.loading,
    authToken: auth.authToken,
    isMember: membership.isMember
  };
};

export default connect(
  mapStateToProps,
  { getTeams }
)(Teams);
