import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, SelectPreference, Register } from "./pages";
import {
  Dashboard,
  Classes,
  AcademicSessions,
  Students,
  Teachers,
  Subjects,
  SingleSubjects,
  Results,
} from "./pages/admin/Pages";
import Layout from "./pages/admin/AdminLayout";
import TeachersDetails from "./pages/admin/Pages/TeachersDetails";
import AddTeachers from "./pages/admin/Pages/AddTeachers";
import StudentLayout from "./pages/student/StudentLayout";
import StudentDashboard from "./pages/teachers/TeachersDashboard";
import { StudentProfile } from "./pages/student/StudentProfile";
import TeachersLayout from "./pages/teachers/TeachersLayout";
import TeachersDashboard from "./pages/teachers/TeachersDashboard";
import { ManageResults } from "./pages/teachers/ManageResults";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/select-preference" element={<SelectPreference />} />
        {/* <Route path="/register" element={<Registration />} /> */}
        <Route path="/registeration" element={<Register />} />
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="classes" element={<Classes />} />
          <Route path="academic-sessions" element={<AcademicSessions />} />
          <Route path="all-teachers" element={<Teachers />} />
          <Route path="add-teacher" element={<AddTeachers />} />
          <Route path="teachers-detail" element={<TeachersDetails />} />
          {/* admin manage students route  */}
          <Route path="students" element={<Students />} />
          {/* students route */}
          <Route path="subjects" element={<Subjects />} />
          <Route path="results/*" element={<Results />} />
          <Route path="subjects/:id" element={<SingleSubjects />} />
        </Route>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="profile/*" element={<StudentProfile />} />
        </Route>
        <Route path="/teacher" element={<TeachersLayout />}>
          <Route index element={<TeachersDashboard />} />
          <Route path="results" element={<ManageResults />} />
          <Route path="results/updload" element={<ManageResults />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
