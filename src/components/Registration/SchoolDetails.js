import { useState } from "react";
import { HeroOne, SchoolIconWhite, Logo } from "../images";

const SchoolDetails = ({ nextStep, prevStep, step }) => {
  const [schoolId, setSchoolId] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const classOptions = [
    "Nursery 1",
    "Nursery 2",
    "Nursery 3",
    "Primary 1",
    "Primary 2",
    "Primary 3",
    "Primary 4",
    "Primary 5",
    "Primary 6",
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", {
      schoolId,
      selectedClass,
      teacherName,
    });
  };

  return (
    <article className="register-form-flex">
      <section className="register-content">
        <div className="logo-sm">
          <Logo />
        </div>
        <p style={{ display: step === 4 ? "none" : "" }}>
          <span style={{ color: "blue" }}>{step} </span>/3
        </p>
        <div className="register-desc">
          <div className="icon-reg">
            <SchoolIconWhite />
          </div>
          <div>
            <h3>School Details</h3>
            <p>Fill in your personal details appropriately below.</p>
          </div>
        </div>
        <form onSubmit={handleFormSubmit} className="register-details">
          <label>
            <h5> School ID</h5>

            <input
              type="text"
              value={schoolId}
              onChange={(e) => setSchoolId(e.target.value)}
              required
            />
          </label>

          <label className="school-detail-select">
            <h5>Class</h5>

            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              required
            >
              <option value="">Select Class</option>
              {classOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            <h5>Teacher's Name</h5>

            <input
              type="text"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              required
            />
          </label>
        </form>
        <div className="register-navigate">
          <button className="btn-blue-border" onClick={prevStep}>
            <i class="fa-solid fa-chevron-left"></i>
            Previous
          </button>

          <button className="btn-blue" onClick={nextStep}>
            Continue
          </button>
        </div>
      </section>
      <section className="register-hero">
        <HeroOne />
      </section>
    </article>
  );
};
export default SchoolDetails;
