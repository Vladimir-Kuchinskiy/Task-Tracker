import { connect } from 'react-redux';
import { Auth } from '../components/Auth';

const mapStateToProps = ({ auth }) => {
  return { loading: auth.loading, isSignedIn: auth.authToken !== null };
};

export default connect(mapStateToProps)(Auth);
