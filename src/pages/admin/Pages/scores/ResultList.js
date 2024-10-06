import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { SelectFilter } from "../../../../components/fields/filterFields";
import { ViewResult } from "../../../../components/admin/results/ViewResult";

import { StudentsListTableEmpty } from "./StudentsListTableEmpty";
import { StudentsListTable } from "./StudentsListTable";
import {
  useGetAllSessionsQuery,
  useGetSessionTermsQuery,
} from "../../../../app/api/sessionsApi";
import { useGetAllClassesQuery } from "../../../../app/api/classApi";
import { useGetClassResultsQuery } from "../../../../app/api/classApi";

import { fetchClassResults } from "../../../../app/features/classResultsSlice";


export const ResultList = () => {
  const dispatch = useDispatch();   

  const { data: classResultsData, loading, error } = useSelector((state) => state.classResults);
  const resultRef = useRef();

  const {
    data: classesData,
    isLoading: classesLoading,
    error: classesError,
  } = useGetAllClassesQuery();

  const [selectedSession, setSelectedSession] = useState(""); // State to hold the selected session
  const [selectedTerm, setSelectedTerm] = useState(""); // State to hold the selected term
  const [selectedClass, setSelectedClass] = useState(""); // State to hold the selected class
  const [selectedClassName, setSelectedClassName] = useState(""); // State to hold the selected class name
  const [selectedSessionName, setSelectedSessionName] = useState(""); // State to hold the selected session name
  const [selectedTermName, setSelectedTermName] = useState(""); // State to hold the selected term name
  

  // const {
  //   data: classResultsData,
  //   isLoading: classResultsLoading,
  //   error: classResultsError,
  // } = useGetClassResultsQuery(
  //   { classId: selectedClass, termId: selectedTerm },
  //   {
  //     skip: !selectedClass || !selectedTerm,
  //   },
  // );

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
      setSelectedSessionName(lastSession.name); // Store the session name
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
      setSelectedTermName(lastTerm.name); // Store the term name
    }
  }, [sessionTermsData]);

  // Preselect the last class
  useEffect(() => {
    if (classesData && classesData.length > 0) {
      const firstClass = classesData[0]; // Get the first class
      setSelectedClass(firstClass.id); // Preselect the first class's ID
      setSelectedClassName(firstClass.name); // Store the class name
    }
  }, [classesData]);

  useEffect(() => {
    dispatch(fetchClassResults(selectedClass, selectedTerm)); // Dispatch action to fetch class results
  }, [dispatch, selectedClass, selectedTerm]);


  // Handle session change
  const handleSessionChange = (sessionId) => {
    const selectedSessionObj = sessionsData.find(session => session.id === sessionId);
    setSelectedSession(sessionId);
    setSelectedSessionName(selectedSessionObj.name); // Set the selected session name
    setSelectedTerm("");
    fetchSessionTerms();
  };

  const handleTermChange = (termId) => {
    setSelectedTerm(termId);
    setSelectedTermName(sessionTermsData.find(term => term.id === termId).name); // Set the selected term name
  };

  const handleClassChange = (classId) => {
    const selectedClassObj = classesData.find(classItem => classItem.id === classId);
    setSelectedClass(classId);
    setSelectedClassName(selectedClassObj.name); // Set the selected class name
  };

  // Handle print button click (add logic here for printing)
  const handlePrint = () => {
    const printWindow = window.open("", "_blank", "width=800,height=600");
    const printContent = resultRef.current.innerHTML;

    printWindow.document.write(`
      <html>
        <head>
          <title>Print View</title>
          <style>
            /* Add any custom styles for print here */
            body {
              font-family: Arial, sans-serif;
            }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <>
      <Outlet />
      <div>
        <h1 className="font-thin font-rubik text-[2.4rem] mb-4">Score Sheet</h1>

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

         {/* Button next to filters */}
          <button
            className="w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handlePrint}
            style={{ maxWidth: '200px' }} // Set a max width
          >
            Print Report Cards
          </button>
        </div>
        <div ref={resultRef} style={{ display: "none" }}>

        {
          // List viewResult for each student in classResultsData
          classResultsData?.map((result, index) => (
            <ViewResult 
              key={index} 
              studentResultsData={result} 
            
              studentClass={selectedClassName} // Pass the class name
              session={selectedSessionName} // Pass the session name
              term={selectedTermName} // Pass the term name
              year={selectedSessionName.split('/')[1]} // Pass the current year
            />
          ))
        }
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
