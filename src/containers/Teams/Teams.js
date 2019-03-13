import { connect } from 'react-redux';
import { getTeams } from '../../actions/teamsActions';
import Teams from '../../components/Teams/Teams';

const mapStateToProps = ({ auth, teams }) => {
  return {
    teams: Object.values(teams.teams),
    authToken: auth.authToken
  };
};

export default connect(
  mapStateToProps,
  { getTeams }
)(Teams);
