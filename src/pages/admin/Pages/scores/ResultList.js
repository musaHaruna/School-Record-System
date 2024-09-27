import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SelectFilter } from "../../../../components/fields/filterFields";
import { StudentsListTableEmpty } from "./StudentsListTableEmpty";
import { StudentsListTable } from "./StudentsListTable";
import {
  useGetAllSessionsQuery,
  useGetSessionTermsQuery,
} from "../../../../app/api/sessionsApi";
import { useGetAllClassesQuery } from "../../../../app/api/classApi";
import { useGetClassResultsQuery } from "../../../../app/api/classApi";

export const ResultList = () => {
  const {
    data: classesData,
    isLoading: classesLoading,
    error: classesError,
  } = useGetAllClassesQuery();

  const [selectedSession, setSelectedSession] = useState(""); // State to hold the selected session
  const [selectedTerm, setSelectedTerm] = useState(""); // State to hold the selected term
  const [selectedClass, setSelectedClass] = useState(""); // State to hold the selected class

  const {
    data: classResultsData,
    isLoading: classResultsLoading,
    error: classResultsError,
  } = useGetClassResultsQuery(
    { classId: selectedClass, termId: selectedTerm },
    {
      skip: !selectedClass || !selectedTerm,
    },
  );

  // Fetch sessions
  const {
    data: sessionsData,
    isLoading: sessionsLoading,
    error: sessionsError,
  } = useGetAllSessionsQuery();

  // Preselect the last session
  useEffect(() => {
    if (sessionsData && sessionsData.length > 0) {
      const lastSession = sessionsData[sessionsData.length - 1]; // Get the last session
      setSelectedSession(lastSession.id); // Preselect the last session's ID
    }
  }, [sessionsData]);

  // Fetch terms for the selected session
  const {
    data: sessionTermsData,
    isLoading: termsLoading,
    error: termsError,
    refetch: fetchSessionTerms,
  } = useGetSessionTermsQuery(selectedSession, {
    skip: !selectedSession, // Skip the query if no session is selected
  });

  // Preselect the last term
  useEffect(() => {
    if (sessionTermsData && sessionTermsData.length > 0) {
      const lastTerm = sessionTermsData[sessionTermsData.length - 1]; // Get the last term
      setSelectedTerm(lastTerm.id); // Preselect the last term's ID
    }
  }, [sessionTermsData]);

  // Preselect the last class
  useEffect(() => {
    if (classesData && classesData.length > 0) {
      const firstClass = classesData[0]; // Get the last class
      setSelectedClass(firstClass.id); // Preselect the last class's ID
    }
  }, [classesData]);

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
            value={selectedSession} // Bind the state to the dropdown
          >
            {/* session filter */}
            <option value="">Select session</option>
            {sessionsData?.map((session, index) => (
              <option key={`${session.id}-${index}`} value={session.id}>
                {session.name}
              </option>
            ))}
          </SelectFilter>

          <SelectFilter
            primaryLabel={"Term"}
            handleChange={(e) => handleTermChange(e?.target?.value)}
            value={selectedTerm} // Bind the state to the dropdown
          >
            {/* term filter */}
            <option value="">Select term</option>
            {sessionTermsData?.map((term, index) => (
              <option key={`${term.id}-${index}`} value={term.id}>
                {term.name}
              </option>
            ))}
          </SelectFilter>

          <SelectFilter
            primaryLabel={"Class"}
            handleChange={(e) => handleClassChange(e?.target?.value)}
            value={selectedClass} // Bind the state to the dropdown
          >
            {/* class filter */}
            <option value="">Select class</option>
            {classesData?.map((classItem, index) => (
              <option key={`${classItem.id}-${index}`} value={classItem.id}>
                {classItem.name}
              </option>
            ))}
          </SelectFilter>
        </div>
        {!(
          sessionTermsData &&
          sessionsData &&
          classesData &&
          classResultsData
        ) ? (
          <StudentsListTableEmpty />
        ) : (
          <div className="mt-8">
            {/* student table container  */}
            <StudentsListTable
              {...{ sessionTermsData, classesData, sessionsData }}
              role="admin"
              classResultsData={classResultsData}
            />
          </div>
        )}
      </div>
    </>
  );
};