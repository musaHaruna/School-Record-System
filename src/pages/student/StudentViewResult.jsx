import { useState } from "react";
import { SelectFilter } from "../../components/fields/filterFields";
import { StudentDashboardHeader } from "../../components/studentDashboardHeader/studentDashboardHeader";
import styles from "./sampleResultCss.module.css";
import SchoolImg from "./schoolImage.png";
export const StudentViewResult = () => {
  const [session, setSession] = useState("");
  const [classs, setClasss] = useState("");
  const [term, setTerm] = useState("");
  return (
    <div className="px-[2.5vw]">
      <StudentDashboardHeader primaryRoute={"Home"} otherRoutes={["profile"]}>
        Welcome Ezra!
      </StudentDashboardHeader>
      <h3 className="font-rubik text-[2rem] mb-8 mt-8 text-gray-700">
        Result checker{" "}
      </h3>
      <div className="flex gap-4 flex-col md:flex-row mb-8">
        {/* filters container  */}
        <SelectFilter
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
        </SelectFilter>
        <SelectFilter
          primaryLabel={"Class"}
          handleChange={(e) => setClasss(e?.target?.value)}
        >
          {/* class filter  */}
          <option value="">Select class</option>
          <option value="1">Class 1</option>
          <option value="2">Class 2</option>
          <option value="3">Class 3</option>
          <option value="4">Class 4</option>
        </SelectFilter>

        <SelectFilter
          primaryLabel={"Term"}
          handleChange={(e) => setTerm(e?.target?.value)}
        >
          {/* term filter  */}
          <option value="">Select term</option>
          <option value="1">First term</option>
          <option value="2">Second term</option>
          <option value="3">Third term</option>
        </SelectFilter>
      </div>
      {!(session && classs && term) ? null : (
        <>
          <div className={styles.sampleResult}>
            {/* show sample result */}
            <div className={styles.header}>
              <table>
                <thead>
                  <tr>
                    <th rowspan="2">
                      <img src={SchoolImg} alt="school" />
                    </th>
                    <th>
                      <h1>
                        PECULIAR TREASURE NURSERY <br />
                        AND PRIMARY SCHOOL
                      </h1>
                    </th>
                  </tr>
                  <tr>
                    <th className="pt-[2rem]">
                      <h3>
                        Peace House Camp Zion Kpoghirikpo, Afikpo North LGA,
                        Ebonyi State Nigeria.
                      </h3>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>

            <div className={styles.topSummary}>
              <div className="col-start-1 col-end-3">
                <span>Name of pupil:</span>
                <span>Chinonso James </span>
              </div>
              <div>
                <span>Term:</span>
                <span>Second</span>
              </div>
              <div>
                <span>Session:</span>
                <span>2022/2023</span>
              </div>
              <div>
                <span>Sex:</span>
                <span>Male</span>
              </div>
              <div>
                <span>Class:</span>
                <span>Primary 1A</span>
              </div>
              <div>
                <span>Year:</span>
                <span>2024</span>
              </div>
              <div>
                <span>Next Term begins:</span>
                <span>20 May, 2024</span>
              </div>
            </div>
            <div className={styles.sheetContainer}>
              <table border="1" className={styles.topTable}>
                <thead>
                  <tr>
                    <th rowSpan="2" colSpan={2}>
                      Subjects
                    </th>

                    <th className="vertical-text" colSpan="2">
                      1st half term
                    </th>
                    <th className="vertical-text" colSpan="2">
                      2nd half term
                    </th>
                    <th className="vertical-text">Term Exam</th>
                    <th className="vertical-text">Term Total</th>
                    <th className="vertical-text">Class average</th>
                    <th className="vertical-text">Highest in class</th>
                    <th className="vertical-text">Lowest in class</th>
                    <th className="vertical-text">Position in class</th>
                    <th className="vertical-text">Grade</th>
                    <th className="vertical-text">Teachers remark</th>
                  </tr>
                  <tr>
                    <th>Ass 50%</th>
                    <th>Test 20%</th>
                    <th>Ass 50%</th>
                    <th>Test 20%</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={2}>English language</td>
                    <td>5</td>
                    <td>14</td>
                    <td>5</td>
                    <td>20</td>
                    <td>42</td>
                    <td>486</td>
                    <td>84.41</td>
                    <td>100</td>
                    <td>60</td>
                    <td>13</td>
                    <td>A</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>English language</td>
                    <td>5</td>
                    <td>14</td>
                    <td>5</td>
                    <td>20</td>
                    <td>42</td>
                    <td>486</td>
                    <td>84.41</td>
                    <td>100</td>
                    <td>60</td>
                    <td>13</td>
                    <td>A</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>English language</td>
                    <td>5</td>
                    <td>14</td>
                    <td>5</td>
                    <td>20</td>
                    <td>42</td>
                    <td>486</td>
                    <td>84.41</td>
                    <td>100</td>
                    <td>60</td>
                    <td>13</td>
                    <td>A</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>English language</td>
                    <td></td> <td>5</td>
                    <td>14</td>
                    <td>5</td>
                    <td>20</td>
                    <td>42</td>
                    <td>486</td>
                    <td>84.41</td>
                    <td>100</td>
                    <td>60</td>
                    <td>13</td>
                    <td>A</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>English language</td>
                    <td></td> <td>5</td>
                    <td>14</td>
                    <td>5</td>
                    <td>20</td>
                    <td>42</td>
                    <td>486</td>
                    <td>84.41</td>
                    <td>100</td>
                    <td>60</td>
                    <td>13</td>
                    <td>A</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>English language</td>
                    <td></td> <td>5</td>
                    <td>14</td>
                    <td>5</td>
                    <td>20</td>
                    <td>42</td>
                    <td>486</td>
                    <td>84.41</td>
                    <td>100</td>
                    <td>60</td>
                    <td>13</td>
                    <td>A</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>English language</td>
                    <td></td> <td>5</td>
                    <td>14</td>
                    <td>5</td>
                    <td>20</td>
                    <td>42</td>
                    <td>486</td>
                    <td>84.41</td>
                    <td>100</td>
                    <td>60</td>
                    <td>13</td>
                    <td>A</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>English language</td>
                    <td></td> <td>5</td>
                    <td>14</td>
                    <td>5</td>
                    <td>20</td>
                    <td>42</td>
                    <td>486</td>
                    <td>84.41</td>
                    <td>100</td>
                    <td>60</td>
                    <td>13</td>
                    <td>A</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>English language</td>
                    <td></td> <td>5</td>
                    <td>14</td>
                    <td>5</td>
                    <td>20</td>
                    <td>42</td>
                    <td>486</td>
                    <td>84.41</td>
                    <td>100</td>
                    <td>60</td>
                    <td>13</td>
                    <td>A</td>
                    <td>Excellent</td>
                  </tr>
                </tbody>
              </table>
              <table border="1" className={styles.bottomTable}>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <p>
                          <span>Position:</span>
                          <span>6</span>
                        </p>
                        <p>
                          <span>Out of:</span>
                          <span>32</span>
                        </p>
                        <p>
                          <span>Total score:</span>
                          <span>885</span>
                        </p>
                        <p>
                          <span>Maximum score score:</span>
                          <span>1000</span>
                        </p>
                        <p>
                          <span>Average:</span>
                          <span>88.50</span>
                        </p>
                        <p>
                          <span>Class Average:</span>
                          <span>81.75</span>
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Class Teacher's remarks: </span>
                        <span>An excellent result, keep it up</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Class Teacher's Name and signature: </span>
                        <span>Ebere Nnam</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Head teacher's remarks: </span>
                        <span>A brilliant result, keep shinning!</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>Head teacher's name and signature: </span>
                        <span>BLESSING OKONKWO</span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.stamp}>
              <p>Stamp</p>
            </div>

            <div className={styles.finalGrading}>
              <span>
                <b>Final Grading</b>
              </span>
              <span>
                A-Excellent, B-V. Good, C-Good, D-Pass, E-Fair, F-Fail
              </span>
            </div>
            <div className={styles.footer}>
              If you obey me and keep my covenant you will be a peculiar
              treasure to me says the Lord. Exodus 19:5
            </div>
          </div>
          <button className="text-white text-[1.8rem] bg-purple-700 rounded-xl font-rubik text-center py-[1.5rem] px-[3rem] my-[1rem]">
            Print Result
          </button>
        </>
      )}
    </div>
  );
};
