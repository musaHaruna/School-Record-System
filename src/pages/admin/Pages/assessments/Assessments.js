import AssessmentsModal from '../../../../components/Assessments/AssessmentModal'
import { useGetAllAssessmentsQuery } from '../../../../app/api/assessmentsApi'
import AssessmentsTable from '../../../../components/Assessments/AssessmentsTable'
import { Loader2 } from 'lucide-react'
import React from 'react'

const Assessments = () => {

    const {data, isLoading, error}=useGetAllAssessmentsQuery()

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 160 },
        { field: "weight", headerName: "Weight", width: 130 },
      ];
    
      if(isLoading){
        return(
          <div className="flex items-center justify-center h-screen w-full">
            <Loader2 className=" animate-spin w-[60px] h-[60px]" />
        </div>
        )
      }


  return (
    <section className='py-4 px-2 sm:p-8 w-full flex flex-col gap-6 bg-white h-screen'>
        <div className='w-full flex flex-col gap-6 '>
            <div className="flex items-center justify-between">
            <h1 className="font-bold text-[32px]">All Assessments</h1>
             
                <div>
                    <AssessmentsModal />
                </div>
            </div>

            <div className="p-2 w-full">
                <AssessmentsTable 
                    link="assessments"
                    columns={columns}
                    row={data}
                    showDelete={true}
                />
            </div>
        </div>
    
    </section>
  )
}

export default Assessments