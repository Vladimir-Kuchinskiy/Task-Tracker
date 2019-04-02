import React, { Component } from 'react';

import TransactionModal from './TransactionModal';
import MembershipCard from '../../../containers/Profile/MembershipCard';

class Membership extends Component {
  state = { showModal: false };

  componentDidMount() {
    const { getSubscription, authToken } = this.props;
    getSubscription(authToken);
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { showModal } = this.state;
    return (
      <React.Fragment>
        <h2 className="row">Membership</h2>
        <div className="row justify-content-center mt-3 mb-4">
          <MembershipCard toggleModal={this.toggleModal} />
          <TransactionModal showModal={showModal} toggleModal={this.toggleModal} />
        </div>
      </React.Fragment>
    );
  }
}

export default Membership;
