import React, { useState } from "react";
import "./workExperience.css";

export default function WorkExperience(props) {
  const [submitted, setSubmitted] = useState(false);

  const submitEditWorkExperience = () => {
    setSubmitted((prevSubmitted) => !prevSubmitted);
  };

  const handleRemoveWorkExperience = (id) => {
    props.removeWorkExperience(id);
  };

  const handleUpdateWorkExperience = (id, e, inputField) => {
    const inputValue = e.target.value;
    props.updateWorkExperience(id, inputValue, inputField);
  };

  if (submitted === true)
    return (
      <div>
        <div>
          <div className="experience-container">
            <div className="header-left">
              <div className="company-name">COMPANY NAME: {props.workExperienceArrayItem.companyName}</div>
              <div className="position-title">TITLE: {props.workExperienceArrayItem.positionTitle}</div>
              <div className="date-of-work-container">
                <div className="date-of-work">{props.workExperienceArrayItem.dateOfWorkStart}</div>
                <div className="dash"></div>
                <div className="date-of-work">{props.workExperienceArrayItem.dateOfWorkEnd}</div>
              </div>
            </div>
            <div className="divider experience-divider"></div>
            <div className="header-right">
              <div className="main-tasks">MAIN TASKS: {props.workExperienceArrayItem.mainTasks}</div>
              <button className="experience-edit" onClick={() => submitEditWorkExperience()}>
                Edit
              </button>
              <button className="experience-delete" onClick={() => handleRemoveWorkExperience(props.id)}>
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
                value={props.workExperienceArrayItem.companyName}
                onChange={(e) => {
                  handleUpdateWorkExperience(props.id, e, "companyName");
                }}
              />
              <input
                type="text"
                className="position-title"
                placeholder="Position Title"
                value={props.workExperienceArrayItem.positionTitle}
                onChange={(e) => {
                  handleUpdateWorkExperience(props.id, e, "positionTitle");
                }}
              />
              <div className="date-of-work-container">
                <input
                  type="date"
                  className="date-of-work"
                  value={props.workExperienceArrayItem.dateOfWorkStart}
                  onChange={(e) => {
                    handleUpdateWorkExperience(props.id, e, "dateOfWorkStart");
                  }}
                />
                <div className="dash"></div>
                <input
                  type="date"
                  className="date-of-work"
                  value={props.workExperienceArrayItem.dateOfWorkEnd}
                  onChange={(e) => {
                    handleUpdateWorkExperience(props.id, e, "dateOfWorkEnd");
                  }}
                />
              </div>
            </div>
            <div className="divider experience-divider"></div>
            <div className="header-right">
              <textarea
                className="main-tasks"
                placeholder="Main Tasks"
                value={props.workExperienceArrayItem.mainTasks}
                onChange={(e) => {
                  handleUpdateWorkExperience(props.id, e, "mainTasks");
                }}
              />
              <button className="experience-submit" onClick={() => submitEditWorkExperience()}>
                Submit
              </button>
              <button className="experience-delete" onClick={() => handleRemoveWorkExperience(props.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
