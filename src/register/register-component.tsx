import React, { Component } from "react";
import "./register.scss";
import { FormErrors } from "./form-errors";
import { Link } from "react-router-dom";
import MyModal from "../login/login-component";
import account from "../assets/images/account.svg";
import email from "../assets/images/email.svg";
import lock from "../assets/images/lock.svg";

export default class RegisterComponent extends Component<{}, any> {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      formErrors: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      emailValid: false,
      passwordValid: false,
      confirmPasswordValid: false,
      userValid: false,
      formValid: false
    };
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let userValid = this.state.userValid;
    let confirmPasswordValid = this.state.confirmPasswordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      case "username":
        userValid = value.length > 0;
        fieldValidationErrors.username = userValid ? "" : " is empty";
        break;
      case "confirmPassword":
        confirmPasswordValid = value == this.state.password;
        fieldValidationErrors.confirmPassword = confirmPasswordValid
          ? ""
          : " & password dont match";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        confirmPasswordValid: confirmPasswordValid,
        userValid: userValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.userValid &&
        this.state.confirmPasswordValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <div className="register">
        <div className="box-model">
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <h1>Sign Up </h1>
          <div className="input-container">
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.email
              )}`}
            >
              <img className="input-icon" src={account} alt=" " />
              <input
                type="text"
                required
                className="form-control text-input"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleUserInput}
              />
            </div>
          </div>

          <div className="input-container">
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.email
              )}`}
            >
              <img className="input-icon" src={email} alt=" " />
              <input
                type="email"
                required
                className="form-control text-input"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleUserInput}
              />
            </div>
          </div>

          <div className="input-container">
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.password
              )}`}
            >
              <img className="input-icon" src={lock} alt=" " />
              <input
                type="password"
                className="form-control text-input"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleUserInput}
              />
            </div>
          </div>

          <div className="input-container">
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.password
              )}`}
            >
              <img className="input-icon" src={lock} alt=" " />
              <input
                type="password"
                className="form-control text-input"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={this.state.confirmPassword}
                onChange={this.handleUserInput}
              />
            </div>
          </div>

          <div>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={!this.state.formValid}
            >
              Create Account
            </button>
          </div>

          <div className="psw">
            Already have an account?<MyModal>login</MyModal>
          </div>
        </div>
      </div>
    );
  }
}
