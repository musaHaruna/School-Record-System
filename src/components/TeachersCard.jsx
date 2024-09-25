import React from 'react'
import { Icon } from "@iconify/react";
import { Ellipsis, MoveRight } from "lucide-react";
import { Link } from 'react-router-dom';

const TeachersCard = () => {
  return (
    <Link to="/teacher/results/upload" className="bg-white border border-gray-200 p-4 flex flex-col gap-4 shadow rounded-lg hover:shadow-md cursor-pointer transition duration-200">
    <div className="flex justify-between gap-2">
      <h2 className="text-[18px] font-semibold tracking-wide">English</h2>
      <Ellipsis className="text-[#4a3aff]" />
    </div>
    <div className="flex items-center justify-between">
      <p className="text-sm">Class: <span className="font-semibold text-[#4a3aff]">Jss2</span></p>
      <p  className="text-sm">Students <span className="font-semibold text-[#4a3aff]">32</span></p>
    </div>
</Link>
  )
}

export default TeachersCard