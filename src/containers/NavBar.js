import { connect } from 'react-redux';

import { getProfile } from '../actions/profileActions';
import NavBar from '../components/NavBar';

const mapStateToProps = ({ auth, profile: { info } }) => {
  return {
    isSignedIn: auth.authToken !== null,
    email: info.attributes.email,
    authToken: auth.authToken
  };
};

export default connect(
  mapStateToProps,
  { getProfile }
)(NavBar);
