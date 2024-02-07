import '../../../assets/css/admin/teachersPage.css'
import { useState } from 'react'
import { SlArrowDown } from 'react-icons/sl'
import { CiSearch } from 'react-icons/ci'
import { SlCalender } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'
import Wrapper from '../../../assets/css/teacher/TeacherTable'
import SubjectsTable from '../../../components/teachers/SubjectsTable'

const Subjects = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  function showModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setSelectedFile(file)
  }

  return (
    <Wrapper>
      <article className='admin-dashboard teachers-page'>
        <section className='admin-dashboard-heading'>
          <h1>Subjects</h1>
        </section>
        <section className='teachers-table-filters'>
          <p className='filter'>
            Add classes <SlArrowDown className='filter-icon' />
          </p>
          <p className='filter'>
            Current term <SlArrowDown className='filter-icon' />
          </p>
          <p className='filter'>
            Current Acad. year
            <SlArrowDown className='filter-icon' />
          </p>
          <div className='filter search-box'>
            <CiSearch className='filter-icon' />
            <input
              type='text'
              placeholder='Search for a Teachers by name or email'
            />
          </div>
        </section>

        <SubjectsTable
          onClose={closeModal}
          show={showModal}
          isModalOpen={isModalOpen}
        />
      </article>
    </Wrapper>
  )
}

export default Subjects
