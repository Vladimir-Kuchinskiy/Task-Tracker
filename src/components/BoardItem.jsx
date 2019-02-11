import React, { Component } from "react";
import { Link } from "react-router-dom";
import EditForm from "./forms/EditForm";

class BoardItem extends Component {
  state = {
    editClicked: false,
    data: { ...this.props.data }
  };
  toggleEdit = e => {
    e.preventDefault();
    if (this.state.data.board.title === "") return;
    this.setState({ ...this.state, editClicked: !this.state.editClicked });
  };
  handleClick = e => {
    if (this.state.editClicked) {
      e.preventDefault();
      return;
    }
  };
  handleChange = ({ currentTarget }) => {
    const { data } = this.state;
    data.board.title = currentTarget.value;
    this.setState({ ...this.state, data: data });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { id, title } = this.state.data.board;
    if (title === "") {
      document.getElementById(id).focus();
      return;
    }
    this.props.onSubmit(this.state.data);
    this.setState({ ...this.state, editClicked: !this.state.editClicked });
  };
  render() {
    const { data, editClicked } = this.state;
    return (
      <Link
        to={`/boards/${data.board.id}`}
        className="col-3 board-item"
        onClick={this.handleClick}
        onContextMenu={this.toggleEdit}
      >
        {editClicked ? (
          <EditForm
            onSubmit={this.handleSubmit}
            data={data.board}
            onChange={this.handleChange}
            value="title"
          />
        ) : (
          <h3>{data.board.title}</h3>
        )}
      </Link>
    );
  }
}

export default BoardItem;
