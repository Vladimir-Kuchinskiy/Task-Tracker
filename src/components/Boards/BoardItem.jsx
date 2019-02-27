import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/BoardItem.css';
import EditBoardForm from './EditBoardForm';

const BoardItem = ({ board: { id, title } }) => {
  const [editBoard, setEditBoard] = useState(false);

  const toggleEdit = e => {
    if (e) e.preventDefault();
    setEditBoard(!editBoard);
  };

  const editBoardForm = (
    <div className="col-3 edit-board-item">
      <EditBoardForm
        boardId={id}
        form={`EditBoardForm-${id}`}
        initialValues={{ title }}
        onEdit={toggleEdit}
      />
    </div>
  );

  const boardLink = (
    <Link to={`/boards/${id}`} className="col-3 board-item" onContextMenu={toggleEdit}>
      <h3>{title}</h3>
    </Link>
  );

  return editBoard ? editBoardForm : boardLink;
};

export default BoardItem;
