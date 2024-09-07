import React from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./Table.css";
import DeleteModal from "../../DeleteModal";


const SubjectTable = ({row, columns}) => {

    const teachersColumn={
        field:"teachers",
        headerName:"Teachers",
        width:100,
        renderCell:(params)=>{
            return(
               <span>{params.row.id}</span>
            )
        }
    }

    const actionColumn = {
        field: "action",
        headerName: "Actions",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="flex items-center w-full actionButton h-full gap-2 cursor-pointer">
              <Link to={`/admin/student-details/${params.row.id}`}>
                <span className="text-[#3ec555] viewAction outline-1 p-2   ">
                  {" "}
                  View
                </span>
              </Link>

              <Link to={`/admin/subject-students/${params.row.id}`}>
                <span className="text-[#3ec555] viewStudentsAction outline-1 p-2   ">
                  {" "}
                  View Students
                </span>
              </Link>
    
              <div
                className="deleteAction"
                
              >
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
    <DataGrid
      className="dataTableBg p-[20px] "
      rows={row}
      columns={[...columns,teachersColumn, actionColumn ]}
      //  getRowId={generateUniqueId}
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

export default SubjectTable