import { GridColDef } from "@mui/x-data-grid";
import StudentsTable from "../../../components/admin/students/StudentsTable";
import { studentRows } from "../data";

const Students = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "firstName", width: 130 },
    { field: "lastName", headerName: "lastName", width: 130 },
    { field: "email", headerName: "email", width: 130 },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (_, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
  ];

  return (
    <section className='className="py-4 px-2 sm:p-8 w-full h-full flex flex-col gap-6 overflow-y-auto'>
      <h1 className="font-bold text-[32px]">All Students</h1>
      {/* <Button variant="outline">Button</Button> */}

      <div className="p-2 w-full ">
        <StudentsTable
          link="users"
          route="users"
          columns={columns}
          row={studentRows}
          showDelete={true}
        />
      </div>
    </section>
  );
};

export default Students;
