import React from 'react';

import withDraggable from '../../hoc/withDraggable';

import ListHeader from '../../../containers/Board/ListHeader';
import ListBody from './ListBody';
import './styles/List.css';

const List = ({ list: { id, title }, cards, provided }) => {
  return (
    <div className="list list-header-wrapper" {...provided.draggableProps} ref={provided.innerRef}>
      <ListHeader dragHandleProps={provided.dragHandleProps} listId={id} title={title} />
      <ListBody cards={cards} id={id} type="card" />
    </div>
  );
};

export default withDraggable(List);
