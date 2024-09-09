import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./Table.css";
import DeleteModal from "../../DeleteModal";
import ScoresModal from "../../Scores/ScoresModal";

const handleDelete = (id) => {};

const StudentsTable = ({ row, columns, showDelete, showView, showEditScores }) => {

  // const classColumn={
  //    field: "studentClass", headerName: "Student Class", width: 170 ,
  //    renderCell:(params)=>{
  //     return params.row.studentClass.name
  //    }
  // }

  const actionColumn = {
    field: "action",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex items-center w-full actionButton h-full gap-2 cursor-pointer">
          {/* Conditionally render view button based on showView prop */}
          {showView && (
            <Link to={`/admin/student-details/${params.row.id}`}>
              <span className="text-[#3ec555] viewAction outline-1 p-2   ">
                {" "}
                View
              </span>
            </Link>
          )}

          {/* Conditionally render delete button based on showDelete prop */}
          {showDelete && (
            <div
              className="deleteAction"
              onClick={() => handleDelete(params.row.id)}
            >
              <span className="text-[#e90404]">
                <DeleteModal />
              </span>
            </div>
          )}

          {/* Conditionally render view button based on showView prop */}
          {showEditScores && (
            <div
            className="text-[#3ec555] viewAction outline-1 p-2"
            onClick={() => handleDelete(params.row.id)}
          >
            <span className="text-[#e90404]">
              <ScoresModal/>
            </span>
          </div>

          )}
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataTableBg p-[20px] "
        rows={row}
        columns={[...columns,actionColumn]}
        //  getRowId={generateUniqueId}
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
