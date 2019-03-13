import { connect } from 'react-redux';
import Invites from '../../components/Invites/Invites';
import { getInvites } from '../../actions/invitesActions';

const mapStateToProps = ({ invites, auth }) => {
  return {
    invites: Object.values(invites.invites),
    authToken: auth.authToken,
    loading: invites.loading
  };
};

export default connect(
  mapStateToProps,
  { getInvites }
)(Invites);
