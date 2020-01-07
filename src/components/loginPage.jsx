import React, { Component } from "react";
import background from "../assets/img/background.jpg";
import LoginForm from "./loginForm";
import Links from "./links";

class LoginPage extends Component {
  state = {
    links: [
      { text: "Sign Up", route: "/register", active: false },
      { text: "Login", route: "/login", active: true }
    ]
  };

  render() {
    const { links } = this.state;

    return (
      <div
        className="login"
        style={{
          backgroundImage: `linear-gradient(rgba(246, 114, 128, 0.4), rgba(246, 114, 128, 0.4)), url(${background})`
        }}
      >
        <div className="login__box">
          <Links links={links} activeClass="activeLogin" typeClass="login" />
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default LoginPage;
