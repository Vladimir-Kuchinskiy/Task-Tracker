import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';
import { editCard } from '../actions/boardActions';

class EditListForm extends Component {
  componentDidMount() {
    const {
      card: { id, listId }
    } = this.props;
    document.getElementById(`card-${id}-${listId}`).focus();
  }

  onSubmit = values => {
    const { editCard, cardId, onEdit } = this.props;
    if (values.content === undefined) throw new SubmissionError({ content: 'Can not be blank' });
    editCard(values, cardId);
    onEdit();
  };

  renderInputField = field => {
    const {
      card: { id, listId, content }
    } = this.props;
    field.input.value = field.input.value === '' ? content : field.input.value;
    return (
      <input type="text" id={`card-${id}-${listId}`} className="form-control" {...field.input} />
    );
  };

  render() {
    const { handleSubmit, onEdit } = this.props;
    return (
      <div className="edit-form">
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <Field name="content" component={this.renderInputField} onBlur={onEdit} />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ board }, { cardId }) => {
  return { card: board.cards[cardId] };
};

export default reduxForm(
  (_state, { card: { id, listId } }) => ({
    form: `EditCardForm-${id}-${listId}`
  }),
  { editCard }
)(
  connect(
    mapStateToProps,
    { editCard }
  )(EditListForm)
);
