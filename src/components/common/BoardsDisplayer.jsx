import React from 'react';
import PropTypes from 'prop-types';

import BoardItem from '../Boards/BoardItem';
import AddBoard from '../Boards/AddBoard';

const BoardsDisplayer = ({ title, boards, ...rest }) => {
  return (
    <React.Fragment>
      <h2 className="row">{title}</h2>
      <div className="row boards-row">
        {boards.map(board => {
          return <BoardItem board={board} key={board.id} {...rest} />;
        })}
        {rest.isCreator && <AddBoard {...rest} />}
      </div>
    </React.Fragment>
  );
};

BoardsDisplayer.propTypes = {
  title: PropTypes.string,
  boards: PropTypes.array
};

export default BoardsDisplayer;
