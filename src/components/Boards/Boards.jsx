import React, { Component } from 'react';
import BoardItem from './BoardItem';
import AddBoard from './AddBoard';
import Spinner from '../common/Spinner';
import './styles/Boards.css';

class Boards extends Component {
  componentDidMount() {
    const { authToken, getBoards } = this.props;
    getBoards(authToken);
  }

  render() {
    const { boards, loading } = this.props;
    return loading ? (
      <Spinner />
    ) : (
      <div className="container boards">
        <h2 className="row">Your boards</h2>
        <div className="row boards-row">
          {boards.map(board => {
            return <BoardItem board={board} key={board.id} onSubmit={this.handleSubmit} />;
          })}
          <AddBoard />
        </div>
      </div>
    );
  }
}

export default Boards;
