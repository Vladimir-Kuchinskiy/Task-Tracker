import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthForm from './AuthForm';

class Auth extends Component {
  state = { isSignUp: false };

  componentDidMount() {
    debugger;
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

  render() {
    if (this.props.isSignedIn) return <Redirect to="/" />;

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

export default Auth;
