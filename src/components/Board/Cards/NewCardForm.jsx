import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';
import { createCard } from '../../../actions/boardActions';
import Button from '../../common/Button';

class NewCardForm extends Component {
  componentDidMount() {
    document.getElementById('new-card-' + this.props.listId).focus();
  }
  onSubmit = values => {
    const { listId, authToken, createCard, onClose } = this.props;
    if (values.content === undefined) throw new SubmissionError({ title: 'Can not be blank' });
    createCard(values, listId, authToken);
    onClose();
  };
  renderInputField = field => {
    return (
      <input
        type="text"
        className="form-control"
        id={'new-card-' + this.props.listId}
        {...field.input}
      />
    );
  };
  render() {
    const { handleSubmit, onClose } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <Field name="content" component={this.renderInputField} />
          </div>
          <button type="submit" className="btn btn-success pull-left">
            Create Card
          </button>
          <Button onClick={onClose} title="Close" classes="btn btn-danger pull-right" />
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
    form: `NewCardForm-${props.listId}`
  }),
  { createCard }
)(
  connect(
    mapStateToProps,
    { createCard }
  )(NewCardForm)
);
