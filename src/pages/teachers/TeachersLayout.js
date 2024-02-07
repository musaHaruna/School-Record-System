import { Navbar } from '../../components/admin'
import { Outlet } from 'react-router-dom'
import '../../assets/css/admin/adminLayout.css'
import TeachersMenu from '../../components/teachers/TeachersMenu'
const TeachersLayout = () => {
  return (
    <div className='main-layout'>
      <div className='container'>
        <div className='menuContainer'>
          <TeachersMenu />
        </div>
      </div>
      <div>
        <Navbar />
        <div className='contentContainer'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default TeachersLayout
