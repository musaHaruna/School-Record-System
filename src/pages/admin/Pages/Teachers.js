import '../../../assets/css/admin/teachersPage.css'
import { useState } from 'react'
import TeachersTable from '../../../components/admin/teachers/TeachersTable'

const Teachers = () => {
  const [selectedFile, setSelectedFile] = useState(null)

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

      <button>Add Teachers</button>
      <div>
        <input
          type='file'
          id='customFileInput'
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <label htmlFor='customFileInput' className='custom-file-label'>
          {selectedFile ? selectedFile.name : 'Choose a file'}
        </label>
        {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      </div>
      <TeachersTable />
    </article>
  )
}

export default Teachers
