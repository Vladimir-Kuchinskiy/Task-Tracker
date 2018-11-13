import React, { Component } from "react";

class EditForm extends Component {
  componentDidMount() {
    document.getElementById(this.props.data.id).focus();
  }

  render() {
    const { onChange, onSubmit, data, value } = this.props;
    return (
      <div className="edit-form">
        <form onSubmit={e => onSubmit(e, data)}>
          <input
            type="text"
            value={data[value]}
            onChange={onChange}
            onBlur={e => onSubmit(e, data)}
            id={data.id}
            className="form-control"
          />
        </form>
      </div>
    );
  }
}

export default EditForm;
