import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Logout from './Logout';
import Board from '../containers/Board';
import Boards from '../containers/Boards';
import NotFound from './NotFound';
import NavBar from './NavBar';

import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-relative ui">
          <NavBar />
          <ToastContainer />

          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/boards/:id" component={Board} />
            <Route path="/boards" component={Boards} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/boards" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
