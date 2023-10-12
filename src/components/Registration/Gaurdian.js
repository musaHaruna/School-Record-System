import { useState } from 'react'

const Gaurdian = ({ nextStep, prevStep }) => {
  const [fatherName, setFatherName] = useState('')
  const [motherName, setMotherName] = useState('')
  const [fatherContact, setFatherContact] = useState('')
  const [motherContact, setMotherContact] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted with data:', {
      fatherName,
      motherName,
      fatherContact,
      motherContact,
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
              Father's Name:
              <input
                type='text'
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                required
              />
            </label>

            <label>
              Mother's Name:
              <input
                type='text'
                value={motherName}
                onChange={(e) => setMotherName(e.target.value)}
                required
              />
            </label>

            <label>
              Father's Contact:
              <input
                type='text'
                value={fatherContact}
                onChange={(e) => setFatherContact(e.target.value)}
                required
              />
            </label>

            <label>
              Mother's Contact:
              <input
                type='text'
                value={motherContact}
                onChange={(e) => setMotherContact(e.target.value)}
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
export default Gaurdian
