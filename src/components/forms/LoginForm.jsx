import React from "react";
import Joi from "joi-browser";
// import { Redirect } from "react-router-dom";
import Form from "../common/Form";
// import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      // const { data } = this.state;
      // await auth.login(data.username, data.password);
      // const { state } = this.props.location;
      window.location = /*state ? state.from.pathname :*/ "/";
    } catch (e) {
      if (e.response && e.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = e.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    // if (auth.getCurrentUser()) {
    //   toast.success("You are already logged in.");
    //   return <Redirect to="/" />;
    // }
    return (
      <div className="container">
        <h1 className="title">Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
