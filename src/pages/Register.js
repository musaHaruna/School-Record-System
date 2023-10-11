import { useState } from 'react'
import { Link } from 'react-router-dom'
import CreatePassword from '../components/create-password/CreatePassword'

function Register() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    address: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  const { fullName, gender, dateOfBirth, address } = formData

  return (
    <div>
      <h1 style={{ display: step === 4 ? 'none' : '' }}>
        Multi-Step Form - Step <span style={{ color: 'blue' }}>{step} </span>/3
      </h1>

      {step === 1 && (
        <div>
          <label htmlFor='fullName'>Full Name:</label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            value={fullName}
            onChange={handleChange}
          />
          <button>
            <Link to={'/select-preference'}>Previous</Link>
          </button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <label>Gender:</label>
          <label>
            <input
              type='radio'
              name='gender'
              value='male'
              checked={gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type='radio'
              name='gender'
              value='female'
              checked={gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <label htmlFor='dateOfBirth'>Date of Birth:</label>
          <input
            type='date'
            id='dateOfBirth'
            name='dateOfBirth'
            value={dateOfBirth}
            onChange={handleChange}
          />
          <label htmlFor='address'>Address:</label>
          <textarea
            id='address'
            name='address'
            value={address}
            onChange={handleChange}
          />
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Continue</button>
        </div>
      )}
      {step > 3 && (
        <div>
          <h3>Create Password</h3>
          <CreatePassword />
          <button onClick={prevStep}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  )
}

export default Register
