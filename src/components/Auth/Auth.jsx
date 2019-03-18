import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import AuthForm from './AuthForm';

class Auth extends Component {
  state = { isSignUp: false };

  componentDidMount() {
    if (localStorage.getItem('message')) {
      toast.info(localStorage.getItem('message'));
      localStorage.removeItem('message');
    }
    if (this.props.isSignedIn) toast.success('You are already signed in!');
  }

  toggleSignUp = () => {
    this.setState({ isSignUp: !this.state.isSignUp });
  };

  renderSwitchButton() {
    const text = this.state.isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up';
    return (
      <div className="btn btn-outline-success" onClick={this.toggleSignUp}>
        {text}
      </div>
    );
  }

  getRedirectPath() {
    const { lastLocation } = this.props;
    return lastLocation && lastLocation.pathname !== '/logout' ? lastLocation.pathname : '/';
  }

  render() {
    if (this.props.isSignedIn) {
      const path = this.getRedirectPath();
      return <Redirect to={path} />;
    }

    return (
      <div className="container">
        <div className="row">
          <AuthForm isSignUp={this.state.isSignUp} />
        </div>
        <div className="row d-flex justify-content-center">{this.renderSwitchButton()}</div>
      </div>
    );
  }
}

Auth.propTypes = {
  isSignedIn: PropTypes.bool,
  lastLocation: PropTypes.object,
  handleSubmit: PropTypes.func
};

export default withLastLocation(Auth);
