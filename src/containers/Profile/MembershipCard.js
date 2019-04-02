import { connect } from 'react-redux';

import { membershipCardContent } from '../../services/viewHelpers';
import MembershipCard from '../../components/Profile/Membership/MembershipCard';

const mapStateToProps = ({ profile: { membership } }) => {
  const isMember = !!membership.subscription;
  return {
    isMember: isMember,
    ...membershipCardContent(isMember, membership.subscription),
    loading: membership.loading
  };
};

export default connect(mapStateToProps)(MembershipCard);
