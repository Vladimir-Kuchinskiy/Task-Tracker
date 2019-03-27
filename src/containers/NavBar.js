import { connect } from 'react-redux';

import { getProfile } from '../actions/profileActions';
import NavBar from '../components/NavBar';

const mapStateToProps = ({ auth, profile: { profile } }) => {
  return {
    isSignedIn: auth.authToken !== null,
    email: profile.email,
    authToken: auth.authToken
  };
};

export default connect(
  mapStateToProps,
  { getProfile }
)(NavBar);
