import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import EditForm from "./forms/editForm";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const CardContainer = styled.li`
  background-color: ${props =>
    props.isDragging ? "rgb(241, 241, 241)" : "#fff"};
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

class Card extends Component {
  state = { data: this.props.card, editCardClicked: false, showModal: false };

  handleSubmit = (e, card) => {
    e.preventDefault();
    if (card.content === "") {
      document.getElementById(card.id).focus();
      return;
    }
    this.props.onSubmit(card);
    this.setState({ ...this.state, editCardClicked: false });
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ ...this.state, editCardClicked: true });
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data.content = input.value;
    this.setState({ ...this.state, data: data });
  };

  toggle = () => {
    this.setState({ ...this.state, showModal: !this.state.showModal });
  };

  render() {
    const { card, index } = this.props;
    return (
      <React.Fragment>
        <Draggable draggableId={card.id} index={index}>
          {(provided, snapshot) => (
            <CardContainer
              className="draggable"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
              onContextMenu={this.handleClick}
              onClick={this.toggle}
            >
              {this.state.editCardClicked ? (
                <EditForm
                  data={this.state.data}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  value="content"
                />
              ) : (
                this.state.data.content
              )}
            </CardContainer>
          )}
        </Draggable>
        <Modal
          isOpen={this.state.showModal}
          toggle={this.toggle}
          size="lg"
          fade={false}
        >
          <ModalHeader toggle={this.toggle}>{card.content}</ModalHeader>

          <ModalBody>
            <h4>Description</h4>
            <p>{card.description}</p>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Card;
