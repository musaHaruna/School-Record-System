import React from "react";
import { ScoreInputField } from "../../../../components/fields/scoreInput";
import { SAMPLE_COURSES } from "../../../../shared/constants";

export const StudentListTableEmpty = () => (
  <div className="w-full overflow-x-scroll text-[1.4rem] font-inter bg-white py-[4rem] px-[2rem] rounded-3xl ">
    <table className="w-full min-w-[50rem] ">
      <thead>
        <tr className="*:text-center *:border-[1px] bg-blue_primary text-left *:p-4 *:font-medium text-white">
          <th className="sticky left-[-2rem] w-[5rem] bg-inherit z-10">S/N</th>
          <th className="sticky left-[3rem] bg-inherit z-10  border-r-[1px] border-r-primary/[.5]">
            Name
          </th>
          {SAMPLE_COURSES.map((c, i) => (
            <th colSpan={6} className="" key={`course-${i}`}>
              {c}
            </th>
          ))}
        </tr>
        <tr className="*:border-[1px]  bg-gray-500 text-left *:p-4 *:font-medium text-white">
          <th className="sticky left-[-2rem] w-[5rem]  bg-inherit z-10"></th>
          <th className="sticky left-[3rem]   bg-inherit z-10  border-r-[1px] border-r-primary/[.5]"></th>
          {SAMPLE_COURSES.map((c, k) => (
            <React.Fragment key={`term-${k}`}>
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
              key={`student-${studentIndex}`}
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
                  <React.Fragment key={`grade-${studentIndex}-${gradeIndex}`}>
                    <td key={`first-ass-${studentIndex}-${gradeIndex}`}>
                      <ScoreInputField
                        value={""}
                        name={""}
                        disabled
                        handleChange={(e) => console.log()}
                      />
                    </td>
                    <td key={`first-test-${studentIndex}-${gradeIndex}`}>
                      <ScoreInputField
                        value={""}
                        disabled
                        name={""}
                        handleChange={(e) => console.log()}
                      />
                    </td>
                    <td key={`second-ass-${studentIndex}-${gradeIndex}`}>
                      <ScoreInputField
                        disabled
                        value={""}
                        name={""}
                        handleChange={(e) => console.log()}
                      />
                    </td>
                    <td key={`second-test-${studentIndex}-${gradeIndex}`}>
                      <ScoreInputField
                        value={""}
                        disabled
                        name={""}
                        handleChange={(e) => console.log()}
                      />
                    </td>
                    <td key={`exams-${studentIndex}-${gradeIndex}`}>
                      <ScoreInputField
                        value={""}
                        disabled
                        name={""}
                        handleChange={(e) => console.log()}
                      />
                    </td>
                    <td
                      className="bg-slate-300 text-center font-semibold"
                      key={`total-${studentIndex}-${gradeIndex}`}
                    >
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
