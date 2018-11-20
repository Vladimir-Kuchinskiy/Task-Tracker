import React, { Component } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import InnerCards from "./innerCards";
import ListHeader from "./listHeader";
import ListFooter from "./listFooter";

const CardsList = styled.ul`
  list-style: none;
  background-color: ${props => (props.isDraggingOver ? "#c8cacc" : "")};
  max-height: calc(100% - 36px - 36px);
  overflow-y: auto;
`;

const ListContainer = styled.div`
  width: 300px;
  height: calc(100% - 10px - 17px);
`;

class List extends Component {
  state = {
    data: { ...this.props.list },
    editListClicked: false,
    showPopover: false
  };

  handleSubmit = (e, list) => {
    e.preventDefault();
    if (list.title === "") {
      document.getElementById(list.id).focus();
      return;
    }
    this.props.onSubmitListForm(list);
    this.setState({ ...this.state, editListClicked: false });
  };

  handleClick = () => {
    this.setState({ ...this.state, editListClicked: true });
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data.title = input.value;
    this.setState({ ...this.state, data: data });
  };

  handleDeleteCard = data => {
    this.props.onDeleteCard(data, this.props.list);
  };

  togglePopover = () => {
    this.setState({ ...this.state, showPopover: !this.state.showPopover });
  };

  handleDelete = list => {
    this.props.onDeleteList(list);
  };

  render() {
    const { list, cards, index, onSubmitCardForm } = this.props;
    return (
      <Draggable draggableId={list.id} index={index}>
        {provided => (
          <ListContainer
            className="list"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <ListHeader
              dragHandleProps={provided.dragHandleProps}
              showPopover={this.state.showPopover}
              data={this.state.data}
              list={this.props.list}
              editListClicked={this.state.editListClicked}
              handleClick={this.handleClick}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleDelete={this.handleDelete}
              togglePopover={this.togglePopover}
            />
            <Droppable droppableId={list.id} type="card">
              {(provided, snapshot) => (
                <div
                  className="list-container"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <CardsList isDraggingOver={snapshot.isDraggingOver}>
                    <InnerCards
                      cards={cards}
                      onSubmit={onSubmitCardForm}
                      onDeleteCard={this.handleDeleteCard}
                    />
                    {provided.placeholder}
                  </CardsList>
                  <ListFooter onSubmitCardForm={onSubmitCardForm} list={list} />
                </div>
              )}
            </Droppable>
          </ListContainer>
        )}
      </Draggable>
    );
  }
}

export default List;
