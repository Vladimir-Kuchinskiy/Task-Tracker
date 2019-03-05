import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';
import { createTeam } from '../../actions/teamsActions';
import Button from '../common/Button';

class NewTeamForm extends Component {
  componentDidMount() {
    document.getElementById('team-new').focus();
  }

  onSubmit = values => {
    const { createTeam, onClose, authToken } = this.props;
    if (values.name === undefined) throw new SubmissionError({ name: 'Can not be blank' });
    createTeam(values, authToken);
    onClose();
  };

  renderInputField(field) {
    return <input type="text" className="form-control" id="team-new" {...field.input} />;
  }

  render() {
    const { onClose, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="add-team-form">
        <div className="form-group">
          <Field name="name" component={this.renderInputField} />
        </div>
        <button type="submit" className="btn btn-success pull-left">
          Create team
        </button>
        <Button onClick={onClose} classes="btn btn-danger pull-right" title="Close" />
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { authToken: auth.authToken };
};

export default reduxForm({ form: 'NewTeamForm' }, { createTeam })(
  connect(
    mapStateToProps,
    { createTeam }
  )(NewTeamForm)
);
