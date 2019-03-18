import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import withDroppable from '../../hoc/withDroppable';
import Cards from '../Cards/Cards';
import ListFooter from './ListFooter';
import './styles/ListBody.css';

const CardsList = styled.ul`
  list-style: none;
  background-color: ${props => (props.isDraggingOver ? '#c8cacc' : '')};
  max-height: calc(100% - 36px - 36px);
  overflow-y: auto;
`;

const ListBody = ({ cards, id, provided, snapshot }) => {
  return (
    <div className="list-container" ref={provided.innerRef} {...provided.droppableProps}>
      <CardsList isDraggingOver={snapshot.isDraggingOver}>
        <Cards cards={cards} />
        {provided.placeholder}
      </CardsList>
      <ListFooter listId={id} />
    </div>
  );
};

ListBody.propTypes = {
  cards: PropTypes.array,
  id: PropTypes.string,
  provided: PropTypes.object,
  snapshot: PropTypes.object
};

CardsList.propTypes = {
  isDraggingOver: PropTypes.bool
};

export default withDroppable(ListBody);
