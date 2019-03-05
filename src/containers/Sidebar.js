import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { getTeams } from '../actions/teamsActions';
import Sidebar from '../components/Sidebar';

const mapStateToProps = ({ auth }) => {
  return {
    userEmail: auth.authToken && jwt_decode(auth.authToken).email,
    authToken: auth.authToken
  };
};

export default connect(
  mapStateToProps,
  { getTeams }
)(Sidebar);
