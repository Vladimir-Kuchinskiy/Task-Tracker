import React, { Component } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Card from "./card";
import styled from "styled-components";

const CardsList = styled.ul`
  list-style: none;
  background-color: ${props => (props.isDraggingOver ? "#c8cacc" : "")};
  margin: 0;
  max-height: calc(100% - 36px - 36px);
  overflow-y: auto;
  min-height: 54px;
`;

const ListContainer = styled.div`
  width: 300px;
  height: calc(100% - 10px - 17px);
`;

const Title = styled.header``;

class InnerList extends Component {
  shouldComponentUpdate(newProps) {
    if (newProps.cards === this.props.cards) {
      return false;
    }

    return true;
  }

  render() {
    return this.props.cards.map((card, index) => (
      <Card key={card.id} card={card} index={index} />
    ));
  }
}

class List extends Component {
  render() {
    const { list, cards, index } = this.props;
    return (
      <Draggable draggableId={list.id} index={index}>
        {provided => (
          <ListContainer
            className="list"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Title {...provided.dragHandleProps}>{list.title}</Title>
            <Droppable droppableId={list.id} type="card">
              {(provided, snapshot) => (
                <CardsList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList cards={cards} />
                  {provided.placeholder}
                </CardsList>
              )}
            </Droppable>
            <footer>Add a card...</footer>
          </ListContainer>
        )}
      </Draggable>
    );
  }
}

export default List;
