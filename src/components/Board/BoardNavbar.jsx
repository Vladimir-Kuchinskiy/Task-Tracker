import React from 'react';
import PropTypes from 'prop-types';

import EditBoardForm from '../Boards/EditBoardForm';
import DeleteBoard from '../../containers/Board/DeleteBoard';

const BoardNavbar = ({ editClicked, onEdit, board, match, history }) => {
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
          teamId={match.params.teamId}
          boardPage
          inputStyle={{ fontSize: '24px', padding: '0 0 0 4px', width: `${titleWidth}px` }}
        />
      ) : (
        <h4 className="board-title" id="board-title" onClick={onEdit}>
          {board.title}
        </h4>
      )}
      <DeleteBoard params={match.params} history={history} />
    </nav>
  );
};

BoardNavbar.propTypes = {
  editClicked: PropTypes.bool.isRequired,
  board: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default BoardNavbar;
