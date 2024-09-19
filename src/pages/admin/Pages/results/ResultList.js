import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SelectFilter } from "../../../../components/fields/filterFields";
import { StudentListTableEmpty } from "./StudentListTableEmpty";
import { StudentsListTable } from "./StudentsListTable";
import {
  useGetAllSessionsQuery,
  useGetSessionsTermsQuery,
} from "../../../../app/api/sessionsApi";
import { useGetAllClassesQuery } from "../../../../app/api/classApi";

export const ResultList = () => {
  const subjects = [
    "English",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Geography",
    "Hausa",
    "Civic Education",
    "Computing",
  ];
  const {
    data: classesData,
    isLoading: classesLoading,
    error: classesError,
  } = useGetAllClassesQuery();

  const [selectedSession, setSelectedSession] = useState(""); // State to hold the selected session
  const [selectedTerm, setSelectedTerm] = useState(""); // State to hold the selected term
  const [selectedClass, setSelectedClass] = useState(""); // State to hold the selected class

  // Fetch sessions
  const {
    data: sessionsData,
    isLoading: sessionsLoading,
    error: sessionsError,
  } = useGetAllSessionsQuery();

  // Fetch terms for the selected session
  const {
    data: sessionTermsData,
    isLoading: termsLoading,
    error: termsError,
    refetch: fetchSessionTerms,
  } = useGetSessionsTermsQuery(selectedSession, {
    skip: !selectedSession, // Skip the query if no session is selected
  });

  // Preselect the last session
  useEffect(() => {
    if (sessionsData && sessionsData.length > 0) {
      const lastSession = sessionsData[sessionsData.length - 1]; // Get the last session
      setSelectedSession(lastSession.id); // Preselect the last session's ID
    }
  }, [sessionsData]);

  // Handle session change
  const handleSessionChange = (sessionId) => {
    setSelectedSession(sessionId);
    setSelectedTerm("");
    fetchSessionTerms();
  };

  const handleTermChange = (termId) => {
    setSelectedTerm(termId);
  };
  const handleClassChange = (classId) => {
    setSelectedClass(classId);
  };
  return (
    <>
      <Outlet />
      <div>
        <h1 className="font-thin font-rubik text-[2.4rem] mb-4">Result List</h1>

        <div className="flex-col flex gap-4 md:flex-row mb-8">
          {/* filters container  */}
          <SelectFilter
            primaryLabel={"Session"}
            handleChange={(e) => handleSessionChange(e?.target.value)}
          >
            {/* session filter */}
            <option value="">Select session</option>
            {sessionsData?.map((session) => (
              <option key={session.id} value={session.id}>
                {session.name}
              </option>
            ))}
          </SelectFilter>

          <SelectFilter
            primaryLabel={"Term"}
            handleChange={(e) => handleTermChange(e?.target?.value)}
          >
            {/* term filter  */}
            <option value="">Select term</option>
            {sessionTermsData?.map((term) => (
              <option key={term.id} value={term.id}>
                {term.name}
              </option>
            ))}
          </SelectFilter>

          <SelectFilter
            primaryLabel={"Class"}
            handleChange={(e) => handleClassChange(e?.target?.value)}
          >
            {/* class filter  */}
            <option value="">Select class</option>
            {classesData?.map((classItem) => (
              <option key={classItem.id} value={classItem.id}>
                {classItem.name}
              </option>
            ))}
          </SelectFilter>
        </div>
        {!(sessionTermsData && sessionsData && classesData) ? (
          <StudentListTableEmpty />
        ) : (
          <div className="mt-8">
            {/* student table container  */}
            <StudentsListTable
              {...{ sessionTermsData, classesData, sessionsData }}
              subjects={subjects}
              role="admin"
              students={[1, 2, 3, 4, 5, 6, 7, 8, 19, 0]}
            />
          </div>
        )}
      </div>
    </>
  );
};
