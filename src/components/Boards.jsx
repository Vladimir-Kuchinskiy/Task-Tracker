import React, { Component } from 'react';
// import { toast } from 'react-toastify';
import BoardItem from './Boards/BoardItem';
import AddBoard from './Boards/AddBoard';
import './styles/Boards.css';

class Boards extends Component {
  componentDidMount() {
    this.props.getBoards();
  }

  render() {
    const { boards } = this.props;
    // toast.success('You are logged in successfully.');
    return (
      <div className="container boards">
        <h2 className="row">Your boards</h2>
        <br />
        <div className="row">
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
