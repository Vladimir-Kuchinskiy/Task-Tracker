import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';

import { updateBoard } from '../../actions/boardsActions';

class EditBoardForm extends Component {
  componentDidMount() {
    document.getElementById(this.props.boardId).focus();
  }
  onSubmit = values => {
    const { updateBoard, boardId, onEdit, authToken } = this.props;
    if (values.title === '') throw new SubmissionError({ title: 'Can not be blank' });
    updateBoard(values, boardId, authToken);
    onEdit();
  };
  renderInputField = field => {
    const { boardId, inputStyle, boardPage } = this.props;
    const inputLettersCount = field.input.value.replace(/\s/g, '').length * 16;
    const width = boardPage ? `${inputLettersCount}px` : null;
    return (
      <input
        style={{ ...inputStyle, width }}
        type="text"
        id={boardId}
        className="form-control mb-2"
        {...field.input}
      />
    );
  };
  render() {
    const { handleSubmit, onEdit, style } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)} style={style}>
          <Field name="title" component={this.renderInputField} onBlur={onEdit} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { authToken: auth.authToken };
};

export default reduxForm(
  (_state, props) => ({
    form: `EditBloardForm-${props.boardId}`
  }),
  { updateBoard }
)(
  connect(
    mapStateToProps,
    { updateBoard }
  )(EditBoardForm)
);
