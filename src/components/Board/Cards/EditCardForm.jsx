import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';
import { updateCard } from '../../../actions/boardActions';

class EditCardForm extends Component {
  componentDidMount() {
    const { cardId, listId } = this.props;
    document.getElementById(`card-${cardId}-${listId}`).focus();
  }

  onSubmit = values => {
    const { updateCard, cardId, authToken, onEdit } = this.props;
    if (values.content === '') throw new SubmissionError({ content: 'Can not be blank' });
    updateCard(values, cardId, authToken);
    onEdit();
  };

  renderInputField = field => {
    const { cardId, listId } = this.props;
    return (
      <input
        type="text"
        id={`card-${cardId}-${listId}`}
        className="form-control"
        {...field.input}
      />
    );
  };

  render() {
    const { handleSubmit, onEdit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <Field name="content" component={this.renderInputField} onBlur={onEdit} />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { authToken: auth.authToken };
};

export default reduxForm(
  (_state, { cardId, listId }) => ({
    form: `EditCardForm-${cardId}-${listId}`
  }),
  { updateCard }
)(
  connect(
    mapStateToProps,
    { updateCard }
  )(EditCardForm)
);
