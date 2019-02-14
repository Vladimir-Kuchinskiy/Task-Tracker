import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/BoardItem.css';
import EditBoardForm from './EditBoardForm';

class BoardItem extends Component {
  state = {
    editClicked: false
  };

  toggleEdit = e => {
    if (e) e.preventDefault();
    this.setState({ editClicked: !this.state.editClicked });
  };

  handleClick = e => {
    if (this.state.editClicked) {
      e.preventDefault();
      return;
    }
  };

  renderEditBoard = () => {
    const {
      board: { id, title }
    } = this.props.board;
    return (
      <div className="col-3 edit-board-item">
        <EditBoardForm
          boardId={id}
          form={`EditBoardForm-${id}`}
          title={title}
          onEdit={this.toggleEdit}
        />
      </div>
    );
  };

  renderLinkToBoard = () => {
    const { board } = this.props.board;
    return (
      <Link to={`/boards/${board.id}`} className="col-3 board-item" onContextMenu={this.toggleEdit}>
        <h3>{board.title}</h3>
      </Link>
    );
  };

  render() {
    return this.state.editClicked ? this.renderEditBoard() : this.renderLinkToBoard();
  }
}

export default BoardItem;
