import React, { Component } from "react";

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
    return (
      <div className="card-form">
        <form
          onSubmit={e =>
            this.props.onSubmit(e, this.state.data, this.props.list)
          }
        >
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={this.state.data.content}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" className="btn btn-success pull-left" />
          <div
            onClick={() => this.props.onClose(this.props.list.id)}
            className="btn btn-danger pull-right"
          >
            Close
          </div>
        </form>
      </div>
    );
  }
}

export default NewCardForm;
