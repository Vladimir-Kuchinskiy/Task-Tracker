import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';
import { editBoard } from '../../actions/boardsActions';

class EditBoardForm extends Component {
  componentDidMount() {
    document.getElementById(this.props.boardId).focus();
  }
  onSubmit = values => {
    const { editBoard, boardId, onEdit } = this.props;
    if (values.title === undefined) throw new SubmissionError({ title: 'Can not be blank' });
    editBoard(values, boardId);
    onEdit();
  };
  renderInputField = field => {
    const { boardId, title } = this.props;
    field.input.value = field.input.value === '' ? title : field.input.value;
    return <input type="text" id={boardId} className="form-control" {...field.input} />;
  };
  render() {
    const { handleSubmit, onEdit } = this.props;
    return (
      <div className="edit-form">
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
  { editBoard }
)(
  connect(
    null,
    { editBoard }
  )(EditBoardForm)
);
