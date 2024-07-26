import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { SAMPLE_COURSES } from "../../../shared/constants";
const TableCtaButton = ({ href, icon, title }) => (
  <Link
    to={href}
    title={title}
    className="w-[3rem] h-[3rem] hover:text-white hover:bg-blue-500 rounded-[50%] inline-flex items-center justify-center active:animate-bounce cursor-pointer "
  >
    <Icon icon={icon} className="w-[1.8rem] h-[1.8rem]" />
  </Link>
);

const Filter = ({ handleChange, children, primaryLabel }) => {
  return (
    <div className="flex flex-col ">
      <span className="font-inter text-[16px] font-medium mb-1">
        {primaryLabel}
      </span>
      <select
        className="font-inter text-[14px] p-2 shadow-sm rounded-sm"
        onChange={handleChange}
      >
        {children}
      </select>
    </div>
  );
};
const ScoreInputField = ({ value, name, handleChange,disabled }) => {
  return (
    <input
      type="number"
      min={0}
      name={name}
      disabled={disabled}
      value={value}
      onChange={handleChange}
      className="w-[4rem] h-[4rem] disabled:cursor-not-allowed hover:border-blue-800 focus:border-blue-800 border-[1px] border-solid border-slate-200"
    />
  );
};
const StudentListTableEmpty = () => (
  <div className="w-full overflow-x-scroll text-[1.4rem] font-inter bg-white py-[4rem] px-[2rem] rounded-3xl ">
    <table className="w-full min-w-[50rem] ">
      <thead>
        <tr className="*:text-center *:border-[1px] bg-blue_primary text-left *:p-4 *:font-medium text-white">
          <th className="sticky left-[-2rem] w-[5rem] bg-inherit z-10">S/N</th>
          <th className="sticky left-[3rem] bg-inherit z-10  border-r-[1px] border-r-primary/[.5]">
            Name
          </th>
          {SAMPLE_COURSES.map((c, i) => (
            <th colSpan={6} className="" key={i}>
              {c}
            </th>
          ))}
        </tr>
        <tr className="*:border-[1px]  bg-gray-500 text-left *:p-4 *:font-medium text-white">
          <th className="sticky left-[-2rem] w-[5rem]  bg-inherit z-10"></th>
          <th className="sticky left-[3rem]   bg-inherit z-10  border-r-[1px] border-r-primary/[.5]"></th>
          {SAMPLE_COURSES.map((c, k) => (
            <React.Fragment key={k}>
              <th className="[writing-mode:vertical-rl] scale-[-1]">
                1st Ass.
              </th>
              <th className="[writing-mode:vertical-rl] scale-[-1]">
                1st test
              </th>
              <th className="[writing-mode:vertical-rl] scale-[-1]">
                2nd Ass.
              </th>
              <th className="[writing-mode:vertical-rl] scale-[-1]">
                2nd test.
              </th>

              <th className="[writing-mode:vertical-rl] scale-[-1]">Exams</th>
              <th className="[writing-mode:vertical-rl] scale-[-1]">Total</th>
            </React.Fragment>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array(SAMPLE_COURSES.length)
          .fill("a")
          .map((student, studentIndex) => (
            <tr
              key={studentIndex}
              className="[&>*]:p-4 even:bg-slate-50 odd:bg-white "
            >
              <td className="sticky left-[-2rem] w-[5rem] bg-inherit z-10">
                {studentIndex + 1}
              </td>
              <td className="min-w-[40rem] sticky left-[3rem] bg-inherit z-10 border-r-[1px] border-r-primary/[.5]">
                <p className="flex flex-row items-center text-[1.4rem] bg-inherit z-10">
                  <span className="uppercase"></span>
                </p>
              </td>
              {Array(SAMPLE_COURSES.length)
                .fill("a")
                .map((_, gradeIndex) => (
                  <React.Fragment key={gradeIndex}>
                    <td key={gradeIndex}>
                      <ScoreInputField
                        value={""}
                        name={""}
                        disabled
                        handleChange={(e) => console.log()}
                      />
                    </td>
                    <td key={gradeIndex}>
                      <ScoreInputField
                        value={""}
                        disabled
                        name={""}
                        handleChange={(e) => console.log()}
                      />
                    </td>
                    <td>
                      <ScoreInputField
                        disabled
                        value={""}
                        name={""}
                        handleChange={(e) => console.log()}
                      />
                    </td>
                    <td>
                      <ScoreInputField
                        value={""}
                        disabled
                        name={""}
                        handleChange={(e) => console.log()}
                      />
                    </td>

                    <td>
                      <ScoreInputField
                        value={""}
                        disabled
                        name={""}
                        handleChange={(e) => console.log()}
                      />
                    </td>
                    <td className="bg-slate-300 text-center font-semibold">
                      {" "}
                    </td>
                  </React.Fragment>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);
const StudentsListTable = ({ students, term, classs, session, role }) => {
  const [studentEditIndex, setStudentEditIndex] = useState();
  const [studentsWithGrades, setStudentsWithGrades] = useState(
    students.map((s) => ({
      name: "ABDULRAHMAN, TIJJANI STEPHEN",
      grades: SAMPLE_COURSES.map((c) => ({
        course: c,
        _1stAssessment: null,
        _1stTest: null,
        _2ndAssessment: null,
        _2ndTest: null,
        exams: null,
        total: null,
      })),
    }))
  );
  const calculateTotal = (studentIndex, gradeIndex) => {
    if (studentEditIndex !== studentIndex) return null;

    setStudentsWithGrades((prevS) =>
      prevS.map((s, i) =>
        i !== studentIndex
          ? s
          : {
              ...s,
              grades: s.grades.map((g, a) =>
                a !== gradeIndex
                  ? g
                  : {
                      ...g,
                      total:
                        Number(g._1stTest) +
                        Number(g._1stAssessment) +
                        Number(g._2ndTest) +
                        Number(g._2ndAssessment) +
                        Number(g.exams),
                    }
              ),
            }
      )
    );
  };
  const handleGradeChange = (e, studentIndex, gradeIndex) => {
    if (studentEditIndex !== studentIndex) return null;
    else
      setStudentsWithGrades((prevS) =>
        prevS.map((s, i) =>
          i !== studentIndex
            ? s
            : {
                ...s,
                grades: s.grades.map((g, a) =>
                  a !== gradeIndex
                    ? g
                    : {
                        ...g,
                        [e?.target?.name]: e?.target?.value
                          ? Number(e?.target?.value)
                          : 0,
                      }
                ),
              }
        )
      );

    calculateTotal(studentIndex, gradeIndex);
  };

  // useEffect(() => {
  //   setTotal();
  // }, [grades]);
  console.log(studentEditIndex);
  return (
    <div className="w-full overflow-x-scroll text-[1.4rem] font-inter bg-white py-[4rem] px-[2rem] rounded-3xl ">
      <table className="w-full min-w-[50rem] ">
        <thead>
          <tr className="*:text-center *:border-[1px] bg-blue_primary text-left *:p-4 *:font-medium text-white">
            <th className="sticky left-[-2rem] w-[5rem] bg-inherit z-10">
              S/N
            </th>
            <th className="sticky left-[3rem] bg-inherit z-10  border-r-[1px] border-r-primary/[.5]">
              Name
            </th>
            {SAMPLE_COURSES.map((c, i) => (
              <th colSpan={6} className="" key={i}>
                {c}
              </th>
            ))}
          </tr>
          <tr className="*:border-[1px]  bg-gray-500 text-left *:p-4 *:font-medium text-white">
            <th className="sticky left-[-2rem] w-[5rem]  bg-inherit z-10"></th>
            <th className="sticky left-[3rem]   bg-inherit z-10  border-r-[1px] border-r-primary/[.5]"></th>
            {SAMPLE_COURSES.map((c, k) => (
              <React.Fragment key={k}>
                <th className="[writing-mode:vertical-rl] scale-[-1]">
                  1st Ass.
                </th>
                <th className="[writing-mode:vertical-rl] scale-[-1]">
                  1st test
                </th>
                <th className="[writing-mode:vertical-rl] scale-[-1]">
                  2nd Ass.
                </th>
                <th className="[writing-mode:vertical-rl] scale-[-1]">
                  2nd test.
                </th>

                <th className="[writing-mode:vertical-rl] scale-[-1]">Exams</th>
                <th className="[writing-mode:vertical-rl] scale-[-1]">Total</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentsWithGrades.map((student, studentIndex) => (
            <tr
              key={studentIndex}
              className={`[&>*]:p-4 even:bg-slate-50 ${
                studentIndex === studentEditIndex
                  ? "border-b-blue-500/50 border-l-blue-500/50 "
                  : "border-transparent"
              }  border-b-[1px] border-l-[1px]  border-solid odd:bg-white `}
            >
              <td className="sticky left-[-2rem] w-[5rem] bg-inherit z-10">
                {studentIndex + 1}
              </td>
              <td className="min-w-[40rem] sticky left-[3rem] bg-inherit z-10 border-r-[1px] border-r-primary/[.5]">
                <p className="w-full flex flex-row items-center justify-between text-[1.4rem] bg-inherit z-10">
                  <span className="uppercase">{student.name}</span>
                  <button onClick={() => setStudentEditIndex(studentIndex)}>
                    <Icon icon="iconoir:page-edit" fontSize={17} />
                  </button>
                </p>
              </td>
              {student.grades.map(
                (
                  {
                    course,
                    _1stAssessment,
                    _1stTest,
                    _2ndAssessment,
                    _2ndTest,
                    exams,
                    total,
                  },
                  gradeIndex
                ) => (
                  <React.Fragment key={gradeIndex}>
                    <td key={gradeIndex}>
                      <ScoreInputField
                        value={_1stAssessment}
                        name={"_1stAssessment"}
                        disabled ={(studentEditIndex !== studentIndex) }

                        handleChange={(e) =>
                          handleGradeChange(e, studentIndex, gradeIndex)
                        }
                      />
                    </td>
                    <td key={gradeIndex}>
                      <ScoreInputField
                        value={_1stTest}
                        name={"_1stTest"}
                        disabled ={(studentEditIndex !== studentIndex) }
                        handleChange={(e) =>
                          handleGradeChange(e, studentIndex, gradeIndex)
                        }
                      />
                    </td>
                    <td>
                      <ScoreInputField
                        value={_2ndAssessment}
                        name={"_2ndAssessment"}
                        disabled ={(studentEditIndex !== studentIndex) }

                        handleChange={(e) =>
                          handleGradeChange(e, studentIndex, gradeIndex)
                        }
                      />
                    </td>
                    <td>
                      <ScoreInputField
                        value={_2ndTest}
                        name={"_2ndTest"}
                        disabled ={(studentEditIndex !== studentIndex) }

                        handleChange={(e) =>
                          handleGradeChange(e, studentIndex, gradeIndex)
                        }
                      />
                    </td>

                    <td>
                      <ScoreInputField
                        value={exams}
                        name={"exams"}
                        disabled ={(studentEditIndex !== studentIndex) }

                        handleChange={(e) =>
                          handleGradeChange(e, studentIndex, gradeIndex)
                        }
                      />
                    </td>
                    <td className="bg-slate-300 text-center font-semibold">
                      {" "}
                      {total}
                    </td>
                  </React.Fragment>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ResultList = () => {
  const [session, setSession] = useState("");
  const [classs, setClasss] = useState("");
  const [term, setTerm] = useState("");
  return (
    <>
      <Outlet />
      <div>
        <h1 className="font-thin font-rubik text-[2.4rem] mb-4">Result List</h1>

        <div className="flex gap-4 flex-row [&>div]:w-[400px] [&>div]:max-w-[400px] mb-8">
          {/* filters container  */}
          <Filter
            primaryLabel={"Session"}
            handleChange={(e) => setSession(e?.target?.value)}
          >
            {/* session filter */}
            <option value="">Select session</option>
            <option value="2019/2020">2019/2020</option>
            <option value="2020/2021">2020/2021</option>
            <option value="2021/2022">2021/2022</option>
            <option value="2022/2023">2022/2023</option>
            <option value="2023/2024">2023/2024</option>
          </Filter>
          <Filter
            primaryLabel={"Class"}
            handleChange={(e) => setClasss(e?.target?.value)}
          >
            {/* class filter  */}
            <option value="">Select class</option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="3">Class 3</option>
            <option value="4">Class 4</option>
          </Filter>

          <Filter
            primaryLabel={"Term"}
            handleChange={(e) => setTerm(e?.target?.value)}
          >
            {/* term filter  */}
            <option value="">Select term</option>
            <option value="1">First term</option>
            <option value="2">Second term</option>
            <option value="3">Third term</option>
          </Filter>
        </div>
        {!(term && session && classs) ? (
          <StudentListTableEmpty />
        ) : (
          <div className="mt-8">
            {/* student table container  */}
            <StudentsListTable
              {...{ term, classs, session }}
              role="admin"
              students={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
            />
          </div>
        )}
      </div>
    </>
  );
};

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
            }
      )
    );
  const $handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (errMessage) setErrMessage("");
      setSubmitting(true);
      setTimeout(() => {
        // jsut simulate api
        setSubmitting(false);
        console.log(grades, "SUBMITTED");
      }, 3000);
    } catch (err) {
      setErrMessage("an error occurred");
    } finally {
    }
  };
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
