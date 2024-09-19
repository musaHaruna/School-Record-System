import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { Button } from "../../../../components/ui/button";
import StudentsTable from "../../../../components/admin/students/StudentsTable";
import { useGetAllStudentsQuery } from "../../../../app/api/studentsApi";

const Students = () => {
  const { data, isLoading, error } = useGetAllStudentsQuery();
  useEffect(() => {
    if (error) {
      toast.error(error.data.message);
    }
  }, [error]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First Name", width: 170 },
    { field: "middleName", headerName: "Middle Name", width: 170 },
    { field: "otherNames", headerName: "Other Names", width: 170 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "gender", headerName: "gender", width: 170 },
    { field: "parentsNumber", headerName: "Parents Number", width: 170 },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loader2 className=" animate-spin w-[60px] h-[60px]" />
      </div>
    );
  }

  return (
    <section className='className="py-4 px-2 sm:p-8 w-full h-full flex flex-col gap-6 overflow-y-auto'>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-[32px]">All Students</h1>
        <Link to="/admin/add-student">
          <Button className="bg-[#4a3aff] text-white hover:bg-[#5446f2]">
            Add New Student
          </Button>
        </Link>
      </div>

      <div className="p-2 w-full ">
        <StudentsTable
          link="students"
          route="students"
          columns={columns}
          row={data}
          showDelete={true}
          showView={true}
          showEditScores={false}
        />
      </div>
    </section>
  );
};

export default Students;
