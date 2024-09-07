import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeroOne, StudentIconWhite, Logo } from '../images'
import { Button } from '../ui/button'

const PersonalDetails = ({ nextStep, step }) => {
  const [fullName, setFullName] = useState('')
  const [gender, setGender] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [address, setAddress] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Here you can handle form submission with the form data
    // For simplicity, we'll log the form data to the console
    console.log('Form submitted with data:', {
      fullName,
      gender,
      dateOfBirth,
      address,
    })
  }

  return (
    
    <article className='register-form-flex'>
       <section className='register-hero'>
        <HeroOne />
      </section>


      <section className='register-content'>
        <div className='logo-sm'>
          <Logo />
        </div>
        <p style={{ display: step === 4 ? 'none' : '' }}>
          <span style={{ color: 'blue' }}>{step} </span>/3
        </p>
        <div className='register-desc'>
          <div className={'icon-reg'}>
            <StudentIconWhite />
          </div>
          <div>
            <h3>Admin Login</h3>
            <p>Enter credentials below.</p>
          </div>
        </div>


        
        <form onSubmit={handleFormSubmit} className='register-details'>
          <label>
            <h5> Username</h5>
            <input
              type='text'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>

          <label>
            <h5>Password</h5>

            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
        </form>
        <div className='register-navigate'>
          <button className='btn-blue' onClick={nextStep}>
            Login
          </button>

          {/* <Button variant="outline">Shadcn</Button> */}
        </div>
      </section>
   
    </article>
  )
}

export default PersonalDetails
