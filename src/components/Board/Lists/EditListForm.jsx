import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';

import { updateList } from '../../../actions/boardActions';

class EditListForm extends Component {
  componentDidMount() {
    document.getElementById(this.props.listId).focus();
  }

  onSubmit = values => {
    const { onEdit, updateList, listId, authToken } = this.props;
    if (values.title === '') throw new SubmissionError({ title: 'Can not be blank' });
    updateList(values, listId, authToken);
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

EditListForm.propTypes = {
  listId: PropTypes.string,
  authToken: PropTypes.string,
  handleSubmit: PropTypes.func,
  onEdit: PropTypes.func,
  updateList: PropTypes.func
};

const mapStateToProps = ({ auth }) => {
  return { authToken: auth.authToken };
};

export default reduxForm(
  (_state, props) => ({
    form: `EditListForm-${props.listId}`
  }),
  { updateList }
)(
  connect(
    mapStateToProps,
    { updateList }
  )(EditListForm)
);
