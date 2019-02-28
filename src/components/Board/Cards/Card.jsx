import React, { Component } from 'react';
import styled from 'styled-components';

import withDraggable from '../../hoc/withDraggable';

import './styles/Card.css';
import EditCardForm from './EditCardForm';
import CardModal from '../../../containers/CardModal';

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
    const { editCardClicked, showModal } = this.state;
    if (editCardClicked) return;
    this.setState({ showModal: !showModal });
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
    const { id, content, listId } = this.props.card;
    return (
      <li className="edit-card">
        <EditCardForm
          form={`EditCardForm-${id}-${listId}`}
          cardId={id}
          listId={listId}
          initialValues={{ content }}
          onEdit={this.toggleEditCard}
        />
      </li>
    );
  };

  render() {
    const { editCardClicked, showModal } = this.state;
    const { card, provided, snapshot } = this.props;
    return (
      <React.Fragment>
        {editCardClicked ? this.renderEditCardForm() : this.renderCardContent(provided, snapshot)}
        <CardModal showModal={showModal} toggleModal={this.toggleModal} cardId={card.id} />
      </React.Fragment>
    );
  }
}

export default withDraggable(Card);
