import React from "react";
import "./education.css";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  handleRemoveEducation = (id) => {
    this.props.removeEducation(id);
  };

  submitEditEducation = () => {
    this.setState((prevState) => ({
      submitted: !prevState.submitted,
    }));
  };

  handleUpdateEducation = (id, e, inputField) => {
    const inputValue = e.target.value;
    this.props.updateEducation(id, inputValue, inputField);
  };

  render() {
    const { submitted } = this.state;

    if (submitted === true) {
      return (
        <div>
          <div>
            <div className="education-container">
              <div className="education-left">
                <p className="school-name">SCHOOL: {this.props.educationArrayItem.schoolName}</p>
                <div className="date-of-study-container">
                  <p className="date-of-study">{this.props.educationArrayItem.dateOfStudyStart}</p>
                  <div className="dash"></div>
                  <p className="date-of-study">{this.props.educationArrayItem.dateOfStudyEnd}</p>
                </div>
              </div>
              <div className="divider education-divider"></div>
              <div className="education-right">
                <p className="title-of-study">STUDY: {this.props.educationArrayItem.titleOfStudy}</p>
                <p className="average-grade">AVERAGE GRADE: {this.props.educationArrayItem.averageGrade}</p>
                <button className="education-edit" onClick={() => this.submitEditEducation()}>
                  Edit
                </button>
                <button className="education-delete" onClick={() => this.handleRemoveEducation(this.props.id)}>
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
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    className="school-name"
                    placeholder="School Name"
                    value={this.props.educationArrayItem.schoolName}
                    onChange={(e) => this.handleUpdateEducation(this.props.id, e, "field1")}
                  />
                </form>
                <div className="date-of-study-container">
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="date"
                      className="date-of-study"
                      value={this.props.educationArrayItem.dateOfStudyStart}
                      onChange={(e) => this.handleUpdateEducation(this.props.id, e, "field2")}
                    />
                  </form>
                  <div className="dash"></div>
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="date"
                      className="date-of-study"
                      value={this.props.educationArrayItem.dateOfStudyEnd}
                      onChange={(e) => this.handleUpdateEducation(this.props.id, e, "field3")}
                    />
                  </form>
                </div>
              </div>
              <div className="divider education-divider"></div>
              <div className="education-right">
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    className="title-of-study"
                    placeholder="Title of Study"
                    value={this.props.educationArrayItem.titleOfStudy}
                    onChange={(e) => this.handleUpdateEducation(this.props.id, e, "field4")}
                  />
                  <input
                    type="text"
                    className="average-grade"
                    placeholder="Average Grade"
                    maxLength={3}
                    value={this.props.educationArrayItem.averageGrade}
                    onChange={(e) => this.handleUpdateEducation(this.props.id, e, "field5")}
                  />
                </form>

                <button className="education-submit" onClick={() => this.submitEditEducation()}>
                  Submit
                </button>
                <button className="education-delete" onClick={() => this.handleRemoveEducation(this.props.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Education;
