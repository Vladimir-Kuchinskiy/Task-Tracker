import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Button from '../../common/Button';
import './styles/CardModal.css';

const CardModal = ({ card, authToken, deleteCard, toggleModal, showModal }) => {
  const [showPopover, setShowPopover] = useState(false);

  const popover = (
    <Popover
      placement="bottom"
      target="Popover1"
      isOpen={showPopover}
      toggle={() => setShowPopover(!showPopover)}
    >
      <PopoverHeader>Are you sure you want to delete this card ?</PopoverHeader>
      <PopoverBody>
        <Button
          classes="btn btn-danger delete-card"
          title="Delete"
          id="Popover1"
          onClick={() => {
            deleteCard(card.id, card.listId, authToken);
          }}
        />
      </PopoverBody>
    </Popover>
  );

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
          onClick={() => setShowPopover(!showPopover)}
        />
        {popover}
      </ModalBody>
    </Modal>
  );
};

export default CardModal;
