import React, { useEffect } from 'react';
import BoardItem from './BoardItem';
import AddBoard from './AddBoard';
import Spinner from '../common/Spinner';
import './styles/Boards.css';

const Boards = ({ boards, authToken, loading, getBoards }) => {
  useEffect(() => {
    getBoards(authToken);
  }, []);

  return loading ? (
    <Spinner style={{ position: 'absolute' }} />
  ) : (
    <div className="container boards">
      <h2 className="row">Your boards</h2>
      <div className="row">
        {boards.map(board => {
          return <BoardItem board={board} key={board.id} />;
        })}
        <AddBoard />
      </div>
    </div>
  );
};

export default Boards;
