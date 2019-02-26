import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import ListHeader from '../../../containers/ListHeader';
import Cards from '../Cards/Cards';
import ListFooter from './ListFooter';
import './styles/List.css';

const CardsList = styled.ul`
  list-style: none;
  background-color: ${props => (props.isDraggingOver ? '#c8cacc' : '')};
  max-height: calc(100% - 36px - 36px);
  overflow-y: auto;
`;

const List = props => {
  const { cards, index } = props;
  const { id: listId, title } = props.list;
  return (
    <Draggable draggableId={`list-${listId}`} index={index} type="card">
      {provided => (
        <div
          className="list list-header-wrapper"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <ListHeader dragHandleProps={provided.dragHandleProps} listId={listId} title={title} />
          <Droppable droppableId={listId} type="card">
            {(provided, snapshot) => (
              <div className="list-container" ref={provided.innerRef} {...provided.droppableProps}>
                <CardsList isDraggingOver={snapshot.isDraggingOver}>
                  <Cards cards={cards} />
                  {provided.placeholder}
                </CardsList>
                <ListFooter listId={listId} />
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default List;
