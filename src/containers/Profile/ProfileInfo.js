import { connect } from 'react-redux';

import { getProfile } from '../../actions/profileActions';

import ProfileInfo from '../../components/Profile/Info/ProfileInfo';

const mapStateToProps = ({ auth, profile: { info } }) => {
  const resultProfile = {
    ...info.attributes,
    avatarUrl: info.avatarUrl
  };

  return {
    authToken: auth.authToken,
    profile: resultProfile,
    loading: info.loading
  };
};

export default connect(
  mapStateToProps,
  { getProfile }
)(ProfileInfo);
