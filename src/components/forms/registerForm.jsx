import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
// import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", password_confirmation: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    password_confirmation: Joi.string()
      .required()
      .label("Confirmation password")
  };

  doSubmit = async () => {
    try {
      // const response = await userSevice.register(this.state.data);
      // auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (e) {
      if (e.response && e.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = e.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput(
            "password_confirmation",
            "Confirmation password",
            "password"
          )}
          {this.renderButton("Sign up")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
