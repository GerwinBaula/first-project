import React, { Component } from "react";
import background from "../assets/img/background.jpg";
import RegisterForm from "./registerForm";
import Links from "./links";

class RegisterPage extends Component {
  state = {
    links: [
      { text: "Sign Up", route: "/register", active: true },
      { text: "Login", route: "/login", active: false }
    ]
  };

  render() {
    const { links } = this.state;

    return (
      <div
        className="register"
        style={{
          backgroundImage: `linear-gradient(rgba(53, 71, 125, 0.4), rgba(53, 71, 125, 0.4)), url(${background})`
        }}
      >
        <div className="register__box">
          <Links
            links={links}
            activeClass="activeRegister"
            typeClass="register"
          />
          <RegisterForm />
        </div>
      </div>
    );
  }
}

export default RegisterPage;
