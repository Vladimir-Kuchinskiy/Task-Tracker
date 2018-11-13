import React, { Component } from "react";

class NewListForm extends Component {
  state = {
    data: { id: "new", title: "", cardIds: [] }
  };
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data.title = input.value;
    this.setState({ data });
  };
  render() {
    return (
      <form onSubmit={e => this.props.onSubmit(e, this.state.data)}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            value={this.state.data.title}
            onChange={this.handleChange}
          />
        </div>
        <input type="submit" className="btn btn-success pull-left" />
        <div
          onClick={() => this.props.onClose()}
          className="btn btn-danger pull-right"
        >
          Close
        </div>
      </form>
    );
  }
}

export default NewListForm;
