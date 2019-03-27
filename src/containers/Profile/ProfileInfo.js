import { connect } from 'react-redux';

import { getProfile } from '../../actions/profileActions';

import ProfileInfo from '../../components/Profile/ProfileInfo';

const mapStateToProps = ({ auth, profile: { profile } }) => {
  const { firstName, lastName, gender, avatarUrl, email } = profile;
  const finalAvatarUrl =
    avatarUrl === '' ? require(`../../images/avatar-placeholder.png`) : avatarUrl;

  const resultProfile = {
    email,
    firstName: firstName === 'null' ? '' : firstName,
    lastName: lastName === 'null' ? '' : lastName,
    gender: gender === 'null' ? '' : gender,
    avatarUrl: finalAvatarUrl
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
