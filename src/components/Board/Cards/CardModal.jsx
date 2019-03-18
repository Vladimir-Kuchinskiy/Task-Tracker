import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';

import DeleteCardPopover from '../../../containers/Board/DeleteCardPopover';
import Button from '../../common/Button';

class CardModal extends Component {
  state = { showPopover: false };

  togglePopover = () => {
    this.setState({ showPopover: !this.state.showPopover });
  };

  renderPopover = () => {
    return (
      <DeleteCardPopover
        card={this.props.card}
        isOpen={this.state.showPopover}
        toggle={this.togglePopover}
      />
    );
  };

  renderModalBody = () => {
    return (
      <div>
        <h4>Description</h4>
        <p>{this.props.card.description}</p>
        <Button
          classes="btn btn-danger pull-right"
          title="Delete"
          id="Popover1"
          onClick={this.togglePopover}
        />
      </div>
    );
  };

  render() {
    const { showModal, toggleModal, card } = this.props;
    return (
      <Modal isOpen={showModal} toggle={toggleModal} size="lg" fade={false}>
        <ModalHeader toggle={toggleModal}>{card.content}</ModalHeader>
        <ModalBody>
          {this.renderModalBody()}
          {this.renderPopover()}
        </ModalBody>
      </Modal>
    );
  }
}

CardModal.propTypes = {
  card: PropTypes.object,
  showModal: PropTypes.bool,
  toggleModal: PropTypes.func
};

export default CardModal;
