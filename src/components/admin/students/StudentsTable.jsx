import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./Table.css";
import DeleteModal from "../../DeleteModal";
import ScoresModal from "../../Scores/ScoresModal";
import {
  useGetAllSessionsQuery,
  useGetSessionTermsQuery,
} from "../../../app/api/sessionsApi"; // Import both queries


const handleDelete = (id) => {};

const StudentsTable = ({
  row,
  columns,
  showDelete,
  showView,
  showEditScores,
}) => {
  const [selectedSession, setSelectedSession] = useState(""); // State to hold the selected session
  const [selectedTerm, setSelectedTerm] = useState(""); // State to hold the selected term

  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // Filter rows based on search text
  const filteredRows = row.filter((rowItem) =>
    rowItem
      ? rowItem.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        rowItem.middleName.toLowerCase().includes(searchText.toLowerCase()) ||
        rowItem.otherNames.toLowerCase().includes(searchText.toLowerCase())
      : true,
  );
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
  } = useGetSessionTermsQuery(selectedSession, {
    skip: !selectedSession, // Skip the query if no session is selected
  });

  // Preselect the last session
  useEffect(() => {
    if (sessionsData && sessionsData.length > 0) {
      const lastSession = sessionsData[sessionsData.length - 1]; // Get the last session
      setSelectedSession(lastSession.id); // Preselect the last session's ID
    }
  }, [sessionsData]);

  // Preselect the last term
  useEffect(() => {
    if (sessionTermsData && sessionTermsData.length > 0) {
      const lastTerm = sessionTermsData[sessionTermsData.length - 1]; // Get the last term
      setSelectedTerm(lastTerm.id); // Preselect the last term's ID
    }
  }, [sessionTermsData]);

  // Handle session change
  const handleSessionChange = (e) => {
    const sessionId = e.target.value;
    setSelectedSession(sessionId);
    setSelectedTerm("");
    fetchSessionTerms();
  };

  const handleTermChange = (e) => {
    setSelectedTerm(e.target.value);
  };

  const actionColumn = {
    field: "action",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      const studentId = params.row.id; // Extract studentId from the current row

      return (
        <div className="flex items-center w-full actionButton h-full gap-2 cursor-pointer">
          {/* Conditionally render view button based on showView prop */}
          {showView && (
            <Link to={`/admin/student-details/${studentId}`}>
              <span className="text-[#3ec555] viewAction outline-1 p-2">
                {" "}
                View{" "}
              </span>
            </Link>
          )}

          {/* Conditionally render delete button based on showDelete prop */}
          {showDelete && (
            <div
              className="deleteAction"
              onClick={() => handleDelete(studentId)}
            >
              <span className="text-[#e90404]">
                <DeleteModal type={"student"} id={params.row.id} />
              </span>
            </div>
          )}

          {/* Conditionally render ScoresModal based on showEditScores prop */}
          {showEditScores && (
            <div className="text-[#3ec555] viewAction outline-1 p-2">
              <ScoresModal
                studentId={studentId} // Pass studentId as a prop to ScoresModal
                selectedTerm={selectedTerm}
                selectedSession={selectedSession}
              />
            </div>
          )}
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

      {/* Custom search input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchText}
          onChange={handleSearchChange}
          className="p-2 border rounded-md w-1/4" // Adjust width here
        />
      </div>

      <DataGrid
        className="dataTableBg p-[20px] "
        rows={filteredRows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
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

export default StudentsTable;
