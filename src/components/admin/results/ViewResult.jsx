import styles from "./sampleResultCss.module.css";
import SchoolImg from "./schoolImage.png";
import { useGetHeadTeacherQuery } from "../../../app/api/teachersApi";
import { useEffect } from "react";

export const ViewResult = ({ studentResultsData, session, year, studentClass, term }) => {
  const {
    studentName,
    gender,
    subjects,
    position,
    totalStudentsCount,
    overallTotalScore,
    maxOverallTotalScore,
    averageOverallTotalScore,
  } = studentResultsData;

  // Get unique assessment headers
  const assessmentHeaders = Array.from(
    new Set(subjects.flatMap((subject) => subject.assessments.map((assessment) => assessment.name)))
  );

  const { data: headerTeacher } = useGetHeadTeacherQuery();

  // Helper function to generate teacher's remarks
  const generateTeacherRemark = (totalScore, grade) => {
    if (grade === "A") {
      return "An outstanding performance! Keep it up!";
    } else if (grade === "B") {
      return "A very good result! You can push for more!";
    } else if (grade === "C") {
      return "Good job, but there's room for improvement.";
    } else if (grade === "D") {
      return "You passed, but focus on improving next term.";
    } else if (grade === "E") {
      return "Needs significant improvement. Keep working hard.";
    } else {
      return "You need to put in much more effort.";
    }
  };

  // Function to generate the head teacher's remarks based on performance
  const generateHeadTeacherRemark = (position, totalStudentsCount) => {
    if(position === 1) {
      return "An excellent result, keep being a top performer!";
    } else if(position <= 3) {
      return "Outstanding result, stay focused and keep improving!";
    } else if(position <= 6) {
      return "Great result, but aim higher.";
    }
    const percentagePosition = (position / totalStudentsCount) * 100;
    if (percentagePosition <= 10) {
      return "An excellent result, keep being a top performer!";
    } else if (percentagePosition <= 30) {
      return "Good work, stay focused and keep improving!";
    } else if (percentagePosition <= 60) {
      return "A satisfactory result, but aim higher.";
    } else {
      return "More dedication is required for better results.";
    }
  };

  return (
    <>
      <div className={styles.sampleResult}>
        {/* show sample result */}
        <div className={styles.header}>
          <table>
            <thead>
              <tr>
                <th rowspan="2">
                  <img src={SchoolImg} alt="school" />
                </th>
                <th>
                  <h1>
                    PECULIAR TREASURE NURSERY <br />
                    AND PRIMARY SCHOOL
                  </h1>
                </th>
              </tr>
              <tr>
                <th className="pt-[2rem]">
                  <h3>
                    Peace House Camp Zion Kpoghirikpo, Afikpo North LGA, Ebonyi State Nigeria.
                  </h3>
                </th>
              </tr>
            </thead>
          </table>
        </div>

        <div className={styles.topSummary}>
          <div className="col-start-1 col-end-3">
            <span>Name of pupil:</span>
            <span>{studentName.trim()}</span>
          </div>
          <div>
            <span>Term:</span>
            <span>{term}</span>
          </div>
          <div>
            <span>Session:</span>
            <span>{session}</span>
          </div>
          <div>
            <span>Gender:</span>
            <span>{gender}</span>
          </div>
          <div>
            <span>Class:</span>
            <span>{studentClass}</span>
          </div>
          <div>
            <span>Year:</span>
            <span>{year}</span>
          </div>
          <div>
            <span>Next Term begins:</span>
            <span>20 May, 2024</span>
          </div>
        </div>
        <br></br>
        <div className={styles.sheetContainer}>
          <table border="1" className={styles.topTable}>
            <thead>
              <tr>
                <th rowSpan="2" colSpan={2}>
                  Subjects
                </th>
                {assessmentHeaders.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
                <th className="vertical-text">Term Total</th>
                <th className="vertical-text">Class average</th>
                <th className="vertical-text">Highest in class</th>
                <th className="vertical-text">Lowest in class</th>
                <th className="vertical-text">Position in class</th>
                <th className="vertical-text">Grade</th>
                <th className="vertical-text">Teachers remark</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, subjectIndex) => (
                <tr key={subjectIndex}>
                  <td colSpan={2}>{subject.subjectName}</td>
                  {assessmentHeaders.map((header, headerIndex) => {
                    const assessment = subject.assessments.find((a) => a.name === header);
                    return <td key={headerIndex}>{assessment ? assessment.score : "-"}</td>;
                  })}
                  <td>{subject.totalScore}</td>
                  <td>{subject.classAverageScore}</td>
                  <td>{subject.classHighestScore}</td>
                  <td>{subject.classLowestScore}</td>
                  <td>{subject.positionInClass}</td>
                  <td>{subject.grade}</td>
                  <td>{generateTeacherRemark(subject.totalScore, subject.grade)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
          {/* Additional table for remarks and signatures */}
          <table border="1" className={styles.bottomTable}>
            <tbody>
              <tr>
                <td>
                  <div>
                    <p>
                      <span>Position:</span>
                      <span>{position}</span>
                    </p>
                    <p>
                      <span>Out of:</span>
                      <span>{totalStudentsCount}</span>
                    </p>
                    <p>
                      <span>Total score:</span>
                      <span>{overallTotalScore}</span>
                    </p>
                    <p>
                      <span>Maximum total score:</span>
                      <span>{maxOverallTotalScore}</span>
                    </p>
                    <p>
                      <span>Average total score:</span>
                      <span>{averageOverallTotalScore}</span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>Class Teacher's remarks: </span>
                    <span>---</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>Class Teacher's Name and signature: </span>
                    <span>--</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>Head teacher's remarks: </span>
                    <span>{generateHeadTeacherRemark(position, totalStudentsCount)}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>Head teacher's name and signature: </span>
                    <span>{headerTeacher?.name}</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.stamp}>
          <p>Stamp</p>
        </div>

        <div className={styles.finalGrading}>
          <span>
            <b>Final Grading</b>
          </span>
          <span>
            A-Excellent, B-V. Good, C-Good, D-Pass, E-Fair, F-Fail
          </span>
        </div>

        <div className={styles.footer}>
          If you obey me and keep my covenant you will be a peculiar treasure to me says the Lord. Exodus 19:5
        </div>
      </div>
    </>
  );
};
