import React, { Component } from "react";

export class EducationHeader extends Component {
  handleAddEducation = () => {
    this.props.addEducation();
  };

  render() {
    return (
      <div>
        <div className="education-header-container">
          <div className="education-header">Education</div>
          <button className="education-add" onClick={() => this.handleAddEducation()}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default EducationHeader;
