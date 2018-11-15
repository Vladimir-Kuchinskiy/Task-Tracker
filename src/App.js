import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import Board from "./components/board";
import Boards from "./components/boards";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-relative ui">
        <NavBar />
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
    );
  }
}

export default App;
