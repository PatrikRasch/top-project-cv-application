import React from "react";

export default function EducationHeader(props) {
  const handleAddEducation = () => {
    props.addEducation();
  };

  return (
    <div>
      <div className="education-header-container">
        <div className="education-header">Education</div>
        <button className="education-add" onClick={handleAddEducation}>
          Add
        </button>
      </div>
    </div>
  );
}
