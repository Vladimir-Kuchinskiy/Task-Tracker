import React, { Component } from "react";
import NewBoardForm from "./forms/NewBoardForm";

class AddBoard extends Component {
  state = {
    mouseOver: false,
    addClicked: false
  };
  toggleMouse = () => {
    this.setState({ ...this.state, mouseOver: !this.state.mouseOver });
  };
  toggleClick = () => {
    this.setState({ ...this.state, addClicked: !this.state.addClicked });
  };
  handleSubmit = (e, data) => {
    e.preventDefault();
    if (data.board.title === "") {
      return;
    }
    this.props.onSubmit(data);
    this.handleClose();
  };
  handleClose = () => {
    this.setState({ mouseOver: false, addClicked: false });
  };
  plusImage = () => {
    return this.state.mouseOver ? "plus-white.png" : "plus.png";
  };
  render() {
    return (
      <React.Fragment>
        {this.state.addClicked ? (
          <NewBoardForm
            onSubmit={this.handleSubmit}
            onClose={this.handleClose}
          />
        ) : (
          <div
            className="col-3 add-board"
            onMouseOver={this.toggleMouse}
            onMouseOut={this.toggleMouse}
            onClick={this.toggleClick}
          >
            <img
              alt="Add Board..."
              src={require("../images/" + this.plusImage())}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default AddBoard;
