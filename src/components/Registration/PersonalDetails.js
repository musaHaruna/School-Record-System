import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeroOne, StudentIconWhite, Logo } from '../images'
import { Button } from '../../components/ui/button'

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
            <h3>Personal Details</h3>
            <p>Fill in your personal details appropriately below.</p>
          </div>
        </div>


        
        <form onSubmit={handleFormSubmit} className='register-details'>
          <label>
            <h5> Full Name</h5>
            <input
              type='text'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>

          <div>
            <h5>Gender</h5>
            <div className='radio-btn'>
              <label>
                <input
                  type='radio'
                  value='male'
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />
                Male
              </label>

              <label>
                <input
                  type='radio'
                  value='female'
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />
                Female
              </label>
            </div>
          </div>

          <label>
            <h5>Date of Birth</h5>

            <input
              type='date'
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </label>

          <label>
            <h5>Address</h5>

            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
        </form>
        <div className='register-navigate'>
          <div className='btn-blue-border'>
            <i class='fa-solid fa-chevron-left'></i>
            <Link to={'/select-preference'} className='pref-link'>
              Previous
            </Link>
          </div>

          <button className='btn-blue' onClick={nextStep}>
            Continue
          </button>

          {/* <Button variant="outline">Shadcn</Button> */}
        </div>
      </section>
   
    </article>
  )
}

export default PersonalDetails
