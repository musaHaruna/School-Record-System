import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../../../components/ui/dialog"
  import { Button } from '../../../../components/ui/button'
import { Loader2, Plus, PlusCircle } from "lucide-react";
import { useCreateSubjectMutation } from '../../../../app/api/allSubjectApi';
import { useGetAllClassesQuery } from '../../../../app/api/classApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AddSubject = () => {
  const navigate=useNavigate()
  const {data, isLoading:isClassLoading}=useGetAllClassesQuery()

  const [openDialog, setOpenDialog]=useState(false)
  const [createSubject,{isLoading, isSuccess, error}]=useCreateSubjectMutation()
  const [subjectDetails, setSubjectDetails]=useState({
    subjectName:"",
    description:"",
    classTitle:"",
    categoryId:123,
    addedBy:""
  })

  useEffect(()=>{
    if(error){
        toast.error(error.data.message)
    }

    if(isSuccess){
        toast.success("Subject Created Successfully")
        setOpenDialog(false)
        setSubjectDetails({
          subjectName:"",
          description:"",
          classTitle:"",
          categoryId:0,
          addedBy:""
        })
    }
}, [error,isSuccess])


  const handleChange =(e)=>{
    const {name, value}= e.target

    setSubjectDetails((preValue)=>{
      return {...preValue, [name]:value}
    })
  }

  console.log(subjectDetails)

  const handleSubmit =(e)=>{
    e.preventDefault()
    createSubject(subjectDetails)

  }

  return (
    <Dialog onOpenChange={()=>setOpenDialog(false)}>
    <DialogTrigger>
       <Button onClick={()=>setOpenDialog(true)}  className="bg-[#4a3aff] text-white hover:bg-[#5446f2] flex items-center gap-2 ">
      <Plus />
       Add New Subject
       </Button>


    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="font-semibold">Add New Subject</DialogTitle>

      </DialogHeader>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-3'>

                <div className='flex flex-col gap-2'>
                    <label className='text-gray-500 text-sm'>Subject Name</label>
                    <input 
                    type='text'
                    name='subjectName'
                    placeholder='Accounting'
                    value={subjectDetails.subjectName}
                    onChange={handleChange}
                    className='py-3 bg-[#F9F9F9] outline-none px-3 border-none text-sm'

                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-gray-500 text-sm'>Description</label>
                    <textarea 
                    type='text'
                    name="description"
                    value={subjectDetails.description}
                    onChange={handleChange}
                    placeholder='Description'
                    className='py-3 bg-[#F9F9F9] outline-none px-3 border-none text-sm'

                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-gray-500 text-sm'>Class Name</label>
                    <select 
                        name='classTitle'
                          value={subjectDetails.classTitle}
                          onChange={handleChange}
                        className='text-sm text-gray-600 px-4 py-2 outline-none border border-gray-300 rounded-lg' >
                           { isClassLoading ? <Loader2 className='animate-spin' /> :
                            <>

                             <option></option>
                            {data.map((classes)=>(
                                <option value={classes.name} key={classes.id}>{classes.name}</option>
                            ))}
                            </>
                            }
                        </select>
               
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-gray-500 text-sm'>Name Of Creator</label>
                    <input 
                    type='text'
                    name='addedBy'
                    value={subjectDetails.addedBy}
                    onChange={handleChange}
                    placeholder='Mr John'
                    className='py-3 bg-[#F9F9F9] outline-none px-3 border-none text-sm '

                    />
                </div>

                <Button className="bg-[#4a3aff] text-white hover:bg-[#5446f2]">{isLoading ? <Loader2 /> : "Create Subject"}</Button>

            </form>
    </DialogContent>
  </Dialog>
  )
}

export default AddSubject