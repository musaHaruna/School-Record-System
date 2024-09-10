import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./Table.css";
import DeleteModal from "../../DeleteModal";
import { useGetAllSessionsQuery, useGetSessionTermsQuery } from '../../../app/api/sessionsApi'; // Import both queries

const SubjectTable = ({ row, columns }) => {
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedTerm, setSelectedTerm] = useState(""); // State to hold the selected term

  // Fetch sessions
  const { data: sessionsData, isLoading: sessionsLoading, error: sessionsError } = useGetAllSessionsQuery();
  
  // Fetch terms for the selected session
  const { data: sessionTermsData, isLoading: termsLoading, error: termsError, refetch: fetchSessionTerms } = useGetSessionTermsQuery(selectedSession, {
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
  const handleSessionChange = (e) => {
    const sessionId = e.target.value;
    setSelectedSession(sessionId);
    setSelectedTerm(""); // Reset the term when a new session is selected
    fetchSessionTerms(); // Refetch terms for the newly selected session
  };

  // Handle term change
  const handleTermChange = (e) => {
    setSelectedTerm(e.target.value);
    // You can add logic here to filter or refetch the subjects based on the selected term
  };

  const teachersColumn = {
    field: "teachers",
    headerName: "Teachers",
    width: 100,
    renderCell: (params) => {
      return <span>{params.row.id}</span>;
    },
  };

  const actionColumn = {
    field: "action",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex items-center w-full actionButton h-full gap-2 cursor-pointer">
          <Link to={`/admin/student-details/${params.row.id}`}>
            <span className="text-[#3ec555] viewAction outline-1 p-2"> View </span>
          </Link>

          <Link to={`/admin/subject-students/${params.row.id}`}>
            <span className="text-[#3ec555] viewStudentsAction outline-1 p-2"> View Students </span>
          </Link>

          <div className="deleteAction">
            <span className="text-[#e90404]">
              <DeleteModal id={params.row.id} type="subjects" />
            </span>
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <div className="flex mb-4 space-x-4 items-center">
        {/* Session Dropdown */}
        <div>
          <label className="mr-2 text-gray-700">Session:</label>
          <select
            value={selectedSession}
            onChange={handleSessionChange}
            className="p-2 border rounded-md"
          >
            <option value="">Select Session</option>
            {sessionsLoading ? (
              <option>Loading...</option>
            ) : (
              sessionsData?.map((session) => (
                <option key={session.id} value={session.id}>
                  {session.name}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Term Dropdown */}
        <div>
          <label className="mr-2 text-gray-700">Term:</label>
          <select
            value={selectedTerm}
            onChange={handleTermChange}
            className="p-2 border rounded-md"
            disabled={!selectedSession || termsLoading} // Disable until a session is selected
          >
            <option value="">Select Term</option>
            {termsLoading ? (
              <option>Loading...</option>
            ) : (
              sessionTermsData?.map((term) => (
                <option key={term.id} value={term.id}>
                  {term.name}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      <DataGrid
        className="dataTableBg p-[20px] "
        rows={row}
        columns={[...columns, teachersColumn, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default SubjectTable;
