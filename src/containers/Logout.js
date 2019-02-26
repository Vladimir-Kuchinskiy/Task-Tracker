import { connect } from 'react-redux';
import { signOut } from '../actions/auth';
import Logout from '../components/Auth/Logout';

const mapStateToProps = ({ auth }) => {
  return { authToken: auth.authToken };
};

export default connect(
  mapStateToProps,
  { signOut }
)(Logout);
