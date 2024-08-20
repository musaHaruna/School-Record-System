import React from 'react'
import { studentRows } from '../../data';
import StudentsTable from '../../../../components/admin/students/StudentsTable';
import { teachersRow } from '../../../../constants';
import NewTeachersTable from '../../../../components/admin/teachers/NewTeachersTable';

const SingleClass = () => {

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "firstName", headerName: "First Name", width: 170 },
        { field: "middleName", headerName: "Middle Name", width: 170 },
        { field: "otherNames", headerName: "Other Names", width: 170 },
        { field: "age", headerName: "Age", width: 100 },
        { field: "gender", headerName: "gender", width: 170 },
        { field: "parentsNumber", headerName: "Parents Number", width: 170 },
      ];

      const teachersColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 160 },
        { field: "gender", headerName: "Gender", width: 130 },
        { field: "email", headerName: "Email", width: 160 },
        { field: "class", headerName: "Class", width: 130 },
        { field: "phoneNumber", headerName: "Phone Number", width: 160 },
      ];

  return (
    <section className='h-screen max-w-7xl mx-auto p-10'>
        <div className='flex flex-col sm:flex-row gap-6 '>

            <div className='flex flex-col bg-white w-[500px] p-8 justify-center items-center rounded-lg shadow-md'>

                <img src='/folder.png' alt='img'  className='w-[60px]' />
                <h2 className='text-[20px]'>View Students in SS1</h2>

            </div>

            <div className='flex items-center gap-4'>

            <div className='p-8 shadow-md flex items-center flex-col justify-center gap-2 bg-white w-[200px] h-[200px]  rounded-lg'>
                <img src='/paper.png' alt='img' className='w-[60px]'/>
                <p>20</p>
                <p className='text-black  text-sm'>Students</p>
            </div>

            <div className='p-8 flex flex-col items-center justify-center gap-2 bg-white  w-[200px]  h-[200px] shadow-md rounded-lg'>
                 <img src='/statistics.png' alt='img' className='w-[60px]'/>
                <p>20</p>
                <p className='text-black  text-sm'>Teachers</p>
            </div>
            </div>

        </div>


        <div className='flex flex-col bg-white p-10 mt-10 '>
            <h2 className='text-[20px] font-semibold mb-4'>Students in This Class</h2>

            <div className="p-2 w-full rounded-lg ">
                <StudentsTable
                link="students"
                route="students"
                columns={columns}
                row={studentRows}
                showDelete={true}
                />
            </div>

            {/* <div className="p-2 w-full ">
        <NewTeachersTable
          link="students"
          route="students"
          columns={teachersColumns}
          row={teachersRow}
          showDelete={true}
        />
      </div> */}
        </div>
    </section>
  )
}

export default SingleClass