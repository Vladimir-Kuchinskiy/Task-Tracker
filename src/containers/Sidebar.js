import { connect } from 'react-redux';

import { getTeams } from '../actions/teamsActions';
import Sidebar from '../components/Sidebar';

const mapStateToProps = ({ auth, profile: { avatar } }) => {
  return {
    avatarUrl: avatar.url,
    authToken: auth.authToken
  };
};

export default connect(
  mapStateToProps,
  { getTeams }
)(Sidebar);
