import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';
import { createList } from '../../actions/boardActions';
import Button from '../common/Button';

class NewListForm extends Component {
  componentDidMount() {
    document.getElementById('list-new').focus();
  }
  onSubmit = values => {
    const { createList, onClose, board } = this.props;
    if (values.title === undefined) throw new SubmissionError({ title: 'Can not be blank' });
    createList(values, board.id);
    onClose();
  };
  renderInputField(field) {
    return <input type="text" className="form-control" id="list-new" {...field.input} />;
  }
  render() {
    const { onClose, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className="form-group">
          <Field name="title" component={this.renderInputField} />
        </div>
        <input type="submit" className="btn btn-success pull-left" />
        <Button onClick={onClose} classes="btn btn-danger pull-right" title="Close" />
      </form>
    );
  }
}

const mapStateToProps = ({ board: { board } }) => {
  return { board };
};

export default reduxForm({ form: 'NewListForm' }, { createList })(
  connect(
    mapStateToProps,
    { createList }
  )(NewListForm)
);
