import React from "react";

export default function WorkExperienceHeader(props) {
  const handleAddWorkExperience = () => {
    props.addWorkExperience();
  };
  return (
    <div className="experience-header-container">
      <div className="experience-header">Experience</div>
      <button className="experience-add" onClick={handleAddWorkExperience}>
        Add
      </button>
    </div>
  );
}
