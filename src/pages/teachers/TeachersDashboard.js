import TeachersCard from "../../components/TeachersCard";


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
    <section className="w-full bg-white h-auto min-h-screen">
      <div className="max-w-7xl mx-auto p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[20px]">Welcome Mr Ayuba</h2>

          <p className="text-sm">Home/<span className="font-bold text-black">Teacher</span></p>
        </div>      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-6">

        <div className="rounded-lg bg-white border border-gray-100 shadow flex items-center justify-center   ">
          <img src="/teacherWireframe.png" alt="img" className="w-[100px]" />

          <div className="p-4">
          
              <h2 className="text-[36px] font-bold text-center text-[#4a3aff]">1500</h2>
              <p className="text-sm text-center ">Total Students</p>
            </div>
        </div>


        {/* <div className=" rounded-xl bg-white border border-gray-100 shadow h-[120px] flex items-center">
            <div className="bg-[#3320b0] p-4 rounded-lg w-[250px] flex justify-center items-center  h-full">
              <h2 className="text-white text-center font-semibold tracking-wide">Welcome to Peculiar Tressure Academy</h2>
            </div>

            <div className="p-4">
              <h2 className="text-[36px] font-bold text-center">1500</h2>
              <p className="text-sm text-center ">Total Students</p>
            </div>
        </div> */}

        <div className="bg-white shadow border border-gray-100 p-4 flex flex-col sm:flex-row items-center justify-center gap-1 rounded-xl">
          <img src="/paper.png" alt="img" className="w-[100px]" />

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[18px] sm:text-[20px] font-bold">My Subjects: 7 subjects</h2>
            <p className="text-sm">Assigned classes: 3 classes</p>
          </div>
        </div>
      </div>


        <h2 className="font-semibold text-[24px] mt-4">My Subjects and classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2 gap-6">

          <TeachersCard />
          <TeachersCard />
          <TeachersCard />
          <TeachersCard />
          <TeachersCard />

        </div>
      </div>
    </section>
  );
};

export default TeachersDashboard;
