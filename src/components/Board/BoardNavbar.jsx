import React from 'react';
import EditBoardForm from '../Boards/EditBoardForm';
import DeleteBoard from '../../containers/Board/DeleteBoard';

const BoardNavbar = ({ editClicked, onEdit, board, ...rest }) => {
  const boardTitle = document.getElementById('board-title');
  const titleWidth = boardTitle && boardTitle.offsetWidth;

  return (
    <nav className="navbar">
      {editClicked ? (
        <EditBoardForm
          boardId={board.id}
          form={`EditBoardForm-${board.id}`}
          initialValues={{ title: board.title }}
          onEdit={onEdit}
          boardPage
          inputStyle={{ fontSize: '24px', padding: '0 0 0 4px', width: `${titleWidth}px` }}
        />
      ) : (
        <h4 className="board-title" id="board-title" onClick={onEdit}>
          {board.title}
        </h4>
      )}
      <DeleteBoard params={rest.match.params} history={rest.history} />
    </nav>
  );
};

export default BoardNavbar;
