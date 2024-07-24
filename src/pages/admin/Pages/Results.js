import {
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
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
const ScoreInputField = ({ value, name, handleChange }) => {
  return (
    <input
      type="number"
      min={0}
      name={name}
      value={value}
      onChange={handleChange}
      className="w-[4rem] h-[4rem] hover:border-blue-800 focus:border-blue-800 border-1 border-solid border-transparent"
    />
  );
};

const StudentsListTable = ({ students, term, classs, session , role}) => {
  const [studentsWithGrades, setStudentsWithGrades] = useState(
    students.map((s) => ({
      name: "ABDULRAHMAN, TIJJANI STEPHEN",
      grades: SAMPLE_COURSES.map((c) => ({
        course: c,
        _1stTest: 0,
        _2ndTest: 0,
        assignment: 0,
        exams: 0,
        total: 0,
      })),
    }))
  );
  console.log(studentsWithGrades)
  const calculateTotal = (studentIndex, gradeIndex) => {
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
                        Number(g._2ndTest) +
                        Number(g.exams) +
                        Number(g.assignment),
                    }
              ),
            }
      )
    );
  };
  const handleGradeChange = (e, studentIndex, gradeIndex) => {
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

  return (
    <div className="w-full overflow-x-scroll text-[1.4rem] font-inter bg-white py-[4rem] px-[2rem] rounded-3xl ">
      <table className="w-full min-w-[50rem] ">
        <thead>
          <tr className="*:text-center *:border-[1px] bg-primary text-left *:p-4 *:font-medium text-white">
            <th className="sticky left-[-2rem] w-[5rem] bg-inherit z-10">S/N</th>
            <th className="sticky left-[3rem] bg-inherit z-10  border-r-[1px] border-r-primary/[.5]">
              Name
            </th>
            {SAMPLE_COURSES.map((c) => (
              <th colSpan={5} className="">
                {c}
              </th>
            ))}
          </tr>
          <tr className="*:border-[1px]  bg-gray-500 text-left *:p-4 *:font-medium text-white">
            <th className="sticky left-[-2rem] w-[5rem]  bg-inherit z-10"></th>
            <th className="sticky left-[3rem]   bg-inherit z-10  border-r-[1px] border-r-primary/[.5]"></th>
            {SAMPLE_COURSES.map((c) => (
              <>
                <th className="[writing-mode:vertical-rl] scale-[-1]">
                  1st test
                </th>
                <th className="[writing-mode:vertical-rl] scale-[-1]">
                  2nd test
                </th>
                <th className="[writing-mode:vertical-rl] scale-[-1]">
                  Assignment
                </th>
                <th className="[writing-mode:vertical-rl] scale-[-1]">Exams</th>
                <th className="[writing-mode:vertical-rl] scale-[-1]">Total</th>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentsWithGrades.map((student, studentIndex) => (
            <tr
              key={studentIndex}
              className="[&>*]:p-4 even:bg-slate-50 odd:bg-white "
            >
              <td className="sticky left-[-2rem] w-[5rem] bg-inherit z-10">
                {studentIndex + 1}
              </td>
              <td className="min-w-[40rem] sticky left-[3rem] bg-inherit z-10 border-r-[1px] border-r-primary/[.5]">
                <p className="flex flex-row items-center text-[1.4rem] bg-inherit z-10">
                  <span className="uppercase">{student.name}</span>
                  <TableCtaButton
                    title={"view result"}
                    icon={"clarity:eye-line"}
                    href={`view_result?studentId=${"sample-id"}`}
                  />
                </p>
              </td>
              {student.grades.map(
                (
                  { course, assignment, _1stTest, _2ndTest, exams, total },
                  gradeIndex
                ) => (
                  <>
                    <td key={gradeIndex}>
                      <ScoreInputField
                        value={_1stTest}
                        name={"_1stTest"}
                        handleChange={(e) =>
                          handleGradeChange(e, studentIndex, gradeIndex)
                        }
                      />
                    </td>
                    <td>
                      <ScoreInputField
                        value={_2ndTest}
                        name={"_2ndTest"}
                        handleChange={(e) =>
                          handleGradeChange(e, studentIndex, gradeIndex)
                        }
                      />
                    </td>
                    <td>
                      <ScoreInputField
                        value={assignment}
                        name={"assignment"}
                        handleChange={(e) =>
                          handleGradeChange(e, studentIndex, gradeIndex)
                        }
                      />
                    </td>
                    <td>
                      <ScoreInputField
                        value={exams}
                        name={"exams"}
                        handleChange={(e) =>
                          handleGradeChange(e, studentIndex, gradeIndex)
                        }
                      />
                    </td>
                    <td className="bg-slate-300 text-center font-semibold"> {total}</td>
                  </>
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

        <div className="flex gap-4 flex-row [&>div]:w-[400px] [&>div]:max-w-[400px]">
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
          {!session ? null : (
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
          )}
          {!session || !classs ? null : (
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
          )}
        </div>
        {!(term && session && classs) ? null : (
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

const AddResult = () => {
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
            Add result{" "}
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
        <div className="my-16">
          <form onSubmit={$handleSubmit}>
            {grades.map((_, index) => (
              <div
                className="flex flex-row gap-8 items-top text-black mb-8"
                key={index}
              >
                <p className="text-[1.2rem] font-semibold basis-1/12">
                  {index + 1}
                </p>
                <p className="flex flex-col basis-6/12">
                  <label className="font-medium text-[1.4rem] ">Course</label>
                  <select className=" py-4 px-4 border-[1px] border-solid border-slate-400 focus:border-blue-500 hover:border-blue-500 rounded-lg shadow-sm text-[1.4rem]">
                    <option>Select</option>
                    <option value="English">English</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                  </select>
                </p>
                <p className="flex flex-col">
                  <label className="font-medium text-[1.4rem]">
                    First Assessment
                  </label>
                  <input
                    type="number"
                    min={0}
                    name="firstCa"
                    value={grades[index].firstCa}
                    onChange={(e) => _handleGradeChange(e, index)}
                    className=" py-4 px-4 border-[1px] border-solid border-slate-400 focus:border-blue-500 hover:border-blue-500 rounded-lg shadow-sm text-[1.4rem]"
                  />
                </p>
                <p className="flex flex-col">
                  <label className="font-medium text-[1.4rem]">
                    Second Assessment
                  </label>
                  <input
                    type="number"
                    min={0}
                    name="secondCa"
                    value={grades[index].secondCa}
                    onChange={(e) => _handleGradeChange(e, index)}
                    className=" py-4 px-4 border-[1px] border-solid border-slate-400 focus:border-blue-500 hover:border-blue-500 rounded-lg shadow-sm text-[1.4rem]"
                  />
                </p>

                <p className="flex flex-col">
                  <label className="font-medium text-[1.4rem]">
                    Exam score
                  </label>
                  <input
                    type="number"
                    min={0}
                    name="exams"
                    value={grades[index].exams}
                    onChange={(e) => _handleGradeChange(e, index)}
                    className=" py-4 px-4 border-[1px] border-solid border-slate-400 focus:border-blue-500 hover:border-blue-500 rounded-lg shadow-sm text-[1.4rem]"
                  />
                </p>
              </div>
            ))}
            <div className="flex justify-end gap-16">
              <button
                type="button"
                className=" px-12 py-2 font-inter  text-center text-[1.4rem] rounded-xl shadow-2xl cursor-pointer bg-blue-500 text-white hover:text-blue-700 hover:bg-transparent border-[1px] border-solid border-transparent hover:border-blue-500 focus:border-blue-500"
                onClick={() => setGrades((x) => [...x, { ...EMPTY_GRADE }])}
              >
                Add Row
              </button>
              <button
                type="button"
                className=" px-12 py-2 font-inter  text-center text-[1.4rem] rounded-xl shadow-2xl cursor-pointer hover:bg-blue-500 border-[1px] border-solid border-transparent hover:border-blue-500 focus:border-blue-500"
                onClick={() =>
                  setGrades((x) =>
                    x.length > 1 ? x.slice(0, x.length - 1) : x
                  )
                }
              >
                Remove last row
              </button>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className={` flex items-center mt-16 w-full rounded-2xl text-[1.5rem] font-noto py-[.8rem] text-center justify-center text-white  bg-blue-600 disabled:cursor-not-allowed focus:bg-white focus:text-blue-600 border-blue-500 border-solid border-[1px]`}
            >
              {!isSubmitting ? (
                <span>Save</span>
              ) : (
                <>
                  <span>Processing...</span>{" "}
                  <Icon icon="fa:spinner" className="animate-spin" size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Results = () => {
  return (
    <div className="px-[2%] md:px-[5%] py-[4rem]">
      <Routes>
        <Route path="/" element={<ResultList />}>
          <Route path="add_result" element={<AddResult />} />
          <Route path="view_result" element={<AddResult />} />
          {/* TODO IMple,emt view result */}
        </Route>
        <Route path="*" element={<h2> Not fond</h2>} />
      </Routes>
    </div>
  );
};
export default Results