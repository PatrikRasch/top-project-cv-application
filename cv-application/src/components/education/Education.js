import React, { useState } from "react";
import "./education.css";

export default function Education(props) {
  const [submitted, setSubmitted] = useState(false);

  const handleRemoveEducation = (id) => {
    props.removeEducation(id);
  };

  const submitEditEducation = () => {
    setSubmitted((prevSubmitted) => !prevSubmitted);
  };

  const handleUpdateEducation = (id, e, inputField) => {
    const inputValue = e.target.value;
    props.updateEducation(id, inputValue, inputField);
  };

  if (submitted === true) {
    return (
      <div>
        <div>
          <div className="education-container">
            <div className="education-left">
              <p className="school-name">SCHOOL: {props.educationArrayItem.schoolName}</p>
              <div className="date-of-study-container">
                <p className="date-of-study">{props.educationArrayItem.dateOfStudyStart}</p>
                <div className="dash"></div>
                <p className="date-of-study">{props.educationArrayItem.dateOfStudyEnd}</p>
              </div>
            </div>
            <div className="divider education-divider"></div>
            <div className="education-right">
              <p className="title-of-study">STUDY: {props.educationArrayItem.titleOfStudy}</p>
              <p className="average-grade">AVERAGE GRADE: {props.educationArrayItem.averageGrade}</p>
              <button className="education-edit" onClick={() => submitEditEducation()}>
                Edit
              </button>
              <button className="education-delete" onClick={() => handleRemoveEducation(props.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <div>
          <div className="education-container">
            <div className="education-left">
              <form>
                <input
                  type="text"
                  className="school-name"
                  placeholder="School Name"
                  value={props.educationArrayItem.schoolName}
                  onChange={(e) => handleUpdateEducation(props.id, e, "schoolName")}
                />
              </form>
              <div className="date-of-study-container">
                <form>
                  <input
                    type="date"
                    className="date-of-study"
                    value={props.educationArrayItem.dateOfStudyStart}
                    onChange={(e) => handleUpdateEducation(props.id, e, "dateOfStudyStart")}
                  />
                </form>
                <div className="dash"></div>
                <form>
                  <input
                    type="date"
                    className="date-of-study"
                    value={props.educationArrayItem.dateOfStudyEnd}
                    onChange={(e) => handleUpdateEducation(props.id, e, "dateOfStudyEnd")}
                  />
                </form>
              </div>
            </div>
            <div className="divider education-divider"></div>
            <div className="education-right">
              <form>
                <input
                  type="text"
                  className="title-of-study"
                  placeholder="Title of Study"
                  value={props.educationArrayItem.titleOfStudy}
                  onChange={(e) => handleUpdateEducation(props.id, e, "titleOfStudy")}
                />
                <input
                  type="text"
                  className="average-grade"
                  placeholder="Average Grade"
                  maxLength={3}
                  value={props.educationArrayItem.averageGrade}
                  onChange={(e) => handleUpdateEducation(props.id, e, "averageGrade")}
                />
              </form>

              <button className="education-submit" onClick={() => submitEditEducation()}>
                Submit
              </button>
              <button className="education-delete" onClick={() => handleRemoveEducation(props.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
