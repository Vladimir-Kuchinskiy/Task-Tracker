import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import './styles/Card.css';
import EditCardForm from './EditCardForm';
import CardModal from '../../../containers/CardModal';

const CardContainer = styled.li`
  background-color: ${props => (props.isDragging ? 'rgb(241, 241, 241)' : '#fff')};
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const Card = ({ card: { id, listId, content }, index }) => {
  const [editCard, setEditCard] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleEditCard = e => {
    if (e) e.preventDefault();
    setEditCard(!editCard);
  };

  const toggleModal = () => {
    if (editCard) return;
    setShowModal(!showModal);
  };

  const renderCardContent = (provided, snapshot) => {
    return (
      <CardContainer
        className="draggable"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
        onContextMenu={toggleEditCard}
        onClick={toggleModal}
      >
        {content}
      </CardContainer>
    );
  };

  const editCardForm = (
    <li className="edit-card">
      <EditCardForm
        form={`EditCardForm-${id}-${listId}`}
        cardId={id}
        listId={listId}
        initialValues={{ content }}
        onEdit={toggleEditCard}
      />
    </li>
  );

  return (
    <React.Fragment>
      <Draggable draggableId={`card-${id}`} index={index}>
        {(provided, snapshot) => (editCard ? editCardForm : renderCardContent(provided, snapshot))}
      </Draggable>
      <CardModal showModal={showModal} toggleModal={toggleModal} cardId={id} />
    </React.Fragment>
  );
};

export default Card;
