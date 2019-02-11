import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import Logout from "./components/Logout";
import Board from "./components/Board";
import Boards from "./components/Boards";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
