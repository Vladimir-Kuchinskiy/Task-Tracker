import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import MembershipBraintreeDropin from '../../../containers/Profile/MembershipBraintreeDropin';

const TransactionModal = ({ showModal, toggleModal }) => {
  return (
    <Modal className="mt-5" isOpen={showModal} toggle={toggleModal} size="lg" fade={false}>
      <ModalHeader toggle={toggleModal}>Get Membership</ModalHeader>
      <ModalBody style={{ minHeight: '200px' }}>
        <MembershipBraintreeDropin onModalClose={toggleModal} />
      </ModalBody>
    </Modal>
  );
};

export default TransactionModal;
