import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import ListHeader from '../containers/ListHeader';
import Cards from './Cards';
import ListFooter from './ListFooter';

const CardsList = styled.ul`
  list-style: none;
  background-color: ${props => (props.isDraggingOver ? '#c8cacc' : '')};
  max-height: calc(100% - 36px - 36px);
  overflow-y: auto;
`;

const ListContainer = styled.div`
  width: 300px;
  height: calc(100% - 10px - 17px);
`;

class List extends Component {
  render() {
    const { cards, index } = this.props;
    const { id: listId, title } = this.props.list;
    return (
      <Draggable draggableId={listId} index={index}>
        {provided => (
          <ListContainer className="list" {...provided.draggableProps} ref={provided.innerRef}>
            <ListHeader dragHandleProps={provided.dragHandleProps} listId={listId} title={title} />
            <Droppable droppableId={listId} type="card">
              {(provided, snapshot) => (
                <div
                  className="list-container"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <CardsList isDraggingOver={snapshot.isDraggingOver}>
                    <Cards cards={cards} />
                    {provided.placeholder}
                  </CardsList>
                  <ListFooter listId={listId} />
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
