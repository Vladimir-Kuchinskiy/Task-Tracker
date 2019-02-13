import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';
import { createBoard } from '../../actions/boardsActions';
import Button from '../common/Button';

class NewBoardForm extends Component {
  componentDidMount() {
    document.getElementById('board-new').focus();
  }
  onSubmit = values => {
    if (values.title === undefined) throw new SubmissionError({ title: 'Can not be blank' });
    this.props.createBoard(values);
    this.props.onClose();
  };
  renderInputField(field) {
    return <input type="text" className="form-control" id="board-new" {...field.input} />;
  }
  render() {
    const { onClose, handleSubmit } = this.props;
    return (
      <div className="create-board-form col-3">
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <Field name="title" component={this.renderInputField} />
          </div>
          <button type="submit" className="btn btn-success pull-left">
            Create Board
          </button>
          <Button onClick={onClose} title="Close" classes="btn btn-danger pull-right" />
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'NewBoardForm' }, { createBoard })(
  connect(
    null,
    { createBoard }
  )(NewBoardForm)
);
