import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';

import ProfileInfo from '../../components/Profile/ProfileInfo';

const mapStateToProps = ({ auth }) => {
  return {
    userEmail: auth.authToken && jwt_decode(auth.authToken).email,
    authToken: auth.authToken
  };
};

export default connect(mapStateToProps)(ProfileInfo);
