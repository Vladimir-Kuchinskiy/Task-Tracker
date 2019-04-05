import { connect } from 'react-redux';

import { getTeams } from '../actions/teamsActions';
import Sidebar from '../components/Sidebar';

const mapStateToProps = ({ auth, profile: { info } }) => {
  return {
    avatarUrl: info.avatarUrl,
    authToken: auth.authToken
  };
};

export default connect(
  mapStateToProps,
  { getTeams }
)(Sidebar);
