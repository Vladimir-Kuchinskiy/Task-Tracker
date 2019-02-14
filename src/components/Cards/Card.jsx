import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import './styles/Card.css';
import EditCardForm from './EditCardForm';
import CardModal from '../../containers/CardModal';

const CardContainer = styled.li`
  background-color: ${props => (props.isDragging ? 'rgb(241, 241, 241)' : '#fff')};
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

class Card extends Component {
  state = {
    editCardClicked: false,
    showModal: false
  };

  toggleEditCard = e => {
    if (e) e.preventDefault();
    this.setState({ editCardClicked: !this.state.editCardClicked });
  };

  toggleModal = () => {
    if (this.state.editCardClicked) return;
    this.setState({ showModal: !this.state.showModal });
  };

  renderCardContent = (provided, snapshot) => {
    return (
      <CardContainer
        className="draggable"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
        onContextMenu={this.toggleEditCard}
        onClick={this.toggleModal}
      >
        {this.props.card.content}
      </CardContainer>
    );
  };

  renderEditCardForm = () => {
    const { id, listId } = this.props.card;
    return (
      <li className="edit-card">
        <EditCardForm
          form={`EditCardForm-${id}-${listId}`}
          cardId={id}
          onEdit={this.toggleEditCard}
        />
      </li>
    );
  };

  render() {
    const { editCardClicked, showModal } = this.state;
    const { id: cardId } = this.props.card;
    return (
      <React.Fragment>
        <Draggable draggableId={cardId} index={this.props.index}>
          {(provided, snapshot) =>
            editCardClicked ? this.renderEditCardForm() : this.renderCardContent(provided, snapshot)
          }
        </Draggable>
        <CardModal showModal={showModal} toggleModal={this.toggleModal} cardId={cardId} />
      </React.Fragment>
    );
  }
}

export default Card;
