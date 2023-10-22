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
import Layout from './pages/admin/AdminLayout'
import TeachersDetails from './pages/admin/Pages/TeachersDetails'
import AddTeachers from './pages/admin/Pages/AddTeachers'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/select-preference' element={<SelectPreference />} />
        <Route path='/register' element={<Register />} />

        <Route path='/admin' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='classes' element={<Classes />} />
          <Route path='academic-sessions' element={<AcademicSessions />} />
          <Route path='all-teachers' element={<Teachers />} />
          <Route path='add-teacher' element={<AddTeachers />} />
          <Route path='teachers-detail' element={<TeachersDetails />} />
          <Route path='students' element={<Students />} />
          <Route path='subjects' element={<Subjects />} />
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
