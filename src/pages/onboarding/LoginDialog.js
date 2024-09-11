import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../components/ui/dialog"
import { Link } from 'react-router-dom'

const LoginDialog = () => {
  return (
    <Dialog>
    <DialogTrigger>
    <button className='px-6 py-4 w-full bg-white border border-[#4a3aff] rounded-lg ' to='/login'>
              Returning Admin/staff Login
     </button>
    
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] flex justify-center flex-col">
            <DialogHeader>
              <DialogTitle className="text-center text-[20px]">Login as an Admin or Teacher?</DialogTitle>
              <DialogDescription className="text-center">
              By deleting you are permanently removing
              </DialogDescription>
            </DialogHeader>
               <div className='flex flex-col items-center gap-4'>

                    <Link to={"/login"} className='bg-gray-100 w-full flex justify-center p-2 cursor-pointer hover:bg-[#4a3aff] transition duration-150 hover:text-white rounded-md'>Admin</Link>
                    <Link to="/teacher-login" className='bg-gray-100 w-full flex justify-center p-2 hover:bg-[#4a3aff] transition duration-150 hover:text-white rounded-md'>Staff</Link>
               </div>
            <DialogFooter>
              {/* <Button type="submit">Save changes</Button> */}
            </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default LoginDialog