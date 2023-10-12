import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SelectPreference() {
  const [selectedPreference, setSelectedPreference] = useState(null)

  const handlePreferenceClick = (preference) => {
    setSelectedPreference(preference)
  }

  const linkStyles = {
    pointerEvents: selectedPreference ? 'auto' : 'none', // Disable pointer events if no preference is selected
    color: selectedPreference ? '#000' : '#999', // Change color if no preference is selected
  }

  return (
    <main>
      <section>
        <div>Logo</div>
        <h2>Choose Your Preference</h2>
        <p>It will help us, to give you a better experience on our platform.</p>
      </section>
      <section>
        <div>
          <div>
            <div>icon</div>
            <button
              onClick={() => handlePreferenceClick('Administrator')}
              style={{
                border:
                  selectedPreference === 'Administrator'
                    ? '2px solid blue'
                    : '2px solid black',
              }}
            >
              Administrator
            </button>
            <div className='circle'></div>
          </div>
        </div>
        <div>
          <div>
            <div>icon</div>
            <button
              onClick={() => handlePreferenceClick('teacher')}
              style={{
                border:
                  selectedPreference === 'teacher'
                    ? '2px solid blue'
                    : '2px solid black',
              }}
            >
              Teacher
            </button>
            <div className='circle'></div>
          </div>
        </div>
        <div>
          <div>
            <div>icon</div>
            <button
              onClick={() => handlePreferenceClick('student')}
              style={{
                border:
                  selectedPreference === 'student'
                    ? '2px solid blue'
                    : '2px solid black',
              }}
            >
              Student/Parent
            </button>
            <div className='circle'></div>
          </div>
        </div>
      </section>

      <div>
        <Link to={'/register'} style={linkStyles}>
          Continue
        </Link>
      </div>
    </main>
  )
}

export default SelectPreference
