import { connect } from 'react-redux';

import { getTeams } from '../actions/teamsActions';
import Sidebar from '../components/Sidebar';

const mapStateToProps = ({ auth, profile: { profile } }) => {
  const finalAvatarUrl =
    profile.avatarUrl === '' ? require(`../images/avatar-placeholder.png`) : profile.avatarUrl;
  return {
    avatarUrl: finalAvatarUrl,
    authToken: auth.authToken
  };
};

export default connect(
  mapStateToProps,
  { getTeams }
)(Sidebar);
