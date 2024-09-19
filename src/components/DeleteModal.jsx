import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { MdDeleteForever } from "react-icons/md";
import { Button } from "./ui/button";
import { useDeleteClassesMutation } from "../app/api/classApi";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import { useDeleteSubjectMutation } from "../app/api/allSubjectApi";

const DeleteModal = ({ id, type }) => {
  const [deleteClasses, { isLoading, error, isSuccess }] =
    useDeleteClassesMutation();
  const [
    deleteSubject,
    {
      isLoading: isSubjectLoading,
      error: subjectError,
      isSuccess: isSubjectSuccess,
    },
  ] = useDeleteSubjectMutation();
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (error) {
      toast.error(error.data.message);
      // console.log(error.data)
    }
    if (subjectError) {
      toast.error(subjectError.data.message);
      // console.log(error.data)
    }

    if (isSuccess) {
      toast.success("Class Deleted Successfully");
      setOpenDialog(false);
    }
    if (isSubjectSuccess) {
      toast.success("Subject Deleted Successfully");
      setOpenDialog(false);
    }
  }, [error, isSuccess, isSubjectSuccess, subjectError]);

  const handleDeleteClass = () => {
    deleteClasses(id);
  };

  const handleDeleteSubject = () => {
    deleteSubject(id);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <MdDeleteForever size={24} className="text-red-600" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex justify-center flex-col">
        <DialogHeader>
          <DialogTitle className="text-center text-[20px]">
            Are You sure you want to delete?
          </DialogTitle>
          <DialogDescription className="text-center">
            By deleting you are permanently removing
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center flex-col justify-center">
          {type === "class" ? (
            <Button
              onClick={handleDeleteClass}
              className="bg-[#e90404] hover:bg-[rgb(233,4,4)]"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Delete Class"
              )}
            </Button>
          ) : type === "students" ? (
            <Button className="bg-[#e90404] hover:bg-[rgb(233,4,4)]">
              Delete Student
            </Button>
          ) : type === "subjects" ? (
            <Button
              onClick={handleDeleteSubject}
              className="bg-[#e90404] hover:bg-[rgb(233,4,4)]"
            >
              {isSubjectLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Delete Subject"
              )}
            </Button>
          ) : (
            ""
          )}
        </div>
        <DialogFooter>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
