import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';

import { getProfile } from '../../actions/profileActions';

import ProfileInfo from '../../components/Profile/ProfileInfo';

const mapStateToProps = ({ auth, profile }) => {
  const avatarUrl =
    profile.profile.avatarUrl === ''
      ? require(`../../images/avatar-placeholder.png`)
      : `${process.env.REACT_APP_URL}${profile.profile.avatarUrl}`;
  const { firstName, lastName, gender } = profile.profile;
  const resultProfile = {
    firstName: firstName === 'null' ? '' : firstName,
    lastName: lastName === 'null' ? '' : lastName,
    gender: gender === 'null' ? '' : gender,
    avatarUrl
  };
  return {
    userEmail: auth.authToken && jwt_decode(auth.authToken).email,
    authToken: auth.authToken,
    profile: resultProfile
  };
};

export default connect(
  mapStateToProps,
  { getProfile }
)(ProfileInfo);
