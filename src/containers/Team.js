import { connect } from 'react-redux';
import Team from '../components/Teams/Team';
import { getTeam } from '../actions/teamActions';

const mapStateToProps = ({ team, auth }) => {
  return {
    team: team.team,
    boards: Object.values(team.boards),
    authToken: auth.authToken,
    loading: team.loading
  };
};

export default connect(
  mapStateToProps,
  { getTeam }
)(Team);
