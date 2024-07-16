import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./ui/dialog"
import { MdDeleteForever } from 'react-icons/md'
import { Button } from './ui/button'
  

const DeleteModal = () => {
  return (
    <Dialog>
    <DialogTrigger>
    <MdDeleteForever size={24} /></DialogTrigger>
    <DialogContent className="sm:max-w-[425px] flex justify-center flex-col">
            <DialogHeader>
              <DialogTitle className="text-center text-[20px]">Are You sure you want to delete?</DialogTitle>
              <DialogDescription className="text-center">
              By deleting you are permanently removing
              </DialogDescription>
            </DialogHeader>
                <div className="flex items-center flex-col justify-center">
                    <Button className="bg-[#e90404] hover:bg-[rgb(233,4,4)]">Delete Permanently</Button>
                </div>
            <DialogFooter>
              {/* <Button type="submit">Save changes</Button> */}
            </DialogFooter>
    </DialogContent>
  </Dialog>
  
  )
}

export default DeleteModal