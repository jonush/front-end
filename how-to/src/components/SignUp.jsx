import React from "react";
import axios from "axios";
import '../App.css';

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

class SignUp extends React.Component {
  state = {
    username: "",
    usernameValid: false,
    password: "",
    passwordValid: false,
    passwordConfirm: "",
    passwordConfirmValid: false,
    formValid: false,
    errorMsg: {},
  };

  validateForm = () => {
    const { usernameValid, passwordValid, passwordConfirmValid } = this.state;
    this.setState({
      formValid: usernameValid && passwordValid && passwordConfirmValid,
    });
  };

  updateUsername = (username) => {
    this.setState({ username }, this.validateUsername);
  };

  validateUsername = () => {
    const { username } = this.state;
    let usernameValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (username.length < 3) {
      usernameValid = false;
      errorMsg.username = "Must be at least 3 characters long";
    }

    this.setState({ usernameValid, errorMsg }, this.validateForm);
  };

  updatePassword = (password) => {
    this.setState({ password }, this.validatePassword);
  };

  validatePassword = () => {
    const { password } = this.state;
    let passwordValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // must be 6 chars
    // must contain a number
    // must contain a special character

    if (password.length < 4) {
      passwordValid = false;
      errorMsg.password = "Password must be at least 4 characters long";
    } else if (!/\d/.test(password)) {
      passwordValid = false;
      errorMsg.password = "Password must contain a digit";
    } 

    this.setState({ passwordValid, errorMsg }, this.validateForm);
  };

  updatePasswordConfirm = (passwordConfirm) => {
    this.setState({ passwordConfirm }, this.validatePasswordConfirm);
  };

  validatePasswordConfirm = () => {
    const { passwordConfirm, password } = this.state;
    let passwordConfirmValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (password !== passwordConfirm) {
      passwordConfirmValid = false;
      errorMsg.passwordConfirm = "Passwords do not match";
    }

    this.setState({ passwordConfirmValid, errorMsg }, this.validateForm);
  };

  submit = e => {
    e.preventDefault();
    console.log(this.state.username, this.state.password)
    axios
      .post(`https://how-to-diy.herokuapp.com/api/auth/register`, this.state)
      .then((res) => {
        console.log("POST request for register", res);
        this.props.history.push("/login");
      })
  };

  render() {
    return (
      <div className="App">
        <main role="main">
          <form action="#" id="js-form" onSubmit={this.submit}>
            <h1>SIGN UP</h1>

            <div className="form-group">
              <ValidationMessage
                valid={this.state.usernameValid}
                message={this.state.errorMsg.username}
              />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                className="form-field"
                value={this.state.username}
                onChange={(e) => this.updateUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <ValidationMessage
                valid={this.state.passwordValid}
                message={this.state.errorMsg.password}
              />
              <input
                type="password"
                placeholder="password"
                id="password"
                name="password"
                className="form-field"
                value={this.state.password}
                onChange={(e) => this.updatePassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <ValidationMessage
                valid={this.state.passwordConfirmValid}
                message={this.state.errorMsg.passwordConfirm}
              />
              <input
                placeholder="Confirm Password"
                type="password"
                id="password-confirmation"
                name="password-confirmation"
                className="form-field"
                value={this.state.passwordConfirm}
                onChange={(e) => this.updatePasswordConfirm(e.target.value)}
              />
            </div>

            <div className="form-controls">
              <button
                className="button"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default SignUp;