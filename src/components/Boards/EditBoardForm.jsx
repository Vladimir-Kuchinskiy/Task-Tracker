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
    const { updateBoard, boardId, onEdit } = this.props;
    if (values.title === '') throw new SubmissionError({ title: 'Can not be blank' });
    updateBoard(values, boardId);
    onEdit();
  };
  renderInputField = field => {
    const { boardId } = this.props;
    return <input type="text" id={boardId} className="form-control" {...field.input} />;
  };
  render() {
    const { handleSubmit, onEdit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <Field name="title" component={this.renderInputField} onBlur={onEdit} />
          </div>
        </form>
      </div>
    );
  }
}
export default reduxForm(
  (_state, props) => ({
    form: `EditBloardForm-${props.boardId}`
  }),
  { updateBoard }
)(
  connect(
    null,
    { updateBoard }
  )(EditBoardForm)
);
