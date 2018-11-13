import React, { Component } from "react";
import Button from "../common/button";

class NewCardForm extends Component {
  state = {
    data: { id: "new", content: "" }
  };
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data.content = input.value;
    this.setState({ data });
  };
  render() {
    const { data } = this.state;
    const { onClose, onSubmit, list } = this.props;
    return (
      <div className="card-form">
        <form onSubmit={e => onSubmit(e, data, list)}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={data.content}
              onChange={this.handleChange}
              id={data.id}
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

export default NewCardForm;
