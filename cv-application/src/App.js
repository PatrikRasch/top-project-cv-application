import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header/Header";
import Education from "./components/education/Education";
import EducationHeader from "./components/education/EducationHeader";
import WorkExperienceHeader from "./components/workExperience/WorkExperienceHeader";
import WorkExperience from "./components/workExperience/WorkExperience";

export default function App() {
  const [educationArray, setEducationArray] = useState([]);
  const [workExperienceArray, setWorkExperienceArray] = useState([]);

  const addEducation = () => {
    const newEducationSection = {
      id: uuidv4(),
      schoolName: "",
      dateOfStudyStart: "",
      dateOfStudyEnd: "",
      titleOfStudy: "",
      averageGrade: "",
    };
    setEducationArray([...educationArray, newEducationSection]);
  };

  const removeEducation = (id) => {
    setEducationArray((prevEducationArray) => {
      const updatedEducationArray = prevEducationArray.filter((item) => item.id !== id);
      return updatedEducationArray;
    });
  };

  const updateEducation = (id, inputValue, inputField) => {
    setEducationArray((prevEducationArray) => {
      const updatedArray = prevEducationArray.map((item) => {
        if (item.id === id) {
          return { ...item, [inputField]: inputValue };
        }
        return item;
      });
      return updatedArray;
    });
  };

  const addWorkExperience = () => {
    const newWorkExperienceSection = {
      id: uuidv4(),
      companyName: "",
      positionTitle: "",
      dateOfWorkStart: "",
      dateofWorkEnd: "",
      mainTasks: "",
    };
    setWorkExperienceArray([...workExperienceArray, newWorkExperienceSection]);
  };

  const removeWorkExperience = (id) => {
    setWorkExperienceArray((prevWorkExperienceArray) => {
      const updatedWorkExperienceArray = prevWorkExperienceArray.filter((item) => item.id !== id);
      return updatedWorkExperienceArray;
    });
  };

  const updateWorkExperience = (id, inputValue, inputField) => {
    setWorkExperienceArray((prevWorkExperienceArray) => {
      const updatedArray = prevWorkExperienceArray.map((item) => {
        if (item.id === id) {
          return { ...item, [inputField]: inputValue };
        }
        return item;
      });
      return updatedArray;
    });
  };

  return (
    <div>
      <Header />
      <EducationHeader addEducation={addEducation} />
      {educationArray.map((item) => {
        return (
          <Education
            key={item.id}
            id={item.id}
            removeEducation={removeEducation}
            updateEducation={updateEducation}
            educationArrayItem={item}
          />
        );
      })}
      <WorkExperienceHeader addWorkExperience={addWorkExperience} />
      {workExperienceArray.map((item) => {
        return (
          <WorkExperience
            key={item.id}
            id={item.id}
            removeWorkExperience={removeWorkExperience}
            updateWorkExperience={updateWorkExperience}
            workExperienceArrayItem={item}
          />
        );
      })}
    </div>
  );
}
