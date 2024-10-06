import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { ScoreInputField } from "../../../../components/fields/scoreInput";

export const StudentsListTable = ({ classResultsData }) => {
  const [studentEditIndex, setStudentEditIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Check if there are results; if not, render a message
  if (!classResultsData || classResultsData.length === 0) {
    return <div>No student data available.</div>;
  }

  // Extract subjects and their assessments while allowing for duplicates
  const subjectsWithAssessments = classResultsData.flatMap((student) =>
    student.subjects.map((subject) => ({
      subjectName: subject.subjectName,
      assessments: subject.assessments,
    })),
  );

  // Get unique subjects for headers
  const uniqueSubjects = [
    ...new Set(subjectsWithAssessments.map((item) => item.subjectName)),
  ];

  // Filter students by name based on the search query
  const filteredStudents = classResultsData.filter((student) =>
    student.studentName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="w-full overflow-x-scroll text-[1.4rem] font-inter bg-white py-[4rem] px-[2rem] rounded-3xl">
      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by student name"
          className="p-2 border rounded-md w-full"
        />
      </div>

      <table className="w-full min-w-[50rem]">
        <thead>
          <tr className="*:text-center *:border-[1px] bg-blue_primary text-left *:p-4 *:font-medium text-white">
            <th className="sticky left-[-2rem] w-[5rem] bg-inherit z-10">
              S/N
            </th>
            <th className="sticky left-[3rem] bg-inherit z-10 border-r-[1px] border-r-primary/[.5]">
              Name
            </th>
            <th className="bg-inherit z-10" colSpan={uniqueSubjects.length}>
              Subjects
            </th>
          </tr>
          <tr className="*:border-[1px] bg-gray-500 text-left *:p-4 *:font-medium text-white">
            <th className="sticky left-[-2rem] w-[5rem] bg-inherit z-10"></th>
            <th className="sticky left-[3rem] bg-inherit z-10 border-r-[1px] border-r-primary/[.5]"></th>
            {uniqueSubjects.map((subjectName, subjIndex) => (
              <th
                key={subjIndex}
                colSpan={
                  classResultsData[0].subjects.find(
                    (s) => s.subjectName === subjectName,
                  ).assessments.length
                }
                className="text-center"
              >
                {subjectName}
              </th>
            ))}
          </tr>
          <tr className="*:border-[1px] bg-gray-500 text-left *:p-4 *:font-medium text-white">
            <th className="sticky left-[-2rem] w-[5rem] bg-inherit z-10"></th>
            <th className="sticky left-[3rem] bg-inherit z-10 border-r-[1px] border-r-primary/[.5]"></th>
            {uniqueSubjects.flatMap((subjectName) =>
              classResultsData[0].subjects
                .find((s) => s.subjectName === subjectName)
                .assessments.map((assessment, assIndex) => (
                  <th
                    key={assIndex}
                    className="[writing-mode:vertical-rl] scale-[-1]"
                  >
                    {assessment.name}
                  </th>
                )),
            )}
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, studentIndex) => (
            <tr
              key={studentIndex}
              className={`[&>*]:p-4 even:bg-slate-50 ${
                studentIndex === studentEditIndex
                  ? "border-b-blue-500/50 border-l-blue-500/50"
                  : "border-transparent"
              } border-b-[1px] border-l-[1px] border-solid odd:bg-white`}
            >
              <td className="sticky left-[-2rem] w-[5rem] bg-inherit z-10">
                {studentIndex + 1}
              </td>
              <td className="min-w-[40rem] sticky left-[3rem] bg-inherit z-10 border-r-[1px] border-r-primary/[.5]">
                <p className="w-full flex flex-row items-center justify-between text-[1.4rem] bg-inherit z-10">
                  <span className="uppercase">{student.studentName}</span>
                  <button onClick={() => setStudentEditIndex(studentIndex)}>
                    <Icon icon="iconoir:page-edit" fontSize={17} />
                  </button>
                </p>
              </td>
              {uniqueSubjects.map((subjectName) => {
                const studentSubject = student.subjects.find(
                  (s) => s.subjectName === subjectName,
                );
                return studentSubject ? (
                  studentSubject.assessments.map((assessment, assIndex) => (
                    <td key={assIndex} className="p-2 min-w-[5rem]">
                      <ScoreInputField
                        value={
                          assessment.score === "N/A" ? "" : assessment.score
                        }
                        name={assessment.name}
                        disabled={studentEditIndex !== studentIndex}
                        handleChange={(e) => {
                          // Handle score change if needed
                        }}
                      />
                    </td>
                  ))
                ) : (
                  <td key={subjectName}></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};