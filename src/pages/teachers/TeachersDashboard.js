import { Icon } from "@iconify/react";

const samplePerformanceSummary = [
  {
    title: "Punctuality",
    score: "90%",
    remarks: "Amazing",
  },
  {
    title: "Teaching skills",
    score: "70%",
    remarks: "V. Good",
  },
  {
    title: "Comprehension",
    score: "50%",
    remarks: "Good",
  },
];
const TeachersDashboard = () => {
  return (
    <section className="px-[2.5vw] font-noto">
      <div className=" flex flex-row justify-between items-end  py-[2.5vw]">
        {/* header */}
        <h1 className="text-[2.8rem]  font-500">Welcome Mr Andrew!</h1>
        <p className="font-medium text-[1.4rem]">
          <span>Home</span>/{" "}
          <span className="text-gray-900 font-medium">Teacher</span>
        </p>
      </div>
      <h2 className="text-[1.8rem] font-medium font-rubik mb-4 text-gray-900">
        Performance summary
      </h2>
      <div className="flex flex-wrap gap-16">
        {samplePerformanceSummary.map((s, i) => (
          <div className="text-black flex  gap-4 items-center bg-white rounded-3xl shadow-sm px-12 py-8 w-full md:w-fit">
            <div className="flex flex-row-reverse items-center">
              <span className="font-semibold text-[4.8rem] text-gray-900">
                {s.score}
              </span>
              {/* simulate downtrend */}
              <Icon
                className={
                  i === 2 ? "rotate-90 text-red-500" : "text-green-600"
                }
                icon="material-symbols-light:chart-data-rounded"
                fontSize={48}
              />
            </div>
            <div>
              <p className="font-medium text-[1.4rem]">
                <span className="text-gray-900">Type:</span> {s.title}
              </p>
              <p className="font-medium text-[1.4rem]">
                <span className="text-gray-900">Remarks:</span> {s.remarks}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeachersDashboard;
