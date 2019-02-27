import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import NavBar from '../components/NavBar';

const mapStateToProps = ({ auth }) => {
  return {
    isSignedIn: auth.authToken !== null,
    userEmail: auth.authToken && jwt_decode(auth.authToken).email
  };
};

export default connect(mapStateToProps)(NavBar);
