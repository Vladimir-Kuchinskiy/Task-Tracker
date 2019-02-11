import React, { Component } from "react";
import Button from "../common/Button";

class NewBoardForm extends Component {
  state = {
    data: {
      board: { id: "new", title: "" },
      cards: {},
      lists: {},
      listsOrder: []
    }
  };
  componentDidMount() {
    document.getElementById("board-" + this.state.data.id).focus();
  }
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data.board.title = input.value;
    this.setState({ data });
  };
  render() {
    const { data } = this.state;
    const { onClose, onSubmit } = this.props;
    return (
      <div className="create-board-from col-3">
        <form onSubmit={e => onSubmit(e, data)}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={data.title}
              onChange={this.handleChange}
              id={"board-" + data.id}
            />
          </div>
          <input type="submit" className="btn btn-success pull-left" />
          <Button
            onClick={onClose}
            title="Close"
            classes="btn btn-danger pull-right"
          />
        </form>
      </div>
    );
  }
}

export default NewBoardForm;
