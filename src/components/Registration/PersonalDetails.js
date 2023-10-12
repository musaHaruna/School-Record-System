import { useState } from 'react'
import { Link } from 'react-router-dom'

const PersonalDetails = ({ nextStep }) => {
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
              Full Name:
              <input
                type='text'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </label>

            <div>
              <label>
                Gender:
                <input
                  type='radio'
                  value='male'
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />{' '}
                Male
              </label>

              <label>
                <input
                  type='radio'
                  value='female'
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />{' '}
                Female
              </label>
            </div>

            <label>
              Date of Birth:
              <input
                type='date'
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </label>

            <label>
              Address:
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
          </form>
        </section>
        <section>Hero Image</section>
      </article>
      <div>
        <Link to={'/select-preference'}>Previous</Link>
        <button onClick={nextStep}>Continue</button>
      </div>
    </main>
  )
}

export default PersonalDetails
