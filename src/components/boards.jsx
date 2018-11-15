import React, { Component } from "react";
import { toast } from "react-toastify";
import initialData from "../initialData";
import BoardItem from "./boardItem";

class Boards extends Component {
  state = initialData;

  render() {
    const { boardIds, boards } = this.state;
    toast.success("You are logged in successfully.");
    return (
      <div className="container boards">
        <h2 className="row">Your boards</h2>
        <br />
        <div className="row">
          {boardIds.map(boardId => {
            return <BoardItem board={boards[boardId].board} key={boardId} />;
          })}
        </div>
      </div>
    );
  }
}

export default Boards;
