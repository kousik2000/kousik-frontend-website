import { Component } from "react";
import { Navigate } from "react-router-dom";
import "./index.css";

import Header from "../Header";
import Contact from "../Contact";
import Login from "../Login";
import ApiContainer from "../ApiContainer";

class Account extends Component {
  state = { isLoggedIn: false, isButtonClicked: false };

  isPortfolioClicked = () => {
    this.setState({ isButtonClicked: true });
  };
  isContactClicked = () => {
    document.getElementById("contact").scrollIntoView();
  };

  render() {
    const { isButtonClicked, isLoggedIn } = this.state;

    if (isButtonClicked) {
      return <Navigate to="/#portfolio" />;
    }
    return (
      <div className="account-background-container">
        <Header
          isPortfolioClicked={this.isPortfolioClicked}
          isContactClicked={this.isContactClicked}
        />
        {/* <div className="login-container">
          <Login />
        </div>
        <div className="login-container">
          <ApiContainer />
        </div> */}
        <div className="login-container">
          {isLoggedIn ? <ApiContainer /> : <Login />}
        </div>
        <div className="contact-container" id="contact">
          <div>
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
