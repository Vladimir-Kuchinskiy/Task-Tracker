import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Button from '../../common/Button';
import NewListForm from './NewListForm';
import List from '../../../containers/List';
import './styles/Lists.css';

const Lists = ({ lists }) => {
  const [addList, setAddList] = useState(false);

  const listComponents = lists.map((list, index) => {
    return (
      <List
        listId={list.id}
        key={list.id}
        index={index}
        toggleAddList={() => setAddList(!addList)}
      />
    );
  });

  const addListComponent = (
    <div className="add-list-container">
      {addList ? (
        <NewListForm onClose={() => setAddList(!addList)} />
      ) : (
        <Button
          onClick={() => setAddList(!addList)}
          classes="btn btn-outline-warning add-list"
          title="Add a list..."
        />
      )}
    </div>
  );

  return (
    <div className="droppable-wrapper">
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {provided => (
          <div className="lists" {...provided.droppableProps} ref={provided.innerRef}>
            {listComponents}
            {provided.placeholder}
            {addListComponent}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Lists;
