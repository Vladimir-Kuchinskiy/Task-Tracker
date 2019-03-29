import { connect } from 'react-redux';

import { getProfile } from '../../actions/profileActions';

import ProfileInfo from '../../components/Profile/ProfileInfo';

const mapStateToProps = ({ auth, profile: { info, avatar } }) => {
  const resultProfile = {
    ...info.attributes,
    avatarUrl: avatar.url
  };

  return {
    authToken: auth.authToken,
    profile: resultProfile
  };
};

export default connect(
  mapStateToProps,
  { getProfile }
)(ProfileInfo);
