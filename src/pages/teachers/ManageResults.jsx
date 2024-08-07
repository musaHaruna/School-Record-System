import React, { useState } from "react";
import { StudentDashboardHeader } from "../../components/studentDashboardHeader/studentDashboardHeader";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export const ManageResults = () => {
  const [classes] = useState([{class :"JSS1", subject:'English' ,} ,{class :"JSS2", subject:'Mathematics' ,},{class :"JSS3", subject:'Literature' ,}]);
  return (
    <div className="px-[2.5vw] py-[2rem]">
      <StudentDashboardHeader primaryRoute={"Home"} otherRoutes={["results"]}>
        Manage results Mr Andrew!
      </StudentDashboardHeader>

      <div className="flex flex-wrap gap-16 ">
        {classes.map((c) => (
          <div
            key={c}
            className="bg-white px-12 py-4 shadow-sm rounded-3xl w-full md:w-max flex items-center gap-4"
          >
            <Icon icon="teenyicons:building-outline" className="text-[4rem] " />
            <div className="flex flex-col text-[1.6rem] font-noto text-center">
              <span className="text-[1.5em] font-medium">{c.class} <span className="text-[1.2em]">({c.subject})</span></span>
              <span>
                No of pupils: <b>23</b>
              </span>
              <Link
                to="upload"
                className="text-[.8em] font-medium text-blue_primary hover:text-black focus:text-black"
              >
                Upload results
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

