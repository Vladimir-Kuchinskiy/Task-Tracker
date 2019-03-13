import { connect } from 'react-redux';
import Invite from '../../components/Invites/Invite';
import { sendInviteResponse } from '../../actions/invitesActions';

const mapStateToProps = ({ auth }) => {
  return {
    authToken: auth.authToken
  };
};

export default connect(
  mapStateToProps,
  { sendInviteResponse }
)(Invite);
