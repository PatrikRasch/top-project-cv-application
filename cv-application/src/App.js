import React from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header/Header";
import Education from "./components/education/Education";
import EducationHeader from "./components/education/EducationHeader";
import WorkExperienceHeader from "./components/workExperience/WorkExperienceHeader";
import WorkExperience from "./components/workExperience/WorkExperience";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      educationArray: [],
      workExperienceArray: [],
    };
  }

  addEducation = () => {
    const newEducationSection = {
      id: uuidv4(),
      schoolName: null,
      dateOfStudyStart: null,
      dateOfStudyEnd: null,
      titleOfStudy: null,
      averageGrade: null,
    };
    this.setState({ educationArray: [...this.state.educationArray, newEducationSection] });
  };

  removeEducation = (id) => {
    this.setState((prevState) => {
      const updatedEducationArray = prevState.educationArray.filter((item) => item.id !== id);
      return { educationArray: updatedEducationArray };
    });
  };

  updateEducation = (id, inputValue, inputField) => {
    this.setState((prevState) => {
      /// Find the component from the array
      const targetComponent = prevState.educationArray.find((item) => item.id === id);
      /// Copy the target component to avoid directly mutating state
      const updatedComponent = { ...targetComponent };
      if (inputField === "field1") updatedComponent.schoolName = inputValue;
      if (inputField === "field2") updatedComponent.dateOfStudyStart = inputValue;
      if (inputField === "field3") updatedComponent.dateOfStudyEnd = inputValue;
      if (inputField === "field4") updatedComponent.titleOfStudy = inputValue;
      if (inputField === "field5") updatedComponent.averageGrade = inputValue;
      /// Map the changes to a new constant
      const updatedArray = prevState.educationArray.map((item) => (item.id === id ? updatedComponent : item));
      /// Update the state
      return { educationArray: updatedArray };
    });
  };

  addWorkExperience = () => {
    const newWorkExperienceSection = {
      id: uuidv4(),
      companyName: null,
      positionTitle: null,
      dateOfWorkStart: null,
      dateofWorkEnd: null,
      mainTasks: null,
    };
    this.setState({ workExperienceArray: [...this.state.workExperienceArray, newWorkExperienceSection] });
  };

  removeWorkExperience = (id) => {
    this.setState((prevState) => {
      const updatedWorkExperienceArray = prevState.workExperienceArray.filter((item) => item.id !== id);
      return { workExperienceArray: updatedWorkExperienceArray };
    });
  };

  updateWorkExperience = (id, inputValue, inputField) => {
    this.setState((prevState) => {
      const targetComponent = prevState.workExperienceArray.find((item) => item.id === id);
      const updatedComponent = { ...targetComponent };
      if (inputField === "field1") updatedComponent.companyName = inputValue;
      if (inputField === "field2") updatedComponent.positionTitle = inputValue;
      if (inputField === "field3") updatedComponent.dateOfWorkStart = inputValue;
      if (inputField === "field4") updatedComponent.dateOfWorkEnd = inputValue;
      if (inputField === "field5") updatedComponent.mainTasks = inputValue;
      const updatedArray = prevState.workExperienceArray.map((item) => (item.id === id ? updatedComponent : item));
      return { workExperienceArray: updatedArray };
    });
  };

  render() {
    const { educationArray, workExperienceArray } = this.state;
    return (
      <div>
        <Header />
        <EducationHeader addEducation={this.addEducation} />
        {educationArray.map((item) => {
          return (
            <Education
              key={item.id}
              id={item.id}
              removeEducation={this.removeEducation}
              updateEducation={this.updateEducation}
              educationArrayItem={item}
            />
          );
        })}
        <WorkExperienceHeader addWorkExperience={this.addWorkExperience} />
        {workExperienceArray.map((item) => {
          return (
            <WorkExperience
              key={item.id}
              id={item.id}
              removeWorkExperience={this.removeWorkExperience}
              updateWorkExperience={this.updateWorkExperience}
              workExperienceArrayItem={item}
            />
          );
        })}
      </div>
    );
  }
}

export default App;

//! INCLUDE
/// Be sure to include an edit and submit button for each section or for the whole CV, your preference.
/// The submit button should submit your form and display the value of your input fields in HTML elements.
/// The edit button should add back (display) the input fields, with the previously displayed information as values.
/// In those input fields, you should be able to edit and resubmit the content.
/// You’re going to make heavy use of state and props, so make sure you understood those concepts.
