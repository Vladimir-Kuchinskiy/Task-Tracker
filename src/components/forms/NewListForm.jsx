import React, { Component } from "react";
import Button from "../common/Button";

class NewListForm extends Component {
  state = {
    data: { id: "new", title: "", cardIds: [] }
  };
  componentDidMount() {
    document.getElementById("list-" + this.state.data.id).focus();
  }
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data.title = input.value;
    this.setState({ data });
  };
  render() {
    const { data } = this.state;
    const { onSubmit, onClose } = this.props;
    return (
      <form onSubmit={e => onSubmit(e, data)}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            value={data.title}
            onChange={this.handleChange}
            id={"list-" + data.id}
          />
        </div>
        <input type="submit" className="btn btn-success pull-left" />
        <Button
          onClick={onClose}
          classes="btn btn-danger pull-right"
          title="Close"
        />
      </form>
    );
  }
}

export default NewListForm;
