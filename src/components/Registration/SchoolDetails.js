import { useState } from 'react'

const SchoolDetails = ({ nextStep, prevStep }) => {
  const [schoolId, setSchoolId] = useState('')
  const [selectedClass, setSelectedClass] = useState('')
  const [teacherName, setTeacherName] = useState('')
  const classOptions = [
    'Nursery 1',
    'Nursery 2',
    'Nursery 3',
    'Primary 1',
    'Primary 2',
    'Primary 3',
    'Primary 4',
    'Primary 5',
    'Primary 6',
  ]

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted with data:', {
      schoolId,
      selectedClass,
      teacherName,
    })
  }

  return (
    <main>
      <article>
        <section>
          <div>
            <div>icon</div>
            <div>
              <h3>Personal Details</h3>
              <p>Fill in your personal details appropriately below.</p>
            </div>
          </div>
          <form onSubmit={handleFormSubmit}>
            <label>
              School ID:
              <input
                type='text'
                value={schoolId}
                onChange={(e) => setSchoolId(e.target.value)}
                required
              />
            </label>

            <label>
              Class:
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                required
              >
                <option value=''>Select Class</option>
                {classOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Teacher's Name:
              <input
                type='text'
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                required
              />
            </label>
          </form>
        </section>
        <section>Hero Image</section>
      </article>
      <div>
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Continue</button>
      </div>
    </main>
  )
}
export default SchoolDetails
