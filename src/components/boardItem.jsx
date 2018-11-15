import React from "react";
import { Link } from "react-router-dom";

const BoardItem = ({ board }) => {
  return (
    <Link to={`/boards/${board.id}`} className="col-3 board-item">
      <h3>{board.title}</h3>
    </Link>
  );
};

export default BoardItem;
