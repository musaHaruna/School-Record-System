import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { ResultList } from "./ResultList";

const ViewResult = () => {
  const navigate = useNavigate();
  // minimul of five courses to add
  const EMPTY_GRADE = { course: "", firstCa: "", secondCa: "", exams: "" };
  const [grades, setGrades] = useState([{ ...EMPTY_GRADE }]);
  const [isSubmitting, setSubmitting] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const _handleGradeChange = (e, gradeIndex) =>
    setGrades((prevGrades) =>
      prevGrades.map((pGrade, a) =>
        a !== gradeIndex
          ? pGrade
          : {
              ...pGrade,
              [e?.target?.name]:
                e?.target?.name === "course"
                  ? e?.target?.value
                  : Number(e?.target?.value),
            },
      ),
    );

  return (
    <div className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,.5)] fixed top-0 left-0 overflow-y-scroll py-[20rem]">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-[95%] md:max-w-[750px] lg:max-w-[1000px] mx-auto py-16 px-[2.5%]">
        <div className="flex justify-between">
          {/* header  */}
          <h1 className="font-inter text-[1.8rem] text-blue-600 font-medium">
            Result{" "}
          </h1>

          <button
            title={"close"}
            onClick={() => navigate("/admin/results")}
            // back to home page
            className="w-[3rem] h-[3rem] text-red-500 hover:text-white hover:bg-red-500 rounded-[50%] inline-flex items-center justify-center active:animate-bounce cursor-pointer "
          >
            <Icon icon={"fa:close"} className="w-[1.8rem] h-[1.8rem]" />
          </button>
        </div>
        <div>
          <div>
            <h1>Peculiar treasure nursery and primary school</h1>
            <h2>
              peace house camp zion Kpoghirikpo, Afikpo North LGA, Ebonyi State,
              Nigeria.{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const Results = () => {
  return (
    <div className="px-[2%] md:px-[5%] py-[4rem]">
      <Routes>
        <Route path="/" element={<ResultList />} />
        <Route path="/view" element={<ViewResult />} />
        <Route path="*" element={<h2> Not fond</h2>} />
      </Routes>
    </div>
  );
};
export default Results;
