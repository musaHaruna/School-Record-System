import { Button } from '@mui/material'
import { ArrowRightSquare, Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import AddSession from './AddSession'
import { useGetAllSessionsQuery } from '../../../../app/api/sessionsApi'
// import { useGetAllSessionsQuery } from '../../../../app/api/classApi'

const AccademicSessions = () => {

    const {data, isLoading} =useGetAllSessionsQuery()



    const newData =0
    if(isLoading){
        return(
          <div className="flex items-center justify-center h-screen w-full">
            <Loader2 className=" animate-spin w-[60px] h-[60px]" />
        </div>
        )
      }

  return (
    <section className='bg-white w-full h-auto md:h-screen'>
        <div className='max-w-7xl mx-auto p-4 flex flex-col gap-6'>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                <img src="/newFolder.png" alt="img" className="w-[90px]" />
                <div className="flex flex-col">
                    <h1 className="text-[32px]">All Academic Sessions,</h1>
                    <p className="text-sm">Total Sessions: 10</p>
                </div>
                </div>
            
                <AddSession />
            </div>

            <div className='mt-4 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
               { data.map((session)=>{
                 <div className='bg-white shadow-md p-4'>
                    <h2 className='text-[20px]'>{session.name}</h2>
                    <div className='flex justify-between'>
                    <div className='flex flex-col gap-2 mt-2'>
                        <p className='text-sm'>Start Date: {session.startDate}</p>
                        <p className='text-sm'>End Date: {session.endDate}</p>
                    </div>
                    <button className='p-2 bg-gray-100 rounded-md hover:bg-gray-300 transition duration-300' >View</button>
                    </div>                    
                </div>
                })
                
                }
            </div>

        </div>
    </section>
  )
}

export default AccademicSessions


