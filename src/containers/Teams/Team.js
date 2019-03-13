import { connect } from 'react-redux';
import { getTeam } from '../../actions/teamActions';
import Team from '../../components/Teams/Team';

const mapStateToProps = ({ team, auth }) => {
  return {
    team: team.team,
    boards: Object.values(team.boards),
    authToken: auth.authToken,
    loading: team.loading,
    membersCount: Object.values(team.members).length
  };
};

export default connect(
  mapStateToProps,
  { getTeam }
)(Team);
