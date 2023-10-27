import '../../../assets/css/admin/teachersPage.css'
import { useState } from 'react'
import TeachersTable from '../../../components/admin/teachers/TeachersTable'
import { AiOutlineCloudDownload, AiOutlinePlusCircle } from 'react-icons/ai'
import { SlArrowDown } from 'react-icons/sl'
import { CiSearch } from 'react-icons/ci'
import { SlCalender } from 'react-icons/sl'

const Teachers = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
    <article className='admin-dashboard teachers-page'>
      <section className='admin-dashboard-heading'>
        <h1>Teachers</h1>
        <p>
          <span className='gray'>Home</span>/ <span>Teachers</span>
        </p>
      </section>

      <div className='teachers-select-file'>
        <div className='custom-file-label'>
          <input
            type='file'
            id='customFileInput'
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

          <AiOutlineCloudDownload className='import-icon' />
          <label htmlFor='customFileInput'>
            {selectedFile ? selectedFile.name : 'Import CVS'}
          </label>
        </div>
        <button onClick={showModal} className='import-btn'>
          <AiOutlinePlusCircle className='add-icon' />
          Add Teachers
        </button>
      </div>

      <section className='teachers-table-filters'>
        <p className='filter'>
          Add filter <SlArrowDown className='filter-icon' />
        </p>
        <div className='filter search-box'>
          <CiSearch className='filter-icon' />
          <input
            type='text'
            placeholder='Search for a Teachers by name or email'
          />
        </div>
        <div className='filter calender'>
          <SlCalender className='filter-icon' />
          <p>Selected dates</p>
          <SlArrowDown className='filter-icon' />
        </div>
      </section>

      <TeachersTable
        onClose={closeModal}
        show={showModal}
        isModalOpen={isModalOpen}
      />
    </article>
  )
}

export default Teachers
