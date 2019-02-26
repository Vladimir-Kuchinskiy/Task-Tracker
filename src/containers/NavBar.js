import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

const mapStateToProps = ({ auth }) => {
  return { isSignedIn: auth.authToken !== null, authToken: auth.authToken };
};

export default connect(mapStateToProps)(NavBar);
