import React from "react";

export class WorkExperienceHeader extends React.Component {
  handleAddWorkExperience = () => {
    this.props.addWorkExperience();
  };

  render() {
    return (
      <div className="experience-header-container">
        <div className="experience-header">Experience</div>
        <button className="experience-add" onClick={() => this.handleAddWorkExperience()}>
          Add
        </button>
      </div>
    );
  }
}

export default WorkExperienceHeader;
