import "./index.css";

import { Component } from "react";

class ApiContainer extends Component {
  state = { selectedType: "", selectedMethod: "", formData: "" };

  handleTypeChange = (event) => {
    this.setState({ selectedType: event.target.value });
  };

  handleMethodChange = (event) => {
    this.setState({ selectedMethod: event.target.value });
  };

  handleFormChange = (event) => {
    this.setState({ formData: event.target.value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { selectedType, selectedMethod, formData } = this.state;
    let url;
    if (selectedType === "Portfolio") {
      url = "https://portfolio-backend-rho.vercel.app/portfolio";
    } else {
      url = "https://portfolio-backend-rho.vercel.app/updateblog";
    }

    const options = {
      method: { selectedMethod },
      body: { formData },
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);

    if (response.ok === true) {
      alert("successful");
    } else {
      alert("failure");
    }
  };

  render() {
    const { selectedType, selectedMethod, formData } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h1 className="sub-head">Update your Data</h1>
        <div className="type-select-container">
          <div>
            <label htmlFor="type-select" className="label">
              Type:
            </label>
            <br />
            <select
              id="type-select"
              value={selectedType}
              onChange={this.handleTypeChange}
              className="select-container"
            >
              <option value="Portfolio">Portfolio</option>
              <option value="Blog">Blog</option>
            </select>
          </div>

          <div>
            <label htmlFor="method-select" className="label">
              Method:
            </label>
            <br />
            <select
              id="method-select"
              value={selectedMethod}
              onChange={this.handleMethodChange}
              className="select-container"
            >
              <option value="PUT">PUT</option>
              <option value="POST">POST</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="data-input">Data:</label>
          <textarea
            id="data-input"
            className="text-area"
            value={formData}
            onChange={this.handleFormChange}
          />
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    );
  }
}

export default ApiContainer;
