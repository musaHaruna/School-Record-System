import { Button } from '../../../../components/ui/button'
import React, { useEffect, useState } from 'react'
import { classOptions } from '../../data'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { useGetStudentDetailsQuery, useUpdateStudentMutation } from '../../../../app/api/studentsApi'
import { useNavigate, useParams } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { toast } from 'react-toastify'

const SingleStudent = () => {
    const params= useParams()
    const navigate =useNavigate()
    const {data, isLoading, isSuccess}=useGetStudentDetailsQuery(params.id)
    const [updateStudent,{isLoading:isUpdateLoading, isSuccess:isUpdateSuccess, error}]=useUpdateStudentMutation()

    const [studentDetails, setStudentDetails]=useState({
        studentId:"",
        firstName:"",
        middleName:"",
        otherNames:"",
        age:0,
        studentClass:"",
        parentsNumber:"",
        dateOfBirth:"",
        gender:"",
        stateOfOrigin:"",
        lgaOfOrigin:"",
        parentsAddress:"",
        medicalReport: "string",
        birthCertificate: "string",
        picture: "string"
    })

    useEffect(()=>{
        setStudentDetails({
        studentId:"",
        firstName:data?.firstName,
        middleName:data?.middleName,
        otherNames:data?.otherNames,
        age:data?.age,
        studentClass:data?.studentClass,
        parentsNumber:data?.parentsNumber,
        dateOfBirth:data?.dateOfBirth,
        gender:data?.gender,
        stateOfOrigin:data?.stateOfOrigin,
        lgaOfOrigin:data?.lgaOfOrigin,
        parentsAddress:data?.parentsAddress,
        medicalReport:data?.medicalReport,
        birthCertificate:data?.birthCertificate,
        picture:data?.picture
        })
    },[params.id, isLoading, isSuccess])

    
    useEffect(()=>{
        if(error){
            toast.error(error.data.message)
        }

        if(isUpdateSuccess){
            toast.success("Student Updated Successfully")
            navigate("/admin/students")
        }
    }, [error,isUpdateSuccess])

    // console.log(data)

    
    const handleChange =(e)=>{
        const {name, value}= e.target

        setStudentDetails((preValue)=>{
            return {...preValue, [name]:value}
        })
    }


    const handleUpdate =(e)=>{
        e.preventDefault()
        updateStudent(params.id, studentDetails)

    }

    if(isLoading){
        return(
          <div className="flex items-center justify-center h-screen w-full">
            <Loader2 className=" animate-spin w-[60px] h-[60px]" />
        </div>
    )
      }

  return (
    <section className=' max-w-7xl mx-auto'>
       <div className='bg-white  min-h-screen px-4 sm:px-10 py-6 flex flex-col gap-6'>
            {/* heading */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-6'>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACUCAMAAADMOLmaAAAAMFBMVEXk5ueutLeqsbTP09Xn6erh4+THy83Bxsi6v8LV2NqyuLu2u77c3+DY29zLz9GorrLvMsi2AAADuUlEQVR4nO2b2Y7rIAxAWUxYk/z/3w7JbaetOm3AJDbS5Wg029ORCcbBrhCDwWAwGAwGg8FgMBgM/m8AhDHb1/Zbd2SnWU/WbVg7+dSdpLdBSqWU3L/nH8Em0Y0kpCWsm9sLag2L6cIRjJVvejfJMPEvNojpPXxPjkozrzXM8Yvf7uhYlxr0gd++1J5R0R4LZtaFyw/KBHMYJ54oGlcomBUthyKUC24LTa9YvMQ3NLViyS5+ZSZWNJV++aCmFYRYbUi7W2CpXeONmdAwBYSgjHRBhAkTQrkSHn8rRlBKR+WHDKGkS4oG9RTKbTvTCIJGCmZFQ6NYed49G9IUOfXHyQOahDMjd/IexEQgiN/JGxS7GbA7eY8hxYMILSEkSdqpyTBen2/ANxmG67dKfXH9yvUlGCxNgspfb9iUbHIFRmDYfQzxpzKVYf+r3P9OwVeHOwTZpvuM3f+pJ0Rb5UBg2FZ9UVyN9F/BCt/7W0DTm1SgeaXv/m20oUJcSRa55VaE6moJX96QXbcb5G6ORH7oICrCpgrulpgo1eygzhWC0vAZhCDR9eaduT6IRLebd6o7Koq8D17VGuVpMcPRhMOLIEuD2ZQrKsfSpAdRqki9jR8UzhHwLPGNkuNPsY2KbIAPRxNBMTEPLRn7rdBR68Q/nQbJfZxMk7wjVXcAvFV/OK7BUk9ffATE2wSiUk6bfkYkxT5l6ifnYgwxOmcnD/yTh2/APqlrTDKiO72bkHmQ/9j+24NntjDJ68VaF0PYp3SVDGFf6UXPhtkSIGn7EHvNNP8miqNbZp7x7PzIzYuT32Zgf5P2GiZPPfoMIsdO/pUEP1iqHEtDFsqcV1yF3V0yn9AkGRLEPIVqvV9L5y92BJjjp0O40DFcOaANRoeG+9e7pJouqscAdN3r3WfHcE1J5mve7Q45/UMNkNpaom+s8dxbHFiOin0E7rwtAym2b5B3ts9dnCSomxLMN0d7ThhPfgJfFE94EYSK6X+MYvOVWH4ErxTcaOsPNLa7i1hb7kxgvtxPNrUIwFMINtx+AuKuGseKUwRc0wSFQm2XiivWdjAD+ZU36c1Uny64z3fgqW/sJlI/WZ9zqNdY1k7kg76i3DqgqqOBnhNooSblUG+TGxWbhSWEOSkWB5EphBVN/La5+gZKy1mKovADhaUiOC7B0gnPVP+Jy7Moez9lXOTSLmrbwHUjRTHkewxzSiw6nDlDWDTyjh07O4WilyrGjSKLMiIsq2Kk4OCDWbNS8BzuHUM2SgQHg8HgCn4AIlEx+zn49rYAAAAASUVORK5CYII='
                    alt='img' className='w-[80px] h-[80px] rounded-full' />

                    <div className='flex flex-col gap-1'>
                        <h2 className='text-[16px]'>Profile Picture</h2>
                        <p className='text-gray-500 text-sm'>PNG, JPEG, e.t.c</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <Button variant="outline">Upload Image</Button>
                    <Button variant="destructive">Delete Student</Button>
                </div>
            </div>

            {/* body */}

            <form onSubmit={handleUpdate} className='mt-6 flex flex-col gap-4'>
                <h2 className='text-[18px]'>Add Student Information</h2>

             <div className='w-full border border-gray-200 p-4 flex flex-col gap-4 '>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='firstName' className='text-sm'>First Name</label>
                        <input
                            type='text'
                            id='firstName'
                            name='firstName'
                            value={studentDetails.firstName}
                            onChange={handleChange}
                            className='px-4 py-2 outline-none border border-gray-300 rounded-lg' 

                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='middleName' className='text-sm'>Middle Name</label>
                        <input
                            type='text'
                            id='middleName'
                            name='middleName'
                            value={studentDetails.middleName}
                            onChange={handleChange}
                            className='px-4 py-2 outline-none border border-gray-300 rounded-lg' 

                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='otherName' className='text-sm'>Other Name</label>
                        <input
                            type='text'
                            id='otherName'
                            name='otherName'
                            value={studentDetails.otherNames}
                            onChange={handleChange}
                            className='px-4 py-2 outline-none border border-gray-300 rounded-lg' 

                        />
                    </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='age' className='text-sm'>Age</label>
                        <input
                            type='number'
                            id='age'
                            name='age'
                            value={studentDetails.age}
                            onChange={handleChange}
                            className='px-4 py-2 outline-none border border-gray-300 rounded-lg' 

                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='studentClass' className='text-sm'>Class</label>

                        <select
                        value={studentDetails.class}
                        onChange={handleChange}
                         className='text-sm text-gray-600 px-4 py-2 outline-none border border-gray-300 rounded-lg' >
                            {classOptions.map((option)=>(
                                <option key={option.id}>{option.class}</option>
                            ))}
                        </select>
                    
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='parentsNumber' className='text-sm'>Parents Number</label>
                        <input
                            type='text'
                            id='parentsNumber'
                            name='parentsNumber'
                            placeholder='+234'
                            value={studentDetails.parentsNumber}
                            onChange={handleChange}
                            className='px-4 py-2 outline-none border border-gray-300 rounded-lg' 

                        />
                    </div>
                </div>


                    {/* second row */}
                <div className='grid   gap-6 grid-cols-12 '>
                    <div className='flex flex-col gap-2 col-span-6'>
                        <label htmlFor='dateOfBirth' className='text-sm'>Date of Birth</label>
                        <input
                            type='text'
                            id='dateOfBirth'
                            name='dateOfBirth'
                            placeholder='dd/mm/yyy'
                            value={studentDetails.dateOfBirth}
                            onChange={handleChange}
                            className='px-4 py-2 outline-none border border-gray-300 rounded-lg' 

                        />
                    </div>
                    <div className='flex flex-col gap-2 col-span-6'>
                        <label htmlFor='gender' className='text-sm'>Gender</label>
                        <select 
                        value={studentDetails.gender}
                        onChange={handleChange}
                         className='px-4 py-2 outline-none border border-gray-300 rounded-lg' >
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                       
                    </div>

                    <div className='flex flex-col gap-2 col-span-6'>
                        <label htmlFor='stateOfOrigin' className='text-sm'>State of Origin</label>
                        <input
                            type='text'
                            id='stateOfOrigin'
                            name='stateOfOrigin'
                            placeholder='Osun state'
                            value={studentDetails.stateOfOrigin}
                            onChange={handleChange}
                            className='px-4 py-2 outline-none border border-gray-300 rounded-lg' 

                        />
                    </div>

                    <div className='flex flex-col gap-2 col-span-6'>
                        <label htmlFor='lgaOfOrigin' className='text-sm'>Local Government</label>
                        <input
                            type='text'
                            id='lgaOfOrigin'
                            name='lgaOfOrigin'
                            placeholder=''
                            value={studentDetails.lgaOfOrigin}
                            onChange={handleChange}
                            className='px-4 py-2 outline-none border border-gray-300 rounded-lg' 

                        />
                    </div>

                    <div className='flex flex-col gap-2 col-span-12'>
                        <label htmlFor='parentsAddress' className='text-sm'>Parents Address</label>
                        <input
                            type='text'
                            id='parentsAddress'
                            name='parentsAddress'
                            placeholder=''
                            value={studentDetails.parentsAddress}
                            onChange={handleChange}
                            className='px-4 py-2 outline-none border border-gray-300 rounded-lg' 

                        />
                    </div>
                </div>



                </div>

                {/* <div className='flex  gap-6 justify-between items-center mt-6'>
                    <div className=' w-[400px] border border-gray-300 p-6 rounded-lg flex justify-center items-center flex-col gap-2'>
                        <input type='file' 
                        className='hidden'
                         />

                         <AiOutlineCloudUpload size={30} className='cursor-pointer' />
                         <p className='text-sm'>Upload Birth Certificate</p>
                    </div>

                    <div className=' w-[400px] border border-gray-300 p-6 rounded-lg flex justify-center items-center flex-col gap-2'>
                        <input type='file' 
                        className='hidden'
                         />

                         <AiOutlineCloudUpload size={30} className='cursor-pointer' />
                         <p className='text-sm'>Upload Medical Report</p>
                    </div> 
                </div> */}

                <Button className="mt-4 bg-[#4a3aff] hover:bg-[#5144e3]">{isUpdateLoading ? <Loader2 className='animate-spin' /> : "Update Student Details"}</Button>
            </form>
       </div>
    </section>
  )
}

export default SingleStudent