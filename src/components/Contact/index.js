import { Component } from "react";

import emailjs from "emailjs-com";

import "./index.css";

import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

class Contact extends Component {
  state = { name: "", email: "", message: "" };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;
    const serviceId = "service_kyz6teb";
    const templateId = "template_w3gtusd";
    const userId = "Uk5MWzoYF3VZySOHN";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        userId
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          this.setState({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contact-input-container">
        <h1 className="sub-head">Contact Me</h1>
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="name-email-container">
            <input
              type="text"
              placeholder="Name"
              className="input"
              value={name}
              onChange={this.onNameChange}
            />
            <input
              type="text"
              placeholder="Email"
              className="input"
              value={email}
              onChange={this.onEmailChange}
            />
          </div>
          <textarea
            value={message}
            required
            className="text-area"
            placeholder="Message"
            onChange={this.onMessageChange}
          ></textarea>
          <button className="button" type="submit">
            Send Message
          </button>
        </form>
        <br />
        <div className="or-container">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <div className="icon-container">
          <a
            href="mailto:kousik.ramachandruni@gmail.com"
            target="_blank"
            className="icon"
            rel="noreferrer"
          >
            <SiGmail />
          </a>
          <a
            href="https://www.linkedin.com/in/ramachandruni-venkata-kousik-a57546204/"
            target="_blank"
            className="icon"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="tel:8309159912"
            target="_blank"
            className="icon"
            rel="noreferrer"
          >
            <BsFillTelephoneOutboundFill />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
