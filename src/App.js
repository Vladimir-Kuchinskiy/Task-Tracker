import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';
import Logout from './components/Logout';
import Board from './containers/Board';
import Boards from './containers/Boards';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';

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
