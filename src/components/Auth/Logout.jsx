import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return <Redirect to="/auth" />;
  }
}

export default Logout;
