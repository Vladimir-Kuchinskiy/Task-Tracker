import React, { Component } from "react";
import { Link } from "react-router-dom";
import initialData from "../initialData";

class Boards extends Component {
  state = initialData;

  render() {
    return (
      <div className="container .navbar">
        <h2 className="row">Your boards</h2>
        <br />
        <div className="row">
          {this.state.boardIds.map(boardId => {
            return (
              <Link
                to={`/boards/${boardId}`}
                className="col-3 board-item"
                key={boardId}
              >
                <h3>{this.state.boards[boardId].board.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Boards;
