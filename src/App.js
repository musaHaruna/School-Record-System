import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Error, Register, SelectPreference } from './pages'
import {
  Dashboard,
  Classes,
  AcademicSessions,
  Students,
  Teachers,
  Subjects,
} from './pages/admin/Pages'
import {
  TeachersDashboard,
  TeacherProfile,
  TeacherSubjects,
} from './pages/teachers/pages/index'

import TeachersDetails from './pages/admin/Pages/TeachersDetails'
import AddTeachers from './pages/admin/Pages/AddTeachers'
import AdminLayout from './pages/admin/AdminLayout'

import TeachersLayout from './pages/teachers/TeachersLayout'
import Login from './pages/onboarding/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/select-preference' element={<SelectPreference />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='classes' element={<Classes />} />
          <Route path='academic-sessions' element={<AcademicSessions />} />
          <Route path='all-teachers' element={<Teachers />} />
          <Route path='add-teacher' element={<AddTeachers />} />
          <Route path='teachers-detail' element={<TeachersDetails />} />
          <Route path='students' element={<Students />} />
          <Route path='subjects' element={<Subjects />} />
        </Route>
        <Route path='/teacher' element={<TeachersLayout />}>
          <Route index element={<TeachersDashboard />} />
          <Route path='profile' element={<TeacherProfile />} />
          <Route path='subjects' element={<TeacherSubjects />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
