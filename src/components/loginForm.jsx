import Joi from "joi-browser";
import Form from "./form";
import React from "react";

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

  doSubmit = () => {
    console.log("Submitted");
    alert("You are now logged in.");
  };

  render() {
    return (
      <div className="login__form">
        <form onSubmit={this.handleSubmit} className="login__form-container">
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
