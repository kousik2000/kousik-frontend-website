import "./index.css";

import { Component } from "react";

class Login extends Component {
  state = { userName: "", password: "" };

  onChangeUsername = (event) => {
    this.setState({ userName: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onLoginFormSubmit = (event) => {
    event.preventDefault();
    console.log("hello kousik");
  };

  render() {
    const { userName, password } = this.state;
    return (
      <div className="login-input-container">
        <h1 className="sub-head">Login to your Account</h1>
        <form onSubmit={this.onLoginFormSubmit}>
          <label htmlFor="username" className="label-text">
            Username
          </label>
          <br />
          <input
            type="text"
            value={userName}
            className="input login-input"
            placeholder="Username"
            onChange={this.onChangeUsername}
          />
          <br />
          <label htmlFor="username" className="label-text">
            Password
          </label>
          <br />
          <input
            type="text"
            value={password}
            className="input login-input"
            placeholder="Password"
            onChange={this.onChangePassword}
          />
          <br />
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
