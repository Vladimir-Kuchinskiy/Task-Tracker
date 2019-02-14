import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

import './styles/CardModal.css';
import Button from '../common/Button';

class CardModal extends Component {
  state = { showPopover: false };

  togglePopover = () => {
    this.setState({ ...this.state, showPopover: !this.state.showPopover });
  };

  renderPopover = () => {
    const {
      card: { id, listId },
      deleteCard
    } = this.props;
    return (
      <Popover
        placement="bottom"
        target="Popover1"
        isOpen={this.state.showPopover}
        toggle={this.togglePopover}
      >
        <PopoverHeader>Are you sure you want to delete this card ?</PopoverHeader>
        <PopoverBody>
          <Button
            classes="btn btn-danger delete-card"
            title="Delete"
            id="Popover1"
            onClick={() => {
              deleteCard(id, listId);
            }}
          />
        </PopoverBody>
      </Popover>
    );
  };

  render() {
    const { showModal, toggleModal, card } = this.props;
    return (
      <Modal isOpen={showModal} toggle={toggleModal} size="lg" fade={false}>
        <ModalHeader toggle={toggleModal}>{card.content}</ModalHeader>
        <ModalBody>
          <h4>Description</h4>
          <p>{card.description}</p>
          <Button
            classes="btn btn-danger pull-right"
            title="Delete"
            id="Popover1"
            onClick={this.togglePopover}
          />
          {this.renderPopover()}
        </ModalBody>
      </Modal>
    );
  }
}

export default CardModal;
