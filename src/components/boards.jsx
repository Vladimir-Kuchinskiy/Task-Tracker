import React, { Component } from "react";
// import { toast } from "react-toastify";
import initialData from "../initialData";
import BoardItem from "./boardItem";
import AddBoard from "./addBoard";

class Boards extends Component {
  state = initialData;

  onEdit = data => {
    const boards = this.state.boards;
    const boardIds = this.state.boardIds;
    boards[data.id] = data;
    this.setState({ ...this.state, boards: boards, boardIds: boardIds });
  };

  handleSubmit = data => {
    const boards = this.state.boards;
    const boardIds = this.state.boardIds;
    if (data.board.id === "new") {
      data.board.id = "board-" + Math.floor(Math.random() * 100 + 1).toString();
      boardIds.push(data.board.id);
    }
    boards[data.board.id] = data;
    this.setState({ ...this.state, boards: boards, boardIds: boardIds });
  };

  render() {
    const { boardIds, boards } = this.state;
    // toast.success("You are logged in successfully.");
    return (
      <div className="container boards">
        <h2 className="row">Your boards</h2>
        <br />
        <div className="row">
          {boardIds.map(boardId => {
            return (
              <BoardItem
                data={boards[boardId]}
                key={boardId}
                onSubmit={this.handleSubmit}
              />
            );
          })}
          <AddBoard onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default Boards;
