import { useState, Fragment } from "react";
import { StudentDashboardHeader } from "../../components/studentDashboardHeader/studentDashboardHeader";
import { Icon } from "@iconify/react";
import { SAMPLE_COURSES } from "../../shared/constants";
import { ScoreInputField } from "../../components/fields/scoreInput";
const SELECTED_COURSES = SAMPLE_COURSES.slice(0, 1); //sample selected one course

const StudentsListTable = ({ students }) => {
  const [studentEditIndex, setStudentEditIndex] = useState();
  const [studentsWithGrades, setStudentsWithGrades] = useState(
    students.map((s) => ({
      name: "ABDULRAHMAN, TIJJANI STEPHEN",
      grades: SELECTED_COURSES.map((c) => ({
        course: c,
        _1stAssessment: null,
        _1stTest: null,
        _2ndAssessment: null,
        _2ndTest: null,
        exams: null,
        total: null,
      })),
    })),
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
                    },
              ),
            },
      ),
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
                      },
                ),
              },
        ),
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
          <tr className="*:text-center *:border-[1px] bg-blue_primary text-left *:p-4 *:font-medium text-white">
            <th className="sticky left-[-2rem] w-[5rem] bg-inherit z-10">
              S/N
            </th>
            <th className="sticky left-[3rem] bg-inherit z-10  border-r-[1px] border-r-primary/[.5]">
              Name
            </th>
            {SELECTED_COURSES.map((c, i) => (
              <th colSpan={6} className="" key={i}>
                {c}
              </th>
            ))}
          </tr>
          <tr className="*:border-[1px]  bg-gray-500 text-left *:p-4 *:font-medium text-white">
            <th className="sticky left-[-2rem] w-[5rem]  bg-inherit z-10"></th>
            <th className="sticky left-[3rem]   bg-inherit z-10  border-r-[1px] border-r-primary/[.5]"></th>
            {SELECTED_COURSES.map((c, k) => (
              <Fragment key={k}>
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
              </Fragment>
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
                  gradeIndex,
                ) => (
                  <Fragment key={gradeIndex}>
                    <td key={gradeIndex}>
                      <ScoreInputField
                        value={_1stAssessment}
                        name={"_1stAssessment"}
                        disabled={studentEditIndex !== studentIndex}
                        handleChange={(e) =>
                          handleGradeChange(e, studentIndex, gradeIndex)
                        }
                      />
                    </td>
                    <td key={gradeIndex}>
                      <ScoreInputField
                        value={_1stTest}
                        name={"_1stTest"}
                        disabled={studentEditIndex !== studentIndex}
                        handleChange={(e) =>
                          handleGradeChange(e, studentIndex, gradeIndex)
                        }
                      />
                    </td>
                    <td>
                      <ScoreInputField
                        value={_2ndAssessment}
                        name={"_2ndAssessment"}
                        disabled={studentEditIndex !== studentIndex}
                        handleChange={(e) =>
                          handleGradeChange(e, studentIndex, gradeIndex)
                        }
                      />
                    </td>
                    <td>
                      <ScoreInputField
                        value={_2ndTest}
                        name={"_2ndTest"}
                        disabled={studentEditIndex !== studentIndex}
                        handleChange={(e) =>
                          handleGradeChange(e, studentIndex, gradeIndex)
                        }
                      />
                    </td>

                    <td>
                      <ScoreInputField
                        value={exams}
                        name={"exams"}
                        disabled={studentEditIndex !== studentIndex}
                        handleChange={(e) =>
                          handleGradeChange(e, studentIndex, gradeIndex)
                        }
                      />
                    </td>
                    <td className="bg-slate-300 text-center font-semibold">
                      {" "}
                      {total}
                    </td>
                  </Fragment>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export const UploadResults = () => {
  return (
    <div className="px-[2.5vw] py-[2rem]">
      <StudentDashboardHeader
        primaryRoute={"Home"}
        otherRoutes={["results", "upload"]}
      >
        Upload results for JSS1!
      </StudentDashboardHeader>

      <StudentsListTable students={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]} />
    </div>
  );
};
