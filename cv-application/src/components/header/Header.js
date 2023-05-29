import React, { useState } from "react";
import "./header.css";

export default function Header() {
  const [headerObject, setHeaderObject] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    bio: "",
  });
  const [submitted, setSubmitted] = useState(true);

  const updateHeader = (e, inputField) => {
    const inputValue = e.target.value;
    setHeaderObject({ ...headerObject, [inputField]: inputValue });
  };

  const submitEditHeader = () => {
    setSubmitted((prevSubmitted) => !prevSubmitted);
  };

  if (submitted === true) {
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
              value={headerObject.userName}
              onChange={(e) => updateHeader(e, "userName")}
            />
            <input
              type="email"
              className="email"
              placeholder="Email"
              value={headerObject.email}
              onChange={(e) => updateHeader(e, "email")}
            />
            <input
              type="text"
              className="phone-number"
              placeholder="Phone Number"
              value={headerObject.phoneNumber}
              onChange={(e) => updateHeader(e, "phoneNumber")}
            />
          </div>
          <div className="divider header-divider"></div>
          <div className="header-right">
            <textarea
              className="bio"
              placeholder="Small bio"
              value={headerObject.bio}
              onChange={(e) => updateHeader(e, "bio")}
            />
            <button className="header-submit" onClick={submitEditHeader}>
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
            <div className="name">{headerObject.userName}</div>
            <div className="email">{headerObject.email}</div>
            <div className="phone-number">{headerObject.phoneNumber}</div>
          </div>
          <div className="divider header-divider"></div>
          <div className="header-right">
            <div className="bio">{headerObject.bio}</div>
            <button className="header-edit" onClick={submitEditHeader}>
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
