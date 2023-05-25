import React from "react";
import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerObject: {
        userName: null,
        email: null,
        phoneNumber: null,
        bio: null,
      },
      submitted: true,
    };
  }

  updateHeader = (e, inputField) => {
    this.setState((prevState) => {
      const inputValue = e.target.value;
      const updatedObject = { ...prevState.headerObject };
      if (inputField === "field1") updatedObject.userName = inputValue;
      if (inputField === "field2") updatedObject.email = inputValue;
      if (inputField === "field3") updatedObject.phoneNumber = inputValue;
      if (inputField === "field4") updatedObject.bio = inputValue;
      return { headerObject: updatedObject };
    });
  };

  submitEditHeader = () => {
    console.log(this.state.headerObject);
    if (this.state.headerObject.userName === null) alert("nah");
    this.setState((prevState) => ({
      submitted: !prevState.submitted,
    }));
  };

  render() {
    if (this.state.submitted === true) {
      return (
        <div>
          <div className="personal-header-container">
            <div className="personal-header">Personal Information</div>
          </div>
          <div className="header-container">
            <div className="header-left">
              <input
                type="text"
                className="name"
                placeholder="Name"
                value={this.state.headerObject.userName}
                onChange={(e) => this.updateHeader(e, "field1")}
              />
              <input
                type="email"
                className="email"
                placeholder="Email"
                value={this.state.headerObject.email}
                onChange={(e) => this.updateHeader(e, "field2")}
              />
              <input
                type="text"
                className="phone-number"
                placeholder="Phone Number"
                value={this.state.headerObject.phoneNumber}
                onChange={(e) => this.updateHeader(e, "field3")}
              />
            </div>
            <div className="divider header-divider"></div>
            <div className="header-right">
              <textarea
                className="bio"
                placeholder="Small bio"
                value={this.state.headerObject.bio}
                onChange={(e) => this.updateHeader(e, "field4")}
              />
              <button className="header-submit" onClick={() => this.submitEditHeader()}>
                Submit
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="personal-header-container">
            <div className="personal-header">Personal Information</div>
          </div>
          <div className="header-container">
            <div className="header-left">
              <div className="name">{this.state.headerObject.userName}</div>
              <div className="email">{this.state.headerObject.email}</div>
              <div className="phone-number">{this.state.headerObject.phoneNumber}</div>
            </div>
            <div className="divider header-divider"></div>
            <div className="header-right">
              <div className="bio">{this.state.headerObject.bio}</div>
              <button className="header-edit" onClick={() => this.submitEditHeader()}>
                Edit
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Header;
