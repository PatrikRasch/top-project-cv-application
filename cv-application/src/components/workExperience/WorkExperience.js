import React from "react";
import "./workExperience.css";

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  submitEditWorkExperience = () => {
    this.setState((prevState) => ({
      submitted: !prevState.submitted,
    }));
  };

  handleRemoveWorkExperience = (id) => {
    this.props.removeWorkExperience(id);
  };

  handleUpdateWorkExperience = (id, e, inputField) => {
    const inputValue = e.target.value;
    this.props.updateWorkExperience(id, inputValue, inputField);
  };

  render() {
    console.log(this.state.submitted);
    const { submitted } = this.state;
    if (submitted === true)
      return (
        <div>
          <div>
            <div className="experience-container">
              <div className="header-left">
                <div className="company-name">COMPANY NAME: {this.props.workExperienceArrayItem.companyName}</div>
                <div className="position-title">TITLE: {this.props.workExperienceArrayItem.positionTitle}</div>
                <div className="date-of-work-container">
                  <div className="date-of-work">{this.props.workExperienceArrayItem.dateOfWorkStart}</div>
                  <div className="dash"></div>
                  <div className="date-of-work">{this.props.workExperienceArrayItem.dateOfWorkEnd}</div>
                </div>
              </div>
              <div className="divider experience-divider"></div>
              <div className="header-right">
                <div className="main-tasks">MAIN TASKS: {this.props.workExperienceArrayItem.mainTasks}</div>
                <button className="experience-edit" onClick={() => this.submitEditWorkExperience()}>
                  Edit
                </button>
                <button className="experience-delete" onClick={() => this.handleRemoveWorkExperience(this.props.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    else
      return (
        <div>
          <div>
            <div className="experience-container">
              <div className="header-left">
                <input
                  type="text"
                  className="company-name"
                  placeholder="Company Name"
                  value={this.props.workExperienceArrayItem.companyName}
                  onChange={(e) => {
                    this.handleUpdateWorkExperience(this.props.id, e, "field1");
                  }}
                />
                <input
                  type="text"
                  className="position-title"
                  placeholder="Position Title"
                  value={this.props.workExperienceArrayItem.positionTitle}
                  onChange={(e) => {
                    this.handleUpdateWorkExperience(this.props.id, e, "field2");
                  }}
                />
                <div className="date-of-work-container">
                  <input
                    type="date"
                    className="date-of-work"
                    value={this.props.workExperienceArrayItem.dateOfWorkStart}
                    onChange={(e) => {
                      this.handleUpdateWorkExperience(this.props.id, e, "field3");
                    }}
                  />
                  <div className="dash"></div>
                  <input
                    type="date"
                    className="date-of-work"
                    value={this.props.workExperienceArrayItem.dateOfWorkEnd}
                    onChange={(e) => {
                      this.handleUpdateWorkExperience(this.props.id, e, "field4");
                    }}
                  />
                </div>
              </div>
              <div className="divider experience-divider"></div>
              <div className="header-right">
                <textarea
                  className="main-tasks"
                  placeholder="Main Tasks"
                  value={this.props.workExperienceArrayItem.mainTasks}
                  onChange={(e) => {
                    this.handleUpdateWorkExperience(this.props.id, e, "field5");
                  }}
                />
                <button className="experience-submit" onClick={() => this.submitEditWorkExperience()}>
                  Submit
                </button>
                <button className="experience-delete" onClick={() => this.handleRemoveWorkExperience(this.props.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default WorkExperience;
