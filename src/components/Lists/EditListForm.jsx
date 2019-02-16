import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';
import { editList } from '../../actions/boardActions';

class EditListForm extends Component {
  componentDidMount() {
    document.getElementById(this.props.listId).focus();
  }

  onSubmit = values => {
    const { editList, listId, onEdit } = this.props;
    if (values.title === '') throw new SubmissionError({ title: 'Can not be blank' });
    editList(values, listId);
    onEdit();
  };

  renderInputField = field => {
    const { listId } = this.props;
    return <input type="text" id={listId} className="form-control" {...field.input} />;
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
    form: `EditListForm-${props.listId}`
  }),
  { editList }
)(
  connect(
    null,
    { editList }
  )(EditListForm)
);
